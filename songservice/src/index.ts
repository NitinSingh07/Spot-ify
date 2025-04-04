import express from "express";
import doetnv from "dotenv";
import songRoutes from "./route.js";

doetnv.config();

const app = express();

app.use("/api/v1", songRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
