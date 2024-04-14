import express from "express";
import { searchRouter } from "./search/router.js";

const app = express();

app.use(express.json());
app.use("/api", searchRouter)

app.listen(53000)