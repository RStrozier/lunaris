import { useState } from "react";
import ModalLayout from "../ModalLayout";
import TaskDisplay from "../user-tasks/TaskDisplay";

const DisplayTaskModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button className="mt-2 btn btn-primary" onClick={handleModalOpen}>
       View All Tasks
      </button>
      
      <ModalLayout open={isModalOpen} onClose={handleModalClose}>
        {/* Render TaskForm inside the modal */}
        {isModalOpen && <TaskDisplay />}
      </ModalLayout>
    </>
  );
};

export default DisplayTaskModal;