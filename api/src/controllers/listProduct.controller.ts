import { Request, Response } from "express";
export function listProducts(req: Request, res: Response) {
  res.send("List of product 123.");
}
export function getProductsByID(req: Request, res: Response) {
  res.send("List of product 123.");
}
export function createProducts(req: Request, res: Response) {
  res.send("Create product.");
}
export function updateProducts(req: Request, res: Response) {
  res.send("Update product.");
}
export function deleteProducts(req: Request, res: Response) {
  res.send("Delete product.");
}
