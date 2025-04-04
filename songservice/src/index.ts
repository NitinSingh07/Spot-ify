import express from "express";
import doetnv from "dotenv";
import songRoutes from "./route.js";
import redis from "redis";
doetnv.config();

export const redisClient = redis.createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
  },
});

redisClient
  .connect()
  .then(() => {
    console.log("redis connected");
  })
  .catch((err) => {
    console.log("redis not connected", err);
  });

const app = express();

app.use("/api/v1", songRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
