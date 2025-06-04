import express, { json } from "express";
import productRouter from "./routes/products/product.route";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/products", productRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
