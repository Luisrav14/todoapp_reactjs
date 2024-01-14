import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, Input, Button } from "@nextui-org/react";

const CustomModal = ({ isOpen, onClose, title, children }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} placement="top-center">
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
