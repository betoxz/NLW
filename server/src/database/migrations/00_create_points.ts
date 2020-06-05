import Knex from 'knex';

export async function up(Knex: Knex) {
    return Knex.schema.createTable('points', t => {
        t.increments('id').primary();
        t.string('imagem').notNullable();
        t.string('nome').notNullable();
        t.string('email').notNullable();
        t.decimal('latitude').notNullable();
        t.decimal('longitude').notNullable();
        t.string('cidade').notNullable();
        t.string('uf', 2).notNullable();
    })
}

export async function down(Knex: Knex) {
    return Knex.schema.dropTable('points')
} 