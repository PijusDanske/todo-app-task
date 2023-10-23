import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { queryClient } from './queryClient'
import { QUERY_KEYS } from './queryKeys'


export const useUpdateTask = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, done }) => axios.patch(`api/task/${id}`, { done }),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_TASK_LIST] }) },
    onError: (e) => console.error(e.message)
  })

  return {
    mutate,
    isPending
  }
}