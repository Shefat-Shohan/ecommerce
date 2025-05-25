import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello world. How it's going");
});
app.listen(port, () => {
  console.log("Server is running on port", port);
});
