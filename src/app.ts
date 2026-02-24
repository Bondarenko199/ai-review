import express from "express";
import { healthRouter } from "./routes/health";

const app = express();

app.use(express.jsonp());

app.use("/health", healthRouter);

export { app };
