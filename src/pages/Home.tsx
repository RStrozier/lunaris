import AddTaskModal from "../components/modals/AddTaskModal";
import DisplayTaskModal from "../components/modals/DisplayTaskModal";
import TaskDueModal from "../components/modals/TaskDueModal";

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

            </div>
        </div>
    );
};

export default Home;