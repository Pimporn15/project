import * as pg from "pg";

const { Pool } = pg.default;

const pool = new Pool({
  connectionString: `	postgres://tuyaktvz:W95jcCscxVJJUEM5YiCsk2_7XEj_jq17@tiny.db.elephantsql.com/tuyaktvz`,
});

export { pool };
