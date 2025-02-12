import databaseClient from "../../../../database/client";

import type { Result, Rows } from "../../../../database/client";

type Picture = {
  id: number;
  title: string;
  description: string;
  image: string;
  user_id: number;
};

class PicturesRepository {
  async create(picture: Omit<Picture, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into pictures (title, description, image, user_id) values (?, ?, ?, ?)",
      [picture.title, picture.description, picture.image, picture.user_id],
    );

    return result.insertId;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from pictures where id = ?",
      [id],
    );

    return rows[0] as Picture;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from pictures");

    return rows as Picture[];
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from pictures where id = ?",
      [id],
    );

    return result.affectedRows > 0;
  }
}

export default new PicturesRepository();
