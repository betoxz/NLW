import { Request, Response } from 'express';
import knex from '../database/connection'

class PointsController {
    async create(request: Request, response: Response) {

        const {
            nome,
            email,
            latitude,
            longitude,
            cidade,
            uf,
            itens
        } = request.body;

        const trx = await knex.transaction();

        const point = {
            imagem: 'image-fake',
            nome,
            email,
            latitude,
            longitude,
            cidade,
            uf
        };

        const InsertedIds = await trx('points').insert(point);

        const point_id = InsertedIds[0];

        const pointsItens = itens.map((item_id: Number) => {
            return {
                item_id,
                point_id,
            }
        });

        const points_itens = await trx('points_itens').insert(pointsItens);

        await trx.commit()

        return response.json({
            id: point_id,
            ...point
        });
    }

    async show(request: Request, response: Response) {

        const { id } = request.params;

        const point = await knex('points').where('id', id).first()

        if (!point)
            return response.status(400).json({ message: 'Ponto não encontrado!' });

        const itens = await knex('itens')
            .join('points_itens', 'itens.id', '=', 'points_itens.item_id')
            .where('points_itens.point_id', id)
            .select('titulo') //se retirar o select dos campos trara todos os campos

        //1 opção
        //point.itens = itens;

        return response.json({ point, itens })
    }

    async index(request: Request, response: Response) {

        const { cidade, uf, itens } = request.query;

        const parsedItens = String(itens)
            .split(',')
            .map(i => Number(i.trim()))

        const points = await knex('points')
            .join('points_itens', 'points.id', '=', 'points_itens.point_id')
            .whereIn('points_itens.item_id', parsedItens)
            .where('cidade', String(cidade))
            .where('uf', String(uf))
            .distinct()
            .select('points.*')

        if (!points)
            return response.status(400).json({ message: 'Nenhum Ponto encontrado!' });

        return response.json(points)
    }
}

export default PointsController;