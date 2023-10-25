import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export const ConfirmationModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are are sure you want to remove the item?</Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleClose}>
          No
        </Button>
        <Button variant="danger">Yes</Button>
      </Modal.Footer>
    </Modal>
  );
};
