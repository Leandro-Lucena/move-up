import { Router } from "express";

import { EstablishmentsController } from "@/controllers/establishments-controller";

const establishmentsRoutes = Router();
const establishmentsController = new EstablishmentsController();

establishmentsRoutes.get(
  "/category/:category_id",
  establishmentsController.index
);
establishmentsRoutes.get("/:id", establishmentsController.show);

export { establishmentsRoutes };
