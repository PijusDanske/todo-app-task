import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from './queryKeys'

export const fetchTasks = async () => {
  try {
    const response = await axios.get('api/tasks');
    return response.data;
  } catch (error) {
    console.error('Error fetching task list: ', error);
  }
};

export const useGetTaskList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.GET_TASK_LIST],
    queryFn: fetchTasks,
  })

  return {
    data,
    isLoading,
    isError
  }
}