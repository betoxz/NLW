import { Request, Response } from 'express';

import knex from '../database/connection'

class ItensController {
    async index(request: Request, response: Response) {
        const listaItens = await knex('itens').select('id', 'titulo', 'imagem')

        const listaSerelializada = listaItens.map(i => {
            return {
                id: i.id,
                titulo: i.titulo,
                image_url: `http://${request.headers.host}/uploads/${i.imagem}`
            }
        })
        return response.json(listaSerelializada)
    }
}

export default ItensController;