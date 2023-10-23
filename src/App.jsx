import { useGetTaskList } from './hooks/useGetTaskList';
import { TaskList, AddTask, MemoedTotalCount } from './components';

export const App = () => {
  const { data } = useGetTaskList();

  return (
    <>
      <AddTask />
      <TaskList taskList={data} />
      <MemoedTotalCount totalCount={data?.length} />
    </>
  );
};
