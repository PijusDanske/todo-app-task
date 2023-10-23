const { db } = require('./firebaseConfig');
const { MOCK_DATA } = require('./mockData')
const { COLLECTION_NAME } = require('./constants')


const seedData = async () => {
  try {
    const taskRef = await db.collection(COLLECTION_NAME).get();
    const tasks = taskRef.docs.map(el => el.data());

    if (tasks.length < 3) {
      MOCK_DATA.forEach(async (item) => {
        const newTaskRef = db.collection(COLLECTION_NAME).doc();
        await newTaskRef.set(item);

        console.log('Seeding succeess for task: ' + JSON.stringify(item));
      })
    }

  } catch (e) {
    console.log('Error while seeding data', e.message)
  }
}

module.exports = { seedData }