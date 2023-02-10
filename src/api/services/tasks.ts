import { Task, TaskBody } from '@Types/models';

import { store } from 'firebaseConfig';
import { updateDoc, doc, getDocs, getDoc, setDoc } from 'firebase/firestore';
import { getCollectionRef } from '../utils/firebase/firestore';

const tasksRef = getCollectionRef<Task>(store, process.env.NEXT_TASKS_COLLECTION_NAME);
const getTaskRef = (id: string) => doc(tasksRef, id);

export const getTasks = async (): Promise<Task[]> => {
  const tasksQuery = await getDocs(tasksRef);
  return tasksQuery.docs.map((i) => i.data());
};

export const getTaskById = async (id: string): Promise<Task | undefined> => {
  const taskRef = getTaskRef(id);
  const taskSnap = await getDoc(taskRef);
  return taskSnap.data();
};

export const updateTask = async (id: string, data: Partial<TaskBody>): Promise<void> => {
  const taskRef = getTaskRef(id);
  const task = await getTaskById(id);
  if (!task) {
    throw new Error('Task not found');
  }

  return updateDoc(taskRef, data);
};

export const createTask = async (data: TaskBody): Promise<void> => {
  const id = new Date().getTime().toString();
  const taskRef = getTaskRef(id);
  return setDoc(taskRef, { ...data, id });
};
