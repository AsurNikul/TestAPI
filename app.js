import express from "express";
import dotenv from "dotenv";
import router from "./src/routes/index.js";
import {connectDB} from "./src/db/connect.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
console.log("🚀 ~ PORT:", PORT);

app.get("/", (req, res) => {
  res.send("Hello our server is live");
});

app.use(router);

export const start = async () => {
  try {
    app.listen(PORT, (res) => {
      console.log("PORT", res);
      connectDB()
    });
  } catch (error) {}
};

start();
