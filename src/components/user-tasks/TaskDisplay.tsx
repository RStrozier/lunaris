import { useState } from "react";
import { useLoading } from "../../context/LoadingContext";
import LoadingIndicator from "../LoadingIndicator";
import useTasks from "../../hooks/UseTasks";

const TaskDisplay = () => {
  // Fetch tasks using custom hook
  const { loading, setLoading } = useLoading();
  const tasks = useTasks(setLoading);
  // State to track the selected filter
  const [selectedFilter, setSelectedFilter] = useState("All");

  // function to check if a date is today
  const isToday = (date: Date) => {
    // date constructor
    const today = new Date();
    return (
      // get the day, month, and year
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  // function to check if a date is within the current week
  const isThisWeek = (date: number | Date) => {
    const today = new Date();
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
    const endOfWeek = new Date(today.setDate(startOfWeek.getDate() + 6));
    return date >= startOfWeek && date <= endOfWeek;
  };

  // function to check if a date is within the current month
  const isThisMonth = (date: Date) => {
    const today = new Date();
    return (
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  // Function to filter tasks based on the selected filter
  const getFilteredTasks = () => {
    if (selectedFilter === "All") return tasks;

    return tasks.filter((task) => {
      if (!task.dueDate) return true; // Always display tasks with no due date
      const dueDate = new Date(task.dueDate);

      // if the user selects today, return the tasks who's due date renders isToday true..
      if (selectedFilter === "Today") return isToday(dueDate);
      if (selectedFilter === "This Week") return isThisWeek(dueDate);
      if (selectedFilter === "This Month") return isThisMonth(dueDate);
      return false;
    });
  };

  // Get the filtered tasks
  const filteredTasks = getFilteredTasks();

  return (
    <div className="container-lg">
      {/* Show loading indicator */}
      {loading && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <LoadingIndicator />
        </div>
      )}

      {/* Render tasks and filters */}
      {!loading && tasks.length > 0 && (
        <>
          <h2 className="text-center m-2">Current Tasks List</h2>

          {/* Filter buttons */}
          <div className="container mt-2">
            <div className="d-flex justify-content-center flex-wrap gap-2">
              <button
                className={`btn btn-outline-primary ${selectedFilter === "Today" ? "active" : ""
                  }`}
                onClick={() => setSelectedFilter("Today")}
              >
                Today
              </button>
              <button
                className={`btn btn-outline-primary ${selectedFilter === "This Week" ? "active" : ""
                  }`}
                onClick={() => setSelectedFilter("This Week")}
              >
                This Week
              </button>
              <button
                className={`btn btn-outline-primary ${selectedFilter === "This Month" ? "active" : ""
                  }`}
                onClick={() => setSelectedFilter("This Month")}
              >
                This Month
              </button>
              <button
                className={`btn btn-outline-secondary ${selectedFilter === "All" ? "active" : ""
                  }`}
                onClick={() => setSelectedFilter("All")}
              >
                Show All
              </button>
            </div>
          </div>

          {/* Render filtered tasks */}
          <div
            className="task-list-container mt-3"
            style={{
              maxHeight: "70vh", // Constrain the height of the container
              overflowY: "auto", // Automatically display the scroll when content overflows
              overflowX: "hidden", // Prevent horizontal scrolling
            }}
          >
            <ul className="list-unstyled">
              {filteredTasks.map((task, index) => (
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
        <div className="text-muted text-center mt-5">
          No tasks available. Please begin by entering a task.
        </div>
      )}
    </div>
  );
};

export default TaskDisplay;