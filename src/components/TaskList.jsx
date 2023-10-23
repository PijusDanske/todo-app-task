import { MemoedTask } from './Task';

export const TaskList = ({ taskList }) => {
  return (
    <>
      {taskList &&
        taskList.map((task) => <MemoedTask key={task.id} task={task} />)}
    </>
  );
};
