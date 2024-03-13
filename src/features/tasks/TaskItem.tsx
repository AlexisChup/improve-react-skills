import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useAppDispatch } from "../../app/hooks";
import { removeById, prepareEditById } from "./tasksSlice";
export interface ITaskItem {
  title: string;
  text: string;
  id: string;
  remove?: (id: string) => void;
}

export default function TaskItem(props: ITaskItem) {
  const dispatch = useAppDispatch();

  return (
    <Card className="my-1">
      <Card.Title className="mt-2">{props.title}</Card.Title>
      <Card.Body>{props.text}</Card.Body>
      <Card.Footer>
        <Button
          variant="danger"
          size="sm"
          onClick={(e) => dispatch(removeById(props.id))}
        >
          Remove
        </Button>
        <Button
          variant="warning"
          size="sm"
          className="mx-2"
          onClick={(e) => dispatch(prepareEditById(props))}
        >
          Edit
        </Button>
      </Card.Footer>
    </Card>
  );
}
