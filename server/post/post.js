import { pool } from "../utils/db.js";
import { Router } from "express";

const postRouter = Router();

postRouter.get("/", async (req, res) => {
  const usersInfo = await pool.query(`select * from users `);

  return res.status(200).json({
    data: usersInfo.rows,
    message: " successfully ",
  });
});

postRouter.post("/register", async (req, res) => {
  const newUser = {
    ...req.body,
    created_at: new Date(),
    updated_at: new Date(),
    last_login: new Date(),
  };

  await pool.query(
    `insert into users (username, password, firstname,lastname, email, created_at, updated_at, last_login)
      values ($1, $2, $3, $4, $5, $6, $7 ,$8)`,
    [
      newUser.username,
      newUser.password,
      newUser.firstName,
      newUser.lastName,
      newUser.email,
      newUser.created_at,
      newUser.updated_at,
      newUser.last_login,
    ]
  );

  return res.json({
    message: "user has been created.",
  });
});
export default postRouter;
