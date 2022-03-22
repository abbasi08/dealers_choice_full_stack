const express = require("express");
const app = express();
const path = require("path");
const syncAndSeed = require("./db/syncAndSeed");

app.use(express.json());
app.use("/dist", express.static(path.join(__dirname, "dist")));
app.use("/public", express.static(path.join(__dirname, "../public")));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

const start = async () => {
  try {
    await syncAndSeed();
    const port = process.env.PORT || 3003;
    app.listen(port, () => console.log(`Listening on port ${port}`));
  } catch (ex) {
    console.log(ex);
  }
};

start();
