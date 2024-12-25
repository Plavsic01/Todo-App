const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// Inicijalizacija Express aplikacije
const app = express();
const PORT = 5000; // Možeš promeniti port ako ti je potrebno

// Middleware
app.use(cors()); // Omogućava CORS
app.use(bodyParser.json()); // Omogućava parsiranje JSON podataka

// Povezivanje sa MongoDB bazom podataka
mongoose
  .connect("mongodb://admin:secret@localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Definisanje Todo modela
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

// CRUD Operacije

// 1. CREATE - Dodaj novi zadatak
app.post("/todos", async (req, res) => {
  try {
    const { title } = req.body;
    const newTodo = new Todo({
      title,
      completed: false, // Po defaultu nije završeno
    });

    await newTodo.save();
    res.status(201).json(newTodo); // Vraća kreirani zadatak
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. READ - Dobij sve zadatke
app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. READ - Dobij jedan zadatak po ID-u
app.get("/todos/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. UPDATE - Ažuriraj zadatak
app.put("/todos/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(updatedTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 5. DELETE - Obriši zadatak
app.delete("/todos/:id", async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    console.log(deletedTodo);
    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Pokrećemo server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
