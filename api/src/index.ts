import express from "express";
import productRouter from "./routes/products/index";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use("/products", productRouter);

app.listen(port, () => {
  console.log("Server is running on port", port);
});
