export type TaskStatus = 'new' | 'completed';

type WithId<T> = T & { id: string };

export type TaskBody = {
  title: string;
  status: TaskStatus;
};

export type Task = WithId<TaskBody>;

export type ResponseError = {
  message: string;
};
