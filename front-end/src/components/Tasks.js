import styled from "styled-components";
import React, { useState, useCallback, useEffect } from "react";

import { fetchTasks, addTask, toggleTaskActiveStatus } from "../api";

const Active = styled.div`
  font-weight: bold;
  cursor: pointer;
`;

const Completed = styled.div`
  text-decoration: line-through;
`;

const Total = styled.div`
  padding-top: 10px;
`;

export function Tasks() {
  const [allTasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const activeTasks = allTasks.filter((task) => task.active);
  const completedTasks = allTasks.filter((task) => !task.active);
  const totalTasks = allTasks.length;

  const isInputValid = newTaskTitle.trim().length > 0;

  useEffect(() => {
    fetchTasksData();
  }, []);

  const fetchTasksData = async () => {
    try {
      const tasks = await fetchTasks();
      setTasks(tasks);
    } catch (error) {
      console.error("Error fetching tasks: ", error);
    }
  };

  const handleAddTask = async () => {
    if (!newTaskTitle.trim()) {
      return;
    }

    const newTask = {
      title: newTaskTitle,
      active: true,
    };

    try {
      await addTask(newTask);
      fetchTasksData();
      setNewTaskTitle("");
    } catch (error) {
      console.error("Error adding task: ", error);
    }
  };

  const markAsCompleted = useCallback(async (task) => {
    const updatedTask = { ...task, active: !task.active };
    try {
      await toggleTaskActiveStatus(task.id, updatedTask);
      fetchTasksData();
    } catch (error) {
      console.error("Error updating task: ", error);
    }
  }, []);

  return (
    <div>
      <input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        required
      />
      <button onClick={handleAddTask} disabled={!isInputValid}>
        Add Task
      </button>
      {activeTasks.map((task) => (
        <Active key={task.id} onClick={() => markAsCompleted(task)}>
          {task.title}
        </Active>
      ))}
      {completedTasks.map((task) => (
        <Completed key={task.id}>{task.title}</Completed>
      ))}
      <Total>Total tasks: {totalTasks}</Total>
    </div>
  );
}
