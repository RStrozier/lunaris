import { useState } from 'react';
import ModalLayout from '../ModalLayout'
import TasksDueToday from '../user-tasks/TasksDueToday';

const TaskDueModal = () => {
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
                Tasks Due Today
            </button>

            {/* Reusable Modal Wrapper */}
            <ModalLayout open={isModalOpen} onClose={handleModalClose}>
                <TasksDueToday />
            </ModalLayout>
        </>
    )
}

export default TaskDueModal



