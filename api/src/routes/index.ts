import { Router } from "express";

import { establishmentsRoutes } from "./establishments-route";
import { categoriesRoutes } from "./categories-route";

const routes = Router();
routes.use("/categories", categoriesRoutes);
routes.use("/establishments", establishmentsRoutes);

export { routes };
