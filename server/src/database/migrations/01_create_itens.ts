import Knex from 'knex';

export async function up(Knex: Knex) {
    return Knex.schema.createTable('itens', t => {
        t.increments('id').primary();
        t.string('imagem').notNullable();
        t.string('titulo').notNullable();
    })
}

export async function down(Knex: Knex) {
    return Knex.schema.dropTable('itens')
} 