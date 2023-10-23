const express = require("express");
const cors = require('cors');

const { db } = require('./firebaseConfig');
const { seedData } = require('./seed');
const { COLLECTION_NAME } = require('./constants')

const PORT = process.env.PORT || 6000;

const app = express();

seedData();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/tasks", async (req, res) => {
  try {
    const taskRef = await db.collection(COLLECTION_NAME).get();
    const tasks = taskRef.docs.map(el => el.data());

    return res.json(tasks)
  } catch (e) {
    res.status(500).send(e.message)
  }
});

app.post("/api/task", async (req, res) => {
  const { id, title, done } = req.body;

  if (id !== undefined && title !== undefined && done !== undefined) {
    try {
      const newTaskRef = db.collection(COLLECTION_NAME).doc();
      await newTaskRef.set({
        id,
        title,
        done
      })

      return res.json({ id, title, done });
    } catch (e) {
      res.status(500).send(e.message)
    }
  } else {
    res.status(400).json({ error: 'No data was provided' });
  }
});

app.patch("/api/task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { done } = req.body;

    const taskRef = db.collection(COLLECTION_NAME).where('id', '==', parseInt(id));
    const querySnapshot = await taskRef.get();

    if (querySnapshot.empty) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Update the "done" field of the first matching document
    const taskDoc = querySnapshot.docs[0];
    await taskDoc.ref.update({ done });

    res.status(200).json({ message: 'Task updated successfully' });
  } catch (error) {
    console.error('Error updating task:', error.message);
    res.status(500).json({ error: 'An error occurred while updating the task' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend app listening on port: ${PORT}`)
})