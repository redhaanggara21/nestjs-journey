import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    return knex('comment').del().then(function () {
      return knex('comment').insert([
        {  username: "redha10", title: "title1",  comment: "hi 1", created_time: "2019-09-03", updated_time: "2019-09-03" },
        {  username: "redha20", title: "title2",  comment: "hi 2", created_time: "2019-09-03", updated_time: "2019-09-03" },
        {  username: "redha30", title: "title3",  comment: "hi 3", created_time: "2019-09-03", updated_time: "2019-09-03" }
      ]);
    });
};
