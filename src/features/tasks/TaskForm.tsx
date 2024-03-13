import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import { ITaskItem } from "./TaskItem";

const generateId = (): string => Math.random().toString(36).substring(2, 10);

export interface ITaskForm {
  submit: (task: ITaskItem) => void;
  task: ITaskItem;
  isEditing: boolean;
}

export default function TaskForm(props: ITaskForm) {
  const [form, setForm] = useState(props.task);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const payload: ITaskItem = props.isEditing
      ? { ...form }
      : { ...form, id: generateId(), dateCreated: new Date() };

    props.submit(payload);
    // setForm(props.task);
  };

  return (
    <div className="containerTaskForm">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Text</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Text"
            rows={3}
            value={form.text}
            onChange={(e) => setForm({ ...form, text: e.target.value })}
          />
        </Form.Group>
        <Button className="mt-2" type="submit">
          {props.isEditing ? `Edit` : `Create Task`}
        </Button>
      </Form>
    </div>
  );
}
