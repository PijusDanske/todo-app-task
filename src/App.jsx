import { useState } from 'react';
import { TaskList } from './TaskList';
import { TotalCount } from './Total';

const someTasks = [
  { id: 1, title: 'Wash dishes', done: false },
  { id: 2, title: 'Read book', done: false },
  { id: 3, title: 'Get some sleep', done: true },
];

export const App = () => {
  const [taskList, setTaskList] = useState(someTasks);

  return (
    <>
      <TaskList taskList={taskList} setTaskList={setTaskList} />
      <TotalCount totalCount={taskList.length} />
    </>
  );
};
