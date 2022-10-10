/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// more configuration https://gist.github.com/NigelEarle/70db130cc040cc2868555b29a0278261
exports.up = function(knex) {
    return knex.schema.createTable('wishlist', function(table) {
        table.increments('id');
        table.string('name', 255).notNullable().defaultTo("-");
        table.string('description', 255).notNullable().defaultTo("-");
        table.string('type', 255).notNullable().defaultTo("wait new release");
        table.boolean('active').notNullable().defaultTo(true);
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    // return knex.schema.dropTable('wishlist').dropTable('users');
    return knex.schema.dropTable('wishlist');
};
