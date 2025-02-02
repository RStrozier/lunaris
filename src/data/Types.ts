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

  export interface Task {
    task: string;
    createdAt?: string;
    dueDate?: string;
    priority?: string;
  }