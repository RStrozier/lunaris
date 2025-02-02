import { useState } from "react";
import { useLoading } from "../../context/LoadingContext";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../auth/firebaseConfig";
import useTasks from "../../hooks/useTasks";

const ManageTasks = () => {
    // call in our custom context and hook
    const { loading, setLoading } = useLoading();
    const tasks = useTasks(setLoading);

    // Local state to track which tab is active (incomplete or complete) and set default
    const [activeTab, setActiveTab] = useState("incomplete");

    // Function to toggle a task's completed state
    const toggleTaskCompletion = async (taskId: string, currentStatus: any) => {
        
        try {
            // grab the task id from tasks in the firebase database
            const taskDoc = doc(db, "tasks", taskId); 
            // update the completed field
            await updateDoc(taskDoc, { completed: !currentStatus }); 
        } catch (error) {
            console.error("Error updating task completion status:", error);
        }
    };

    // Filter tasks based on their "completed" status
    // if there is no task vs if there is
    const incompleteTasks = tasks.filter((task) => !task.completed);
    const completedTasks = tasks.filter((task) => task.completed);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-center">Manage Tasks</h2>

            {/* Tab Selector */}
            <div className="container mt-2">
                <div className="d-flex justify-content-center flex-wrap gap-2">
                    <button
                        onClick={() => setActiveTab("incomplete")}
                        className={`btn btn-outline-primary ${activeTab === "incomplete" ? "active" : ""}`}
                    >
                        Still To Do
                    </button>
                    <button
                        onClick={() => setActiveTab("completed")}
                        className={`btn btn-outline-primary ${activeTab === "completed" ? "active" : ""}`}
                    >
                        Completed 
                    </button>
                </div>
            </div>

            {/* Task List */}
            <div>
                {loading ? (
                    <p>Loading tasks...</p>
                ) : activeTab === "incomplete" ? (
                    // Incomplete Tasks Tab
                    
                    <ul className="space-y-4 list-unstyled m-2">
                        {incompleteTasks.map((task) => (
                            <li
                                key={task.id}
                                className="flex justify-between items-center p-4 m-1 bg-gray-100 rounded shadow"
                            >
                                <span>{task.task}</span>
                                <button
                                    onClick={() => toggleTaskCompletion(task.id, task.completed)}
                                    className="text-green-500 hover:text-green-700"
                                    title="Mark as Completed"
                                >
                                    ✅
                                </button>
                            </li>
                        ))}
                        {incompleteTasks.length === 0 && (
                            <p className="text-gray-500">No incomplete tasks!</p>
                        )}
                    </ul>
                ) : (
                    // Completed Tasks Tab
                    <ul className="space-y-4 list-unstyled m-2">
                        {completedTasks.map((task) => (
                            <li
                                key={task.id}
                                className="flex justify-between items-center p-4 m-1 bg-gray-100 rounded shadow"
                            >
                                <span>{task.task}</span>
                                <button
                                    onClick={() => toggleTaskCompletion(task.id, task.completed)}
                                    className="text-red-500 hover:text-red-700"
                                    title="Mark as Incomplete"
                                >
                                    🔄
                                </button>
                            </li>
                        ))}
                        {completedTasks.length === 0 && (
                            <p className="text-gray-500">No completed tasks!</p>
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ManageTasks;