import { Modal, ModalOverlay, ModalContent, ModalFooter, Button } from '@chakra-ui/react';

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent padding={4} marginTop={'auto'} marginBottom={'auto'}>
          <h3>Are you Sure you wanted to delete this Account ?</h3>
        <ModalFooter>
          <Button colorScheme="red" onClick={onConfirm}>
            Confirm Delete
          </Button>
          <Button marginLeft={2} onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmationModal;
