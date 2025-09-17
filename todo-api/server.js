const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Todo = require("./models/Todo");

const app = express();
app.use(express.json());

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, "public")));

// Connexion MongoDB
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/todos";

mongoose.connect(MONGO_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Route racine pour servir l'application frontend
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Routes CRUD
app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post("/todos", async (req, res) => {
  const todo = new Todo(req.body);
  await todo.save();
  res.status(201).json(todo);
});

app.get("/todos/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) return res.status(404).json({ error: "Not found" });
  res.json(todo);
});

app.put("/todos/:id", async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!todo) return res.status(404).json({ error: "Not found" });
  res.json(todo);
});

app.delete("/todos/:id", async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);
  if (!todo) return res.status(404).json({ error: "Not found" });
  res.json({ message: "Deleted successfully" });
});

// Lancer le serveur
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
