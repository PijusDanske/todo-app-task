import React from 'react';
import styled from 'styled-components';
import NewTaskInput from '@Components/tasks/NewTaskInput';
import { Task } from '@Types/models';

const ActiveTask = styled.div`
  font-weight: bold;
`;

const CompletedTask = styled.div`
  text-decoration: line-through;
`;

const Total = styled.div`
  padding-top: 10px;
`;

type TasksProps = {
  createTask: (taskData: Omit<Task, 'id'>) => void;
  completeTask: (id: Task['id']) => void;
  tasks: Task[];
};

const Tasks = ({ tasks, completeTask, createTask }: TasksProps) => {
  const handleCreateNewTask = (title: string) => {
    createTask({ title, status: 'new' });
  };

  const renderTaskByType = (task: Task) => {
    if (task.status === 'new') {
      return (
        <ActiveTask key={task.id} onClick={() => completeTask(task.id)}>
          {task.title}
        </ActiveTask>
      );
    }

    if (task.status === 'completed') {
      return <CompletedTask key={task.id}>{task.title}</CompletedTask>;
    }

    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    throw new Error(`Unprocessed task status ${task.status}`);
  };

  return (
    <div>
      <NewTaskInput onChange={handleCreateNewTask} />

      {tasks.map((task) => renderTaskByType(task))}

      <Total>Total tasks: {tasks.length}</Total>
    </div>
  );
};

export default Tasks;
