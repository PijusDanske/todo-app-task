import { useState } from 'react';

export const AddTask = ({ setTaskList }) => {
  const [inputValue, setInputValue] = useState('');

  const handleClickAddButton = () => {
    if (inputValue.trim() !== '') {
      setTaskList((prev) => {
        const lastId = Math.max(...prev.map((el) => el.id));

        return [
          ...prev,
          { id: lastId + 1, title: inputValue.trim(), done: false },
        ];
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
        disabled={!inputValue.trim().length > 0}
      >
        Add task
      </button>
    </div>
  );
};
