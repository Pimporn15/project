// โค้ดนี้อยู่ในไฟล์ server/apps/auth.js

import { Router } from "express";
import { pool } from "../utils/db.js";

const authRouter = Router();
authRouter.post("/register", async (req, res) => {
  const user = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };

  // let salt = await bcrypt.genSalt(10);
  // user.password = await bcrypt.hash(user.password, salt);

  await pool.query(
    `
      insert into users(username, password, email, firstName, lastName),
    values($1,$2,$3,$4,$5)`,
    [user.username, , user.password, user.email, user.firstName, user.lastName]
  );

  return res.json({
    message: "Your account has been created succesfully",
  });
});
export default authRouter;
