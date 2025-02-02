import { useState } from "react";
import TaskForm from "../components/TaskForm";
import ModalLayout from "../components/ModalLayout";

const Home = () => {
    // use state to open and close modal
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">
      <div className="container-lg">
        {/* opens the modal on click */}
        <button className="mt-2 btn btn-primary" onClick={handleModalOpen}>
          Add Task for Today
        </button>

        {/* Reusable Modal Wrapper */}
        <ModalLayout open={isModalOpen} onClose={handleModalClose}>
          <TaskForm />
        </ModalLayout>
      </div>
    </div>
  );
};

export default Home;