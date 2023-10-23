import { useState } from 'react';
import { useCreateNewTask } from '../hooks/useCreateNewTask';

export const AddTask = ({ taskList }) => {
  const { isPending, mutate } = useCreateNewTask();
  const [inputValue, setInputValue] = useState('');

  const handleClickAddButton = () => {
    if (inputValue.trim() !== '') {
      const lastId = Math.max(...taskList.map((el) => el.id));
      mutate({
        id: lastId + 1,
        title: inputValue,
        done: false,
      });
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleClickAddButton()}
      />
      <button
        onClick={handleClickAddButton}
        disabled={!inputValue.trim().length > 0 || isPending}
      >
        Add task
      </button>
    </div>
  );
};
