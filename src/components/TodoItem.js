import ListGroup from "react-bootstrap/ListGroup";

export const TodoItem = ({ todoItem }) => {
  return <ListGroup.Item as="li">{todoItem.title}</ListGroup.Item>;
};
