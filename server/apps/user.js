import { pool } from "../utils/db.js";
import { Router } from "express";
import { protect } from "../middlewares/protect.js";

const userRouter = Router();

userRouter.get("/", async (req, res) => {
  const usersInfo = await pool.query(`select * from users `);

  return res.status(200).json({
    data: usersInfo.rows,
    message: " successfully ",
  });
});
userRouter.get("/:id", async (req, res) => {
  const userId = req.params.id;
  console.log(req.params.id);
  const userInfo = await pool.query(`select * from users where user_id= $1`, [
    userId,
  ]);
  return res.status(200).json({
    data: userInfo.rows,
    message: " successfully ",
  });
});
userRouter.get("/1", async (req, res) => {
  const userId = req.params.id;
  console.log(req.params.id);
  const usersInfo = await pool.query(
    `select * from products where user_id= $1`,
    [userId]
  );
  return res.status(200).json({
    data: usersInfo.rows,
    message: " successfully ",
  });
});

export default userRouter;
