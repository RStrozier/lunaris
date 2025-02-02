import { useState, useEffect } from "react";
import { db } from "../../auth/firebaseConfig"; 
import { collection, getDocs } from "firebase/firestore"; // Firestore methods

// Define the structure of a task
interface Task {
    task: string;
    createdAt?: string;
    dueDate?: string;
    priority?: string;
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
  
          // Get task names and process the createdAt field
          const taskData = taskSnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
              task: data.task,
              createdAt: data.createdAt?.toDate().toLocaleString(), // Convert Firestore Timestamp to a readable date
            };
          });
  
          // Save the task names in the state
          setTasks(taskData);
        } catch (error) {
          console.error("Error fetching tasks:", error);
        }
      };
  
      fetchTasks(); // Call the fetch function
    }, []); // Empty dependency array ensures this runs only once
  
    return (
      <div className="container-lg">
        <ul style={{ listStyleType: 'none' }}>
          {/* Map through the tasks and display each task name */}
          {tasks.map((task, index) => (
            <li key={index}>
              <h3>{task.task}</h3>
              <p><strong>Date Created:</strong> {task.createdAt || "No creation date"}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TaskDisplay;