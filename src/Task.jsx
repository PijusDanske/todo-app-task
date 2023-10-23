import styled from 'styled-components';

const Active = styled.div`
  font-weight: bold;
`;

const Done = styled.div`
  text-decoration: line-through;
`;

export const Task = ({ task, onClick }) => {
  const { done, title } = task;

  return (
    <>
      {done ? (
        <Done onClick={() => onClick(title)}>{title}</Done>
      ) : (
        <Active onClick={() => onClick(title)}>{title}</Active>
      )}
    </>
  );
};
