import axios from "axios";
import { backendBaseUrl } from "./config";

export const fetchTasks = async () => {
  try {
    const response = await axios.get(`${backendBaseUrl}/api/tasks`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks: ", error);
    throw error;
  }
};

export const addTask = async (newTask) => {
  try {
    await axios.post(`${backendBaseUrl}/api/tasks`, newTask);
  } catch (error) {
    console.error("Error adding task: ", error);
    throw error;
  }
};

export const toggleTaskActiveStatus = async (taskId, updatedTask) => {
  try {
    await axios.put(`${backendBaseUrl}/api/tasks/${taskId}`, updatedTask);
  } catch (error) {
    console.error("Error updating task: ", error);
    throw error;
  }
};
