// import { pool } from "../utils/db.js";
// import { Router } from "express";

// const postRouter = Router();

<<<<<<< HEAD
postRouter.get("/", async (req, res) => {
  const usersInfo = await pool.query(`select * from users `);
=======
// postRouter.get("/", async (req, res) => {
//   const usersInfo = await pool.query(`select * from testuser `);
>>>>>>> 8cd3e474de616f3e0a5e0954c32406b1bfc9c69a

//   return res.status(200).json({
//     data: usersInfo.rows,
//     message: " successfully ",
//   });
// });

// postRouter.post("/register", async (req, res) => {
//   const newUser = {
//     ...req.body,
//     created_at: new Date(),
//     updated_at: new Date(),
//     last_login: new Date(),
//   };

//   await pool.query(
//     `insert into users (username, password, firstname,lastname, email, created_at, updated_at, last_login)
//       values ($1, $2, $3, $4, $5, $6, $7 ,$8)`,
//     [
//       newUser.username,
//       newUser.password,
//       newUser.firstName,
//       newUser.lastName,
//       newUser.email,
//       newUser.created_at,
//       newUser.updated_at,
//       newUser.last_login,
//     ]
//   );

//   return res.json({s
//     message: "user has been created.",
//   });
// });
// export default postRouter;
