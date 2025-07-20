import product from "./product.json" assert { type: "json" };
import Product from "./product.js";
import { start } from "../../app.js";

const addProduct = async () => {
  await Product.create(product);
  await start();
};

addProduct()
  .then(() => {
    console.log("✅ Products added and server started.");
  })
  .catch((err) => {
    console.error("❌ Error adding products:", err);
  });
