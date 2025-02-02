import { useLoading } from "../../context/LoadingContext";
import LoadingIndicator from "../LoadingIndicator";
import useTasks from "../../hooks/UseTasks";

const TaskDisplay = () => {
  const { loading, setLoading } = useLoading();
  // using my custom hook to grab the tasks and waiting until it loads
  const tasks = useTasks(setLoading); 

  return (
    <div className="container-lg">
      {/* Show loading indicator */}
      {loading && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <LoadingIndicator />
        </div>
      )}

      {/* Render tasks if available */}
      {!loading && tasks.length > 0 && (
        <>
          <h2 className="text-center m-2">All Current Tasks List</h2>

          <div className="container mt-2">
            <div className="row justify-content-between text-center">
              <div className="col-auto">Today</div>
              <div className="col-auto">This Week</div>
              <div className="col-auto">This Month</div>
            </div>
          </div>
          <div className="mt-1 text-primary small">Sort or scroll to view all</div>
          <div
            className="task-list-container mt-1"
            style={{
              maxHeight: "70vh", 
              overflowY: "auto", 
            }}
          >
            <ul className="list-unstyled">
              {tasks.map((task, index) => (
                <li key={index} className="mb-3">
                  <div className="fw-bold fs-5">{task.task}</div>
                  {task.createdAt && (
                    <div className="text-muted">
                      <span className="fw-bold">Date Created:</span>{" "}
                      {task.createdAt}
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
          </div>
        </>
      )}

      {/* Handle no tasks */}
      {!loading && tasks.length === 0 && (
        <div className="text-muted">
          No tasks available. Please begin by entering a task.
        </div>
      )}
    </div>
  );
};

export default TaskDisplay;