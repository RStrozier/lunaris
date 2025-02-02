import { useState } from "react";
import { useLoading } from "../../context/LoadingContext";
import LoadingIndicator from "../LoadingIndicator";
import useTasks from "../../hooks/useTasks";

const TaskPriority = () => {
  // call in loading context and useTasks custom hook
  const { loading, setLoading } = useLoading();
  const tasks = useTasks(setLoading);

  // State to track the selected priority
  const [selectedPriority, setSelectedPriority] = useState("");

  // Function to filter tasks by priority
  const getFilteredTasks = () => {
    // If no priority is selected, show all tasks aka default to all
    if (!selectedPriority) return tasks; 

    return tasks.filter(
      (task) => (task.priority || "Low") === selectedPriority // Default priority is "Low"
    );
  };

  // Get the filtered tasks based on priority
  const filteredTasks = getFilteredTasks();

  return (
    <>
      {/* Show loading indicator */}
      {loading && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <LoadingIndicator />
        </div>
      )}

      {/* Render task names and priorities */}
      {!loading && tasks.length > 0 && (
        <div className="container">
          <h2 className="text-center mb-4">Tasks and Priorities</h2>

          {/* Buttons to filter by priority */}
          <div className="d-flex justify-content-center mb-4">
            <button
            // if the selected priority is low set class to active
              className={`btn btn-outline-primary me-2 ${
                selectedPriority === "Low" ? "active" : ""
              }`}
              // on click set the selected priority to low
              onClick={() => setSelectedPriority("Low")}
            >
              Low
            </button>
            <button
              className={`btn btn-outline-primary me-2 ${
                selectedPriority === "Normal" ? "active" : ""
              }`}
              onClick={() => setSelectedPriority("Normal")}
            >
              Normal
            </button>
            <button
              className={`btn btn-outline-primary me-2 ${
                selectedPriority === "High" ? "active" : ""
              }`}
              onClick={() => setSelectedPriority("High")}
            >
              High
            </button>
            <button
              className={`btn btn-outline-primary ${
                selectedPriority === "Critical" ? "active" : ""
              }`}
              onClick={() => setSelectedPriority("Critical")}
            >
              Critical
            </button>
            <button
              className={`btn btn-outline-secondary ms-2 ${
                // this is how we show all, if there is no priority selected
                selectedPriority === "" ? "active" : ""
              }`}
              onClick={() => setSelectedPriority("")}
            >
              Show All
            </button>
          </div>

          {/* Render filtered tasks */}
          <ul className="list-unstyled">
            {filteredTasks.map((task, index) => (
              <li key={index} className="mb-2">
                <span className="fw-bold">{task.task}</span> -{" "}
                <span className="text-muted">
                  {task.priority || "Low"} Priority
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Handle no tasks */}
      {!loading && tasks.length === 0 && (
        <div className="text-muted text-center mt-5">
          No tasks available. Please add some tasks! 
        </div>
      )}
    </>
  );
};

export default TaskPriority;