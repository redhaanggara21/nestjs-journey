import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('wishlist_two', function(table) {
        table.increments('id');
        table.string('name').notNullable().defaultTo("-");
        table.string('description').notNullable().defaultTo("-");
        table.string('type').notNullable().defaultTo("wait new release");
        table.boolean('active').notNullable().defaultTo(true);
        // table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now());
        table.timestamp('updated_at', { useTz: true }).defaultTo(knex.fn.now());
        // table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('wishlist_two');
}

