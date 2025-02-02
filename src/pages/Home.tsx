import AddTaskModal from "../components/modals/AddTaskModal";
import DisplayTaskModal from "../components/modals/DisplayTaskModal";

const Home = () => {


    return (
        <div className="container">
            <div className="container-lg mt-2">
                <AddTaskModal />
                <DisplayTaskModal />
            </div>
        </div>
    );
};

export default Home;