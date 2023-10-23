import { Task } from './Task';

export const TaskList = ({ taskList, setTaskList }) => {
  const onClick = (title) => {
    const currentItem = taskList.find((el) => el.title === title);

    if (currentItem) {
      setTaskList((prev) =>
        [
          ...prev.filter((el) => el.title !== title),
          { ...currentItem, done: !currentItem.done },
        ].sort((a, b) => a.id - b.id)
      );
    }
  };

  return (
    <>
      {taskList &&
        taskList.map((task) => (
          <Task key={task.id} task={task} onClick={onClick} />
        ))}
    </>
  );
};
