import Knex from 'knex';

export async function seed(Knex: Knex) {
    await Knex('itens').insert([
        { titulo: 'Lâmpada', imagem: 'lampadas.svg' },
        { titulo: 'Pilhas e Baterias', imagem: 'baterias.svg' },
        { titulo: 'Papéis e Papelão', imagem: 'papeis-papelao.svg' },
        { titulo: 'Resíduos Eletrônicos', imagem: 'eletronicos.svg' },
        { titulo: 'Resíduos Orgânicos', imagem: 'organicos.svg' },
        { titulo: 'Óleo de Cozinha', imagem: 'oleo.svg' },
    ])

}