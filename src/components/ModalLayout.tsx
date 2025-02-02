import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400, 
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
};

interface ModalLayoutProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalLayout = ({ open, onClose, children }: ModalLayoutProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        {children}
      </Box>
    </Modal>
  );
};

export default ModalLayout;