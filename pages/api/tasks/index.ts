import { NextApiRequest, NextApiResponse } from 'next';
import { Task, ResponseError, TaskBody } from '@Types/models';
import { getTasks, createTask } from '@ApiServices/tasks';

export default async function tasks(req: NextApiRequest, res: NextApiResponse<Task[] | ResponseError | ''>) {
  if (req.method === 'GET') {
    const tasks = await getTasks();
    return res.status(200).json(tasks);
  }

  if (req.method === 'POST') {
    const taskBody = req.body as TaskBody; // Schema validator could be used
    await createTask(taskBody);
    return res.status(201).json('');
  }

  return res.status(405).json({ message: `Method Not Allowed` });
}
