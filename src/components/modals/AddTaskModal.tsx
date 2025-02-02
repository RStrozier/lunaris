import { useState } from 'react';
import ModalLayout from '../ModalLayout'
import TaskForm from '../user-tasks/TaskForm'

const AddTaskModal = () => {
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
                Add Task for Today
            </button>

            {/* Reusable Modal Wrapper */}
            <ModalLayout open={isModalOpen} onClose={handleModalClose}>
                <TaskForm />
            </ModalLayout>

        </>
    )
}

export default AddTaskModal