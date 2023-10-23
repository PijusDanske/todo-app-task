import { memo, useCallback } from 'react';
import styled from 'styled-components';

const TaskDiv = styled.div`
  font-weight: ${(props) => (!props.$iscompleted ? 'bold' : 'normal')};
  text-decoration: ${(props) => (props.$iscompleted ? 'line-through' : 'none')};
`;

export const Task = ({ task, setTaskList }) => {
  const { done, title, id } = task;

  const onClick = useCallback((id) => {
    setTaskList((prev) => {
      return [
        ...prev.map((el) => {
          if (el.id === id) {
            return { ...el, done: !el.done };
          }

          return el;
        }),
      ];
    });
  }, []);

  return (
    <TaskDiv $iscompleted={done} onClick={() => onClick(id)}>
      {title}
    </TaskDiv>
  );
};

export const MemoedTask = memo(Task);
