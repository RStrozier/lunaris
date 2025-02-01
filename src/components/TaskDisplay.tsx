import { useState, useEffect } from "react";
import { db } from "../auth/firebaseConfig"; // Import Firestore configuration
import { collection, getDocs } from "firebase/firestore"; // Firestore methods

// Define the structure of a task
interface Task {
  task: string;
}

const TaskDisplay = () => {
  // State to store the list of tasks (explicitly typed as an array of Task objects)
  const [tasks, setTasks] = useState<Task[]>([]);

  // Fetch tasks from Firestore when the component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        // Reference the "tasks" collection in Firestore
        const tasksCollection = collection(db, "tasks");

        // Fetch all documents from the "tasks" collection
        const taskSnapshot = await getDocs(tasksCollection);

        // Extract task names from the documents
        const taskNames = taskSnapshot.docs.map((doc) => ({
          task: doc.data().task, // Extract the "task" field
        }));

        // Save the task names in the state
        setTasks(taskNames);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <h2>Task Names</h2>
      <ul>
        {/* Map through the tasks and display each task name */}
        {tasks.map((task, index) => (
          <li key={index}>{task.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDisplay;