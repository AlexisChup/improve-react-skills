import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useAppDispatch } from "../../app/hooks";
import { removeById, prepareEditById, toggleCompletion } from "./tasksSlice";
export interface ITaskItem {
  title: string;
  text: string;
  id: string;
  dateCreated: number;
  isCompleted: boolean;
}

export default function TaskItem(props: ITaskItem) {
  const dispatch = useAppDispatch();

  return (
    <Card
      className="my-1 px-0"
      style={{ backgroundColor: props.isCompleted ? "#DDD" : "#FFF" }}
    >
      <div className="px-3">
        <Card.Title className="mt-2">{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {`Created the ${new Date(props.dateCreated).getUTCDay()}-${new Date(
            props.dateCreated
          ).getUTCMonth()}-${new Date(props.dateCreated).getUTCFullYear()}`}
        </Card.Subtitle>
        <Card.Body>{props.text}</Card.Body>
      </div>
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
        <Button
          variant={props.isCompleted ? "warning" : "success"}
          size="sm"
          className=""
          onClick={(e) => dispatch(toggleCompletion(props.id))}
        >
          {props.isCompleted ? "Incomplete" : "Complete"}
        </Button>
      </Card.Footer>
    </Card>
  );
}
