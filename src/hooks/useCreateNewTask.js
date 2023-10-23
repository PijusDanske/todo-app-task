import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { queryClient } from './queryClient'
import { QUERY_KEYS } from './queryKeys'


export const useCreateNewTask = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: (newTask) => axios.post('api/task', newTask),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_TASK_LIST] }) },
    onError: (e) => console.error(e.message)
  })

  return {
    mutate,
    isPending
  }
}