import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { useEffect, useState } from "react";
import moment from "moment";

export const EditModal = ({ show, handleClose, itemToEdit, editItem }) => {
  const [title, setTitle] = useState(itemToEdit.title);
  const [status, setStatus] = useState(itemToEdit.status);
  const [titleError, setTiteError] = useState(false);

  const handleTitleChange = ({ target }) => {
    setTitle(target.value);
  };

  const handleStatusChange = ({ target }) => {
    if (target.checked) {
      setStatus("COMPLETE");
    } else {
      setStatus("INCOMPLETE");
    }
  };

  const handleConfirm = () => {
    if (!title) {
      setTiteError(true);
    } else {
      const newItem = {
        ...itemToEdit,
        title,
        status,
        updatedAt: moment().format("DD/MM/YYYY HH:mm"),
      };

      editItem(newItem);
    }
  };

  useEffect(() => {
    setTitle(itemToEdit.title);
    setStatus(itemToEdit.status);
  }, [itemToEdit]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack gap={3}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={handleTitleChange}
            />
            {titleError && (
              <Form.Text className="text-danger">
                Please enter a valid title.
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              checked={status === "COMPLETE"}
              type="switch"
              label="Is this task complete?"
              onChange={handleStatusChange}
            />
          </Form.Group>
        </Stack>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
