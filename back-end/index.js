const express = require("express");
const admin = require("firebase-admin");
const app = express();

const serviceAccount = require("./serviceAccount.js");

require("dotenv").config();

app.use(express.json());

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

app.get("/api/tasks", (req, res) => {
  const db = admin.firestore();
  db.collection("tasks")
    .get()
    .then((snapshot) => {
      const tasks = snapshot.docs.map((doc) => doc.data());
      res.json(tasks);
    })
    .catch((error) => {
      console.error("Error fetching tasks: ", error);
      res.status(500).json({ error: "Failed to fetch tasks" });
    });
});

app.put("/api/tasks/:id", (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;

  const db = admin.firestore();
  const taskRef = db.collection("tasks").doc(taskId);

  taskRef
    .update(updatedTask)
    .then(() => {
      res.json(updatedTask);
    })
    .catch((error) => {
      console.error("Error updating task: ", error);
      res.status(500).json({ error: "Failed to update task" });
    });
});


app.post("/api/tasks", (req, res) => {
  const { title, active } = req.body;

  const db = admin.firestore();
  const newTaskRef = db.collection("tasks").doc();

  const newTask = {
    id: newTaskRef.id,
    title,
    active,
  };

  newTaskRef
    .set(newTask)
    .then(() => {
      res.status(201).json(newTask);
    })
    .catch((error) => {
      console.error("Error adding task: ", error);
      res.status(500).json({ error: "Failed to add task" });
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
