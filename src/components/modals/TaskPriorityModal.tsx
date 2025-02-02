import { useState } from "react";
import TaskPriority from "../user-tasks/TaskPriority";
import ModalLayout from "../ModalLayout";

const TaskPriorityModal = () => {
    // use state to open and close modal
    const [isModalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };
    return (

        <>
            {/* opens the modal on click */}
            <button className="mt-2 btn btn-primary" onClick={handleModalOpen}>
                Tasks By Priority
            </button>

            {/* Reusable Modal Wrapper */}
            <ModalLayout open={isModalOpen} onClose={handleModalClose}>
                <TaskPriority />
            </ModalLayout>

        </>
    )
}

export default TaskPriorityModal