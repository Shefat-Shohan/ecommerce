import { Request, Response } from "express";
import { db } from "../../src/db";
import { productTable } from "../../src/db/productSchema";
import { eq } from "drizzle-orm";

// get product list
export async function listProducts(req: Request, res: Response) {
  try {
    const product = await db.select().from(productTable);
    res.status(200).json({ product: product });
  } catch (error) {
    res.status(500).send(error);
  }
}

// get product by ID from database
export async function getProductsByID(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const [product] = await db
      .select()
      .from(productTable)
      .where(eq(productTable.id, Number(id)));
    if (!product) {
      res.status(404).send({ message: "Product not fround." });
    } else {
      res.status(200).json(product);
    }

    res.status(200).json({ product: product });
  } catch (error) {
    res.status(500).send(error);
  }
}

// create product
export async function createProducts(req: Request, res: Response) {
  console.log(req.body);
  try {
    const [product] = await db
      .insert(productTable)
      .values(req.body)
      .returning();

    res.status(201).json({ product: product });
  } catch (error) {
    res.status(500).send(error);
  }
}

// update product
export async function updateProducts(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const updateProduct = req.body;
    const [product] = await db
      .update(productTable)
      .set(updateProduct)
      .where(eq(productTable.id, id))
      .returning();

    if (product) {
      res.status(205).send(product);
    } else {
      res.status(404).send({ message: "Product was not found." });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

// delete product from database
export async function deleteProducts(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const [deletedProduct] = await db
      .delete(productTable)
      .where(eq(productTable.id, id))
      .returning();
    if (deletedProduct) {
      res.status(204).send({ messge: "Product deleted successfully" });
    } else {
      res.status(404).send({ messge: "Couldn't find the product." });
    }
  } catch (error) {
    res.status(200).send(error);
  }
}
