import * as pg from "pg";
import dotenv from "dotenv";
const { Pool } = pg.default;
dotenv.config();
const pool = new Pool({
  connectionString: `	postgres://tuyaktvz:${process.env.PASSWORD}@tiny.db.elephantsql.com/tuyaktvz`,
});

export { pool };
