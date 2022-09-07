import express from "express";
import dotenv from "dotenv";
import { createServer } from "http";

import { routes } from "./core/index.js";

const app = express();
const http = createServer(app);

dotenv.config();

routes(app);

const PORT = process.env.PORT || 5000;

http.listen(PORT, () => console.log(`Start server: http:localhost:${PORT}`));
