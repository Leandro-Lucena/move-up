import { Request, Response, NextFunction } from "express";
import { prisma } from "@/database/prisma";
import { z } from "zod";

class EstablishmentsController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const paramsSchema = z.object({
        category_id: z.string().uuid(),
      });

      const { category_id } = paramsSchema.parse(request.params);

      const establishments = await prisma.establishment.findMany({
        where: { categoryId: category_id },
        orderBy: { name: "asc" },
      });

      return response.json(establishments);
    } catch (error) {
      next(error);
    }
  }

  async show(request: Request, response: Response, next: NextFunction) {
    try {
      const paramsSchema = z.object({
        id: z.string().uuid(),
      });

      const { id } = paramsSchema.parse(request.params);

      const establishments = await prisma.establishment.findUnique({
        where: { id },
        include: {
          rules: true,
        },
      });

      return response.json(establishments);
    } catch (error) {
      next(error);
    }
  }
}

export { EstablishmentsController };
