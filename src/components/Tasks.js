import styled from "styled-components";
import React, { useState, useCallback } from "react";

const Active = styled.div`
  font-weight: bold;
`;

const Done = styled.div`
  text-decoration: line-through;
`;

const Total = styled.div`
  padding-top: 10px;
`;

export function Tasks({ tasks }) {
  const [allTasks, setTasks] = useState(tasks);

  const activeTasks = allTasks.filter((task) => !task.done);
  const completedTasks = allTasks.filter((task) => task.done);
  const totalTasks = allTasks.length;

  const addTask = useCallback(() => {
    setTasks((prevTasks) => [...prevTasks, { title: "new task", done: false }]);
  }, []);

  const markAsCompleted = useCallback((task) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      const index = updatedTasks.indexOf(task);
      updatedTasks[index] = { ...task, done: true };
      return updatedTasks;
    });
  }, []);

  return (
    <div>
      <button onClick={addTask}>Add Task</button>
      {activeTasks.map((task, index) => (
        <Active key={index} onClick={() => markAsCompleted(task)}>
          {task.title}
        </Active>
      ))}
      {completedTasks.map((task, index) => (
        <Done key={index}>{task.title}</Done>
      ))}
      <Total>Total tasks: {totalTasks}</Total>
    </div>
  );
}
