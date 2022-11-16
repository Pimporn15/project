import { pool } from "../utils/db.js";
import { response, Router } from "express";
const productsRouter = Router();

productsRouter.get("/", async (req, res) => {
  const products = await pool.query(`select * from products limit 12
   `);
  return res.status(200).json({
    data: products.rows,
    message: " successfully ",
  });
});

productsRouter.get("/:id", async (req, res) => {
  const productId = req.params.id;
  console.log(req.params.id);
  const productInfo = await pool.query(
    `select * from products where product_id= $1`,
    [productId]
  );
  return res.status(200).json({
    data: productInfo.rows,
    message: " successfully ",
  });
});

productsRouter.get("/:id", async (req, res) => {
  const productId = req.params.id;
  console.log(req.params.id);
  const productInfo = await pool.query(
    `select 1 from products where product_id= $1`,
    [productId]
  );
  return res.status(200).json({
    data: productInfo.rows,
    message: " successfully ",
  });
});

export default productsRouter;
