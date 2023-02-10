import React, { useState } from 'react';
import styled from 'styled-components';

const AddNewTaskButton = styled.button``;

type NewTaskInputProps = {
  onChange: (title: string) => void;
};

const NewTaskInput = ({ onChange }: NewTaskInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleCreateNew = () => {
    onChange(inputValue);
    setInputValue('');
  };

  const handleInputChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(changeEvent.target.value);
  };

  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} type="text" aria-label="task-label-input" />

      <AddNewTaskButton
        disabled={inputValue.trim().length === 0}
        onClick={handleCreateNew}
        aria-label="new-task-button"
      >
        Add new task
      </AddNewTaskButton>
    </div>
  );
};

export default NewTaskInput;
