import * as pg from "pg";

const { Pool } = pg.default;

const pool = new Pool({
  connectionString:postgres://tuyaktvz:${process.env.PASSWORD}@tiny.db.elephantsql.com/tuyaktvz
});

export { pool };
