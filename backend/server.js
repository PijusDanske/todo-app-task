const express = require("express");
const cors = require('cors');

const { db } = require('./firebaseConfig');
const { seedData } = require('./seed');

const PORT = process.env.PORT || 6000;

const app = express();

seedData();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/tasks", async (req, res) => {
  try {
    const taskRef = await db.collection('tasks').get();
    const tasks = taskRef.docs.map(el => el.data());

    return res.json(tasks).status(200);
  } catch (e) {
    res.send(e.message).status(500)
  }
});

app.listen(PORT, () => {
  console.log(`Backend app listening on port: ${PORT}`)
})