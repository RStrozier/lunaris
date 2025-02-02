import AddTaskModal from "../components/modals/AddTaskModal";
import DisplayTaskModal from "../components/modals/DisplayTaskModal";
import ManageTasksModal from "../components/modals/ManageTasksModal";
import TaskDueModal from "../components/modals/TaskDueModal";
import TaskPriorityModal from "../components/modals/TaskPriorityModal";

const Home = () => {


    return (
        <div className="container">
            <div className="container-lg mt-2">
                <div className="add-task-container">
                    <AddTaskModal />
                </div>
                <div className="view-task-container">
                    <DisplayTaskModal />
                </div>
                <div className="due-task-container">
                    <TaskDueModal/>
                </div>
                <div className="priority-task-container">
                   <TaskPriorityModal />
                </div>
                <ManageTasksModal />
            </div>
        </div>
    );
};

export default Home;