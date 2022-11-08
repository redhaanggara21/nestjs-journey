import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.raw(`
        ALTER TABLE users
            RENAME COLUMN user_id to id,
            RENAME COLUMN email_address to email;
    `);
}


export async function down(knex: Knex): Promise<void> {
}

