import express from "express";
import cors from "cors";

import { SendController } from "../controllers/index.js";

const createRoutes = (app) => {
  const Auth = new SendController();

  app.use(express.json());
  app.use(cors());

  // ----- SEND -----
  app.post("/api/send", Auth.send);
};

export default createRoutes;
