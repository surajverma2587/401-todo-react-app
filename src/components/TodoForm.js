import { useState } from "react";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

export const TodoForm = ({ addItemToLS }) => {
  const [title, setTitle] = useState("");
  const [titleError, setTiteError] = useState(false);

  const handleChange = ({ target }) => {
    setTitle(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title) {
      setTiteError(true);
    } else {
      setTiteError(false);
      addItemToLS(title);
      setTitle("");
    }
  };

  return (
    <Form className="card p-3" onSubmit={handleSubmit}>
      <Stack gap={3}>
        <Form.Group>
          <Form.Control
            type="text"
            value={title}
            placeholder="Enter title"
            onChange={handleChange}
          />
          {titleError && (
            <Form.Text className="text-danger">
              Please enter a valid title.
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="text-center">
          <Button variant="success" type="submit">
            Confirm
          </Button>
        </Form.Group>
      </Stack>
    </Form>
  );
};
