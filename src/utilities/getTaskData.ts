import { collection, getDocs } from "firebase/firestore";
import { db } from "../auth/firebaseConfig";
import { Task } from "../data/Types";

export const getTaskData = async (): Promise<Task[]> => {
  try {
    const tasksCollection = collection(db, "tasks");
    const taskSnapshot = await getDocs(tasksCollection);
    const taskList: Task[] = taskSnapshot.docs.map((doc) => {
      const data = doc.data();

      // Convert Firestore Timestamps to local date strings
      const createdAt = data.createdAt?.toDate().toLocaleDateString(); // Local date
      const dueDate = data.dueDate?.toDate().toLocaleDateString(); // Local date

      return {
        task: data.task,
        createdAt, // Formatted as local date
        dueDate,   // Formatted as local date
        priority: data.priority || "low", // Default to "low" if priority is not set
      };
    });
    return taskList;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};