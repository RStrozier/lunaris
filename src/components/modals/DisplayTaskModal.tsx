import { useState } from "react";
import TaskDisplay from "../user-tasks/TaskDisplay";
import ModalLayout from "../ModalLayout";

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
        Show All Tasks
      </button>
      <ModalLayout open={isModalOpen} onClose={handleModalClose}>
        {/* Render TaskDisplay only when modal is open */}
        {isModalOpen && <TaskDisplay />}
      </ModalLayout>
    </>
  );
};

export default DisplayTaskModal;