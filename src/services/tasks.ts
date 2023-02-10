import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Task, TaskBody } from '@Types/models';

const keys = {
  tasks: 'tasks',
} as const;

const getTasks = () => {
  return axios.get<Task[]>(`/api/tasks`);
};

const useQueryInvalidator = () => {
  const queryClient = useQueryClient();
  return {
    invalidateTasks: () => queryClient.invalidateQueries([keys.tasks]),
  } as const;
};

export const useTasksQuery = () => {
  return useQuery({
    queryKey: [keys.tasks],
    queryFn: () => {
      return getTasks().then((res) => res.data);
    },
  });
};

const completeTask = (id: Task['id']) => {
  return axios.post<void>(`/api/tasks/${id}/complete`);
};

export const useCompleteTaskMutation = () => {
  const { invalidateTasks } = useQueryInvalidator();
  return useMutation(completeTask, {
    onSuccess: () => {
      invalidateTasks();
    },
  });
};

const createTask = (task: TaskBody) => {
  return axios.post<void>(`/api/tasks`, task);
};

export const useCreateTaskMutation = () => {
  const { invalidateTasks } = useQueryInvalidator();
  return useMutation(createTask, {
    onSuccess: () => {
      invalidateTasks();
    },
  });
};
