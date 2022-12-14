/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// more configuration https://gist.github.com/NigelEarle/70db130cc040cc2868555b29a0278261
exports.up = function(knex) {
    // return knex.schema.createTable('wishlist', function(table) {
    //     table.increments('id');
    //     table.string('name').notNullable().defaultTo("-");
    //     table.string('description').notNullable().defaultTo("-");
    //     table.string('type').notNullable().defaultTo("wait new release");
    //     table.boolean('active').notNullable().defaultTo(true);
    //     // table.timestamp('created_at').defaultTo(knex.fn.now());
    //     table.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now());
    //     table.timestamp('updated_at', { useTz: true }).defaultTo(knex.fn.now());
    //     // table.timestamp('updated_at').defaultTo(knex.fn.now());
    // });
    return knex.schema.createTable('wishlist', function (table) {
        table.increments('id');
        table.string('first_name', 255).notNullable();
        table.string('last_name', 255).notNullable();
    })
};


exports.down = function(knex) {
    // return knex.schema.dropTable('wishlist').dropTable('users');
    return knex.schema.dropTable('wishlist');
};

exports.config = { transaction: false };
