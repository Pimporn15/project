import { pool } from "../utils/db.js";
import { response, Router } from "express";
const productsRouter = Router();

productsRouter.get("/", async (req, res) => {
  const category = Number(req.query.category);
  console.log(req.query > category);

  let query = "";
  let values = [];
  if (category === 5) {
    query = `select * from products ORDER BY created_at desc
      limit 10`;
  } else if (category) {
    query = `select * from products where category_id = $1`;
    values = [category];
  } else {
    query = `select * from products`;
  }

  const results = await pool.query(query, values);

  return res.json({
    data: results.rows,
  });
});

productsRouter.get("/newproduct", async (req, res) => {
  const created = req.query.created;
  const createProduct = await pool.query(
    `SELECT *
      FROM products
      ORDER BY created_at desc
      limit 10`
  );
  return res.status(200).json({
    data: createProduct.rows,
    message: " successfully ",
  });
});

// productsRouter.get("/", async (req, res) => {
//   const products = await pool.query(`select * from products limit 12`);
//   return res.status(200).json({
//     data: products.rows,
//     message: " successfully ",
//   });
// });

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

productsRouter.get("/", async (req, res) => {
  const category = req.query.category;
  const productCategory = await pool.query(
    console.log(productCategory)`select * from products where category_id = $1
   `,
    [category]
  );
  return res.status(200).json({
    data: productCategory.rows,
    message: " successfully ",
  });
});

export default productsRouter;
