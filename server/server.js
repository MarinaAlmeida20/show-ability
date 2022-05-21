const express = require("express");
const app = express();
const data = require("./data.json");
const cors = require("cors");

app.use(cors());

// const data = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express"];

app.get("/", (req, res, next) => {
  res
    .status(200)
    .send(
      "Use /api/v1/modules/ to get all modules and /api/v1/modules/id to get module by id"
    );
});

app.get("/api/v1/modules/", (req, res, next) => {
  res.status(200).json(data);
});

app.get("/api/v1/modules/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const found = data.find((module) => module.id === id);
  if (found) res.status(200).json(found);
  else res.status(404).send("Module not found!");
});

app.put("/api/v1/modules/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const comment = req.params.comment;
  const module = data.find((module) => module.id === id);
  module.comments.push(comment);
  res.sendStatus(200);
});

app.get("/*", (req, res, next) => {
  res.redirect("/");
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server starting on port ${port}`);
});
