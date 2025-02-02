import { db } from "../auth/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Task } from "../data/Types";

export const getTaskData = async (): Promise<Task[]> => {
  try {
    const tasksCollection = collection(db, "tasks");
    const taskSnapshot = await getDocs(tasksCollection);
    const taskList: Task[] = taskSnapshot.docs.map((doc) => {
      const data = doc.data();

      // Convert Firestore Timestamps to readable strings (if they exist)
      const createdAt = data.createdAt?.toDate().toLocaleString();
      const dueDate = data.dueDate?.toDate().toLocaleString();

      return {
        task: data.task,
        createdAt, 
        dueDate,   
        priority: data.priority || "No Priority",
      };
    });
    return taskList;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};