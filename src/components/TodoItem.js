import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

export const TodoItem = ({
  todoItem,
  handleOpenEditModal,
  handleOpenConfirmationModal,
  setSelectedItem,
}) => {
  return (
    <ListGroup.Item as="li">
      <Card>
        <Card.Body>
          <Card.Title>{todoItem.title}</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <Stack direction="horizontal" className="justify-content-between">
                <div>Status</div>
                <div>{todoItem.status}</div>
              </Stack>
            </ListGroup.Item>
            <ListGroup.Item>
              <Stack direction="horizontal" className="justify-content-between">
                <div>Created at</div>
                <div>{todoItem.createdAt}</div>
              </Stack>
            </ListGroup.Item>
            <ListGroup.Item>
              <Stack direction="horizontal" className="justify-content-between">
                <div>Updated at</div>
                <div>{todoItem.updatedAt}</div>
              </Stack>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer>
          <Stack direction="horizontal" className="justify-content-evenly">
            <Button variant="warning" onClick={handleOpenEditModal}>
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                setSelectedItem(todoItem.id);
                handleOpenConfirmationModal();
              }}
            >
              Delete
            </Button>
          </Stack>
        </Card.Footer>
      </Card>
    </ListGroup.Item>
  );
};
