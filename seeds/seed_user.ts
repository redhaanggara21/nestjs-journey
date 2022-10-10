import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // // Deletes ALL existing entries
    // await knex("comment").del();

    // // Inserts seed entries
    // await knex("comment").insert([
    //     { id: 1, username: "redha1", title: "title1",  comment: "hi 1", created_time: "2019-09-03 00:00:00+07", updated_time: "2019-09-03 00:00:00+07" },
    //     { id: 2, username: "redha2", title: "title2",  comment: "hi 2", created_time: "2019-09-03 00:00:00+07", updated_time: "2019-09-03 00:00:00+07" },
    //     { id: 3, username: "redha3", title: "title3",  comment: "hi 3", created_time: "2019-09-03 00:00:00+07", updated_time: "2019-09-03 00:00:00+07" }
    // ]);
    return knex('comment').del().then(function () {
      return knex('comment').insert([
        { comment_id: 1, username: "redha10", title: "title1",  comment: "hi 1", created_time: "2019-09-03", updated_time: "2019-09-03" },
        { comment_id: 2, username: "redha20", title: "title2",  comment: "hi 2", created_time: "2019-09-03", updated_time: "2019-09-03" },
        { comment_id: 3, username: "redha30", title: "title3",  comment: "hi 3", created_time: "2019-09-03", updated_time: "2019-09-03" }
      ]);
    });
};
