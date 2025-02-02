import { useEffect, useState } from "react";
import { useLoading } from "../../context/LoadingContext";
import { Task } from "../../data/Types";
import { getTaskData } from "../../utilities/getTaskData";
import LoadingIndicator from "../LoadingIndicator";

const TaskDisplay = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true); // Show loading indicator
      try {
        // this is from the utility 
        const taskData = await getTaskData();
        setTasks(taskData); // Set fetched tasks
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false); // Hide loading indicator
      }
    };

    fetchTasks();
  }, [setLoading]);

  return (
    <div className="container-lg">
      {/* Show the loading indicator while loading */}
      {loading && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <LoadingIndicator />
        </div>
      )}

      {/* Render tasks if available */}
      {!loading && tasks.length > 0 && (
        <>
        <h3 className="text-center m-1">Current Task List</h3>

        <div className="row mt-2 justify-content-center text-primary">
            <div className="col-auto">Today</div>
            <div className="col-auto">This Week</div>
            <div className="col-auto">Month Object</div>
        </div>
     
         <ul className="list-unstyled mt-2">
          {tasks.map((task, index) => (
            <li key={index} className="mb-3">
              <div className="fw-bold fs-5">{task.task}</div>
              {task.createdAt && (
                <div className="text-muted">
                  <span className="fw-bold">Date Created:</span> {task.createdAt}
                </div>
              )}
              {task.dueDate && (
                <div className="text-muted">
                  <span className="fw-bold">Due Date:</span> {task.dueDate}
                </div>
              )}
              {task.priority && (
                <div className="text-muted">
                  <span className="fw-bold">Priority:</span> {task.priority}
                </div>
              )}
            </li>
          ))}
        </ul>
        </>
      )}

      {/* Show "No tasks available" if tasks are empty and not loading */}
      {!loading && tasks.length === 0 && (
        <div className="text-muted">No tasks available. Please 
        begin by entering a task.</div>
      )}
    </div>
  );
};


export default TaskDisplay;