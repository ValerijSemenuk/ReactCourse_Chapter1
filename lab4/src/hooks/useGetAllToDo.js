import { useState, useEffect } from 'react';

const useGetAllToDo = () => {
  const [toDoL, setToDoL] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const result = await response.json();
        setToDoL(result);
        console.log('Fetched Data:', result);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { toDoL, isLoading, error, setToDoL};
};
export default useGetAllToDo;