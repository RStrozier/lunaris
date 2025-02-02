export interface TaskFormData {
    task: string; 
    dueDate?: string; 
    priority?: string; 
  }

  export interface ModalLayoutProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }