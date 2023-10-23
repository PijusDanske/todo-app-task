import { memo, useCallback } from 'react';
import styled from 'styled-components';
import { useUpdateTask } from '../hooks/useUpdateTask';

const TaskDiv = styled.div`
  font-weight: ${(props) => (!props.$iscompleted ? 'bold' : 'normal')};
  text-decoration: ${(props) => (props.$iscompleted ? 'line-through' : 'none')};
`;

export const Task = ({ task }) => {
  const { done, title, id } = task;

  const { mutate, isPending } = useUpdateTask();

  const onClick = useCallback(() => {
    if (!isPending) {
      mutate({ id, done: !done });
    }
  }, [task, isPending]);

  return (
    <TaskDiv $iscompleted={done} onClick={onClick}>
      {title}
    </TaskDiv>
  );
};

export const MemoedTask = memo(Task);
