import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { useEffect } from "react";
import useTaskStore from "../../store/taskStore";

const CustomModal = ({ isOpen, onClose, title, children }) => {
  const { isLoading } = useTaskStore();

  useEffect(() => {
    onClose();
  }, [isLoading]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} placement="top" size="xl">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
        <ModalBody>
          <div className="pb-5">{children}</div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
