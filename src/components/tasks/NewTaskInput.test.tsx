import { render, fireEvent } from '@testing-library/react';
import NewTaskInput from '@Components/tasks/NewTaskInput';

describe('NewTaskInput', () => {
  const setup = (params) => {
    const utils = render(<NewTaskInput {...params} />);
    const input = utils.getByLabelText('task-label-input');
    const button = utils.getByLabelText('new-task-button');
    return {
      ...utils,
      input,
      button,
    };
  };

  test('Button is disabled by default', () => {
    const { button } = setup({});
    expect(button).toBeDisabled();
  });

  test('Input is empty by default', () => {
    const { input } = setup({});
    expect(input).toHaveValue('');
  });

  test('Button is enabled when input is not empty', () => {
    const { input, button } = setup({});
    fireEvent.change(input, { target: { value: '5' } });
    expect(button).not.toBeDisabled();
  });

  test('After a button is clicked, callback is called with the input value', () => {
    const mockCallback = jest.fn();
    const { input, button } = setup({ onChange: mockCallback });
    fireEvent.change(input, { target: { value: '5' } });
    fireEvent.click(button);
    expect(mockCallback.mock.calls).toHaveLength(1);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(mockCallback.mock.calls[0][0]).toBe('5');
  });
});
