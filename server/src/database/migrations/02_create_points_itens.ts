import Knex from 'knex';

export async function up(Knex: Knex) {
    return Knex.schema.createTable('points_itens', t => {
        t.increments('id').primary();
        t.integer('item_id').notNullable().references('id').inTable('itens');
        t.integer('point_id').notNullable().references('id').inTable('points');
    })
}

export async function down(Knex: Knex) {
    return Knex.schema.dropTable('points_itens')
} 