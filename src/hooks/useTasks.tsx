import { useState, useEffect } from "react";
import { Task } from "../data/Types";
import { getTaskData } from "../utilities/getTaskData";

// custom hooks are dependent on react features like usestate
const useTasks = (setLoading: (value: boolean) => void) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const taskData = await getTaskData();
        setTasks(taskData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [setLoading]);

  return tasks;
};

export default useTasks;