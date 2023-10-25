import { Banner } from "./components/Banner";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { EditModal } from "./components/EditModal";
import { ConfirmationModal } from "./components/ConfirmationModal";
import { useState } from "react";

export const App = () => {
  const [showEditModal, setShowEditModal] = useState(true);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

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

  return (
    <div>
      <Banner />
      <TodoForm />
      <TodoList />
      <EditModal
        show={showEditModal}
        handleClose={handleCloseEditModal}
        itemToEdit={{ title: "Foo Bar", status: "INCOMPLETE" }}
      />
      <ConfirmationModal
        show={showConfirmationModal}
        handleClose={handleCloseConfirmationModal}
      />
    </div>
  );
};
