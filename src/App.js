import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { Banner } from "./components/Banner";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { EditModal } from "./components/EditModal";
import { ConfirmationModal } from "./components/ConfirmationModal";
import { getFromLocalStorage } from "./utils/getFromLocalStorage";

export const App = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [todoItems, setTodoItems] = useState();

  useEffect(() => {
    if (!todoItems) {
      const itemsFromLS = getFromLocalStorage("todoItems", []);

      setTodoItems(itemsFromLS);
    }
  }, []);

  const handleOpenEditModal = () => {
    setShowEditModal(true);
  };

  const handleOpenConfirmationModal = () => {
    setShowConfirmationModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleCloseConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  const addItemToLS = (title) => {
    const item = {
      id: "",
      title,
      status: "INCOMPLETE",
      createdAt: "",
      updatedAt: "",
    };

    const itemsFromLS = getFromLocalStorage("todoItems", []);

    const newItems = [...itemsFromLS, item];

    localStorage.setItem("todoItems", JSON.stringify(newItems));

    setTodoItems(newItems);
  };

  return (
    <Container>
      <Stack gap={3}>
        <Banner />
        <TodoForm addItemToLS={addItemToLS} />
        {todoItems && (
          <TodoList
            todoItems={todoItems}
            handleOpenEditModal={handleOpenEditModal}
            handleOpenConfirmationModal={handleOpenConfirmationModal}
          />
        )}
        <EditModal
          show={showEditModal}
          handleClose={handleCloseEditModal}
          itemToEdit={{ title: "Foo Bar", status: "INCOMPLETE" }}
        />
        <ConfirmationModal
          show={showConfirmationModal}
          handleClose={handleCloseConfirmationModal}
        />
      </Stack>
    </Container>
  );
};
