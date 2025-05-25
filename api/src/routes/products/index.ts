import { Router } from "express";

const router = Router();
router.get("/", (req, res) => {
  res.send("List of product 123.");
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  res.send("A products");
});

router.post("/", (req, res) => {
  res.send("Available product in the shop.");
});
export default router;
