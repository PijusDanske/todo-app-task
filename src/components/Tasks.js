import styled from "styled-components";
import React, { useState, useCallback } from "react";

const Active = styled.div`
  font-weight: bold;
`;

const Completed = styled.div`
  text-decoration: line-through;
`;

const Total = styled.div`
  padding-top: 10px;
`;

export function Tasks({ tasks }) {
  const [allTasks, setTasks] = useState(tasks);

  const activeTasks = allTasks.filter((task) => !task.active);
  const completedTasks = allTasks.filter((task) => task.active);
  const totalTasks = allTasks.length;

  const addTask = useCallback(() => {
    setTasks((prevTasks) => [...prevTasks, { title: "new task", active: false }]);
  }, []);

  const markAsCompleted = useCallback((task) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      const index = updatedTasks.indexOf(task);
      updatedTasks[index] = { ...task, active: true };
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
        <Completed key={index}>{task.title}</Completed>
      ))}
      <Total>Total tasks: {totalTasks}</Total>
    </div>
  );
}
