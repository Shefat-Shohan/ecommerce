import express from "express";
import productRouter from "./routes/products/product.route";

const app = express();
const port = 8000;

app.use("/api/v1/products", productRouter);

app.listen(port, () => {
  console.log("Server is running on port", port);
});
