import { useState } from "react";
import TaskDisplay from "../user-tasks/TaskDisplay";
import ModalLayout from "../ModalLayout";

const DisplayTaskModal = () => {
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
                Show All Tasks
            </button>

            <ModalLayout open={isModalOpen} onClose={handleModalClose}>
                <TaskDisplay />
            </ModalLayout>
        </>
    )
}

export default DisplayTaskModal