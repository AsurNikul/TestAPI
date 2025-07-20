import express from "express";
import {
  getAllProduct,
  getAllTestingProduct,
  searchProduct
} from "../controllers/products.js";

const router = express.Router();

router.route("/product").get(getAllProduct);
router.route("/productsTest").get(getAllTestingProduct);
router.route("/searchProduct").get(searchProduct);


export default router;
