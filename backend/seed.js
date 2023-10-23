const { db } = require('./firebaseConfig');

const MOCK_DATA = [
  { id: 1, title: 'Wash dishes', done: false },
  { id: 2, title: 'Read book', done: false },
  { id: 3, title: 'Get some sleep', done: true },
]

const seedData = async () => {
  try {
    const taskRef = await db.collection('tasks').get();
    const tasks = taskRef.docs.map(el => el.data());

    if (tasks.length < 3) {
      MOCK_DATA.forEach(async (item) => {
        const newTaskRef = db.collection("tasks").doc();
        await newTaskRef.set(item);

        console.log('Seeding succeess for task: ' + JSON.stringify(item));
      })
    }

  } catch (e) {
    console.log('Error while seeding data', e.message)
  }
}

module.exports = { seedData }