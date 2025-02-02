import AddTaskModal from "../components/modals/AddTaskModal";
import DisplayTaskModal from "../components/modals/DisplayTaskModal";

const Home = () => {


    return (
        <div className="container">
            <div className="container-lg">
                <AddTaskModal />
                <DisplayTaskModal />
            </div>
        </div>
    );
};

export default Home;