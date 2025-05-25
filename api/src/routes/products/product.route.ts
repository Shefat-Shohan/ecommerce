import { Router } from "express";
import {
  listProducts,
  getProductsByID,
  createProducts,
  updateProducts,
  deleteProducts,
} from "../../controllers/listProduct.controller";

const router = Router();

router.get("/", listProducts);
router.get("/:id", getProductsByID);
router.post("/", createProducts);
router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts);

export default router;
