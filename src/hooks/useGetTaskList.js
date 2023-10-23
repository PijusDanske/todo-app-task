import axios from 'axios';
import { useQuery } from '@tanstack/react-query';


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
    queryKey: ['tasklist'],
    queryFn: fetchTasks,
  })

  return {
    data,
    isLoading,
    isError
  }
}