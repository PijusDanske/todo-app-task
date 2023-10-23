import { MemoedTask } from './Task';

export const TaskList = ({ taskList, setTaskList }) => {
  return (
    <>
      {taskList &&
        taskList.map((task) => (
          <MemoedTask key={task.id} task={task} setTaskList={setTaskList} />
        ))}
    </>
  );
};
