import React from 'react';
import Tasks from '@Components/tasks/Tasks';
import { Task, TaskBody } from '@Types/models';
import { useCompleteTaskMutation, useCreateTaskMutation, useTasksQuery } from '@Services/tasks';

/*
  All the code from the TasksContainer could be moved to the corresponding components
 */
const TasksContainer = () => {
  const tasksQuery = useTasksQuery();
  const completeTaskMutation = useCompleteTaskMutation();
  const createTaskMutation = useCreateTaskMutation();

  const handleAddTask = (newTask: TaskBody) => {
    createTaskMutation.mutateAsync(newTask);
  };

  const handleCompleteTask = (taskId: Task['id']) => {
    completeTaskMutation.mutateAsync(taskId);
  };

  if (tasksQuery.isLoading) {
    return <div>Is loading...</div>;
  }

  if (tasksQuery.isError) {
    return <div>Error</div>;
  }

  return <Tasks tasks={tasksQuery.data} createTask={handleAddTask} completeTask={handleCompleteTask} />;
};

export default TasksContainer;
