import { TodoItem } from "./TodoItem";
import Stack from "react-bootstrap/Stack";
import Alert from "react-bootstrap/Alert";
import ListGroup from "react-bootstrap/ListGroup";

export const TodoList = ({
  todoItems,
  handleOpenEditModal,
  handleOpenConfirmationModal,
}) => {
  if (todoItems.length === 0) {
    return (
      <Alert variant="info" className="text-center">
        You have no todo items!
      </Alert>
    );
  }

  return (
    <Stack>
      <ListGroup as="ul">
        {todoItems.map((todoItem) => {
          return (
            <TodoItem
              todoItem={todoItem}
              handleOpenEditModal={handleOpenEditModal}
              handleOpenConfirmationModal={handleOpenConfirmationModal}
            />
          );
        })}
      </ListGroup>
    </Stack>
  );
};
