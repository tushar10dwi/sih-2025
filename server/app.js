const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server is Running!");
});

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
