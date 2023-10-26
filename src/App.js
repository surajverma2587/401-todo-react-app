import { useEffect, useState } from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
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
  const [selectedItem, setSelectedItem] = useState();

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
      id: uuidv4(),
      title,
      status: "INCOMPLETE",
      createdAt: moment().format("DD/MM/YYYY HH:mm"),
      updatedAt: moment().format("DD/MM/YYYY HH:mm"),
    };

    const itemsFromLS = getFromLocalStorage("todoItems", []);

    const newItems = [...itemsFromLS, item];

    localStorage.setItem("todoItems", JSON.stringify(newItems));

    setTodoItems(newItems);
  };

  const removeItem = () => {
    const itemsFromLS = getFromLocalStorage("todoItems", []);

    const newItems = itemsFromLS.filter((itemFromLS) => {
      return itemFromLS.id !== selectedItem.id;
    });

    localStorage.setItem("todoItems", JSON.stringify(newItems));

    setTodoItems(newItems);

    setSelectedItem();

    handleCloseConfirmationModal();
  };

  const editItem = (newItem) => {
    const itemsFromLS = getFromLocalStorage("todoItems", []);

    const newItems = itemsFromLS.map((itemFromLS) => {
      if (itemFromLS.id === newItem.id) {
        return newItem;
      }

      return itemFromLS;
    });

    localStorage.setItem("todoItems", JSON.stringify(newItems));

    setTodoItems(newItems);

    setSelectedItem();

    handleCloseEditModal();
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
            setSelectedItem={setSelectedItem}
          />
        )}
        {selectedItem && (
          <EditModal
            show={showEditModal}
            handleClose={handleCloseEditModal}
            itemToEdit={selectedItem}
            editItem={editItem}
          />
        )}
        <ConfirmationModal
          show={showConfirmationModal}
          handleClose={handleCloseConfirmationModal}
          removeItem={removeItem}
        />
      </Stack>
    </Container>
  );
};
