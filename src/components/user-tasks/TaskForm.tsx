import { useForm, SubmitHandler } from "react-hook-form";
import { TaskFormData } from "../../data/Types";
import { db } from "../../auth/firebaseConfig";
 // Firestore methods
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useState } from "react";

const TaskForm = () => {
  // React Hook Form setup
  const { register, handleSubmit, formState: { errors }} = useForm<TaskFormData>();

  // State to handle success or error messages 
  const [message, setMessage] = useState<string | null>(null);

  // Function to handle form submission
  const onSubmit: SubmitHandler<TaskFormData> = async (data) => {
    try {
      // Reference to "tasks" fb method collection in Firestore
      const tasksCollection = collection(db, "tasks");

      // Add the new task to Firestore
      await addDoc(tasksCollection, {
        task: data.task, // The task description entered by the user
        createdAt: Timestamp.now(), // Automatically set the timestamp to the current date and time FIREBASE 
        dueDate: data.dueDate ? Timestamp.fromDate(new Date(data.dueDate)) : null, // Convert the selected due date to a Firestore Timestamp, or set to null if not provided
        priority: data.priority || "Normal", // Use the selected priority or default to "Normal" if none is selected
      });

      // Set success message
      setMessage("Task added successfully!");
    } catch (error) {
        // Set error message
      console.error("Error adding task to Firestore:", error);
      setMessage("Failed to add task. Please try again."); 
    }
  };

  return (
    <>
      <div className="container-lg mt-3">
        {/* Form to add a new task */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-center mb-2">Add Task</h3>
          {/* Task Input */}
          <div className="mb-3">
            <label htmlFor="task" className="form-label">
              Task:
            </label>
            <input
              id="task"
              type="text"
              className={`form-control ${errors.task ? "is-invalid" : ""}`}
              placeholder="Enter task" 
              {...register("task", { required: "Task is required" })} // Register the "task" field with validation
            />
            {errors.task && (
              <div className="invalid-feedback">{errors.task.message}</div> // Display validation error for the "task" field
            )}
          </div>

          {/* Due Date Input */}
          <div className="mb-3">
            <label htmlFor="dueDate" className="form-label">
              Due Date (Optional):
            </label>
            <input
              id="dueDate"
              type="date"
              className={`form-control ${errors.dueDate ? "is-invalid" : ""}`}
              {...register("dueDate")}
            />
          </div>

          {/* Priority Level Input as Radio Buttons */}
          <div className="mb-3">
            <label className="form-label">Priority Level:</label>
            <div>
              {/* Low Priority */}
              <div className="form-check">
                <input
                  id="priorityLow"
                  type="radio"
                  value="Low"
                  className="form-check-input"
                  {...register("priority")} 
                />
                <label htmlFor="priorityLow" className="form-check-label">
                  Low
                </label>
              </div>

              {/* Normal Priority (Default) */}
              <div className="form-check">
                <input
                  id="priorityNormal"
                  type="radio"
                  value="Normal"
                  className="form-check-input"
                  defaultChecked 
                  {...register("priority")}
                />
                <label htmlFor="priorityNormal" className="form-check-label">
                  Normal
                </label>
              </div>

              {/* High Priority */}
              <div className="form-check">
                <input
                  id="priorityHigh"
                  type="radio"
                  value="High"
                  className="form-check-input"
                  {...register("priority")}
                />
                <label htmlFor="priorityHigh" className="form-check-label">
                  High
                </label>
              </div>

              {/* Critical Priority */}
              <div className="form-check">
                <input
                  id="priorityCritical"
                  type="radio"
                  value="Critical"
                  className="form-check-input"
                  {...register("priority")}
                />
                <label htmlFor="priorityCritical" className="form-check-label">
                  Critical
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            Save and Close
          </button>
        </form>

        {/* Success or Error Message */}
        {message && (
          <div
            className={`mt-3 alert ${
              message.includes("successfully")
                ? "alert-success" // Success alert styling
                : "alert-danger" // Error alert styling
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </>
  );
};

export default TaskForm;