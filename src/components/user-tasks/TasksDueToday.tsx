import { useState, useEffect } from "react";
import { useLoading } from "../../context/LoadingContext";
import { Task } from "../../data/Types";
import { getTaskData } from "../../utilities/getTaskData";

const TasksDueToday = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksDueToday, setTasksDueToday] = useState<Task[]>([]);
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        // get the task data from the utility, converted to UTC
        const taskData = await getTaskData();
        setTasks(taskData);
        // get today's local date and convert to UTC string
        const today = new Date().toLocaleDateString(); 
        // look for task that due date are equal to today
        const filteredTasks = taskData.filter((task) => task.dueDate === today);
        // and set to filtered tasks
        setTasksDueToday(filteredTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [setLoading]);

  return (
    <div className="container-lg mt-3">
      <h3 className="text-center mb-3">Tasks Due Today</h3>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : tasksDueToday.length > 0 ? (
        <ul className="list-group">
          {tasksDueToday.map((task, index) => (
            <li key={index} className="list-group-item">
              <div className="fw-bold">{task.task}</div>
              {task.priority && (
                <div className="text-muted">
                  Priority: <span className="fw-bold">{task.priority}</span>
                </div>
              )}
              {task.dueDate && (
                <div className="text-muted">Due: {task.dueDate}</div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-muted">No tasks are due today.</div>
      )}
    </div>
  );
};

export default TasksDueToday;