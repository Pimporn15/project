import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authRouter from "./apps/auth.js";
import postRouter from "./post/post.js";

let app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());
// app.use(authRouter);
app.use(postRouter);
app.get("/", (req, res) => {
  return res.json({ massage: "naja" });
});

app.listen(port, () => {
  console.log("server is runing on port 4000");
});
