import { useState } from "react";
import ModalLayout from "../ModalLayout";
import ManageTasks from "../user-tasks/ManageTasks";

const ManageTasksModal = () => {
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
                Manage Current/Complete Tasks
            </button>

            {/* Reusable Modal Wrapper */}
            <ModalLayout open={isModalOpen} onClose={handleModalClose}>
                <ManageTasks />
            </ModalLayout>
        </>
    )
}

export default ManageTasksModal