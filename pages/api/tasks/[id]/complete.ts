import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseError } from '@Types/models';
import { updateTask } from '@ApiServices/tasks';

export default function complete(req: NextApiRequest, res: NextApiResponse<ResponseError | ''>) {
  if (req.method === 'POST') {
    updateTask(req.query.id as string, { status: 'completed' }).then(() => {
      res.status(200).json('');
    });
  } else {
    return res.status(405).json({ message: `Method Not Allowed` });
  }
}
