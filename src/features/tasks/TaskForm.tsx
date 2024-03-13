import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import { ITaskItem } from "./TaskItem";

const initialTaskForm: ITaskItem = {
  title: "",
  text: "",
};

export interface ITaskForm {
  submit: (task: ITaskItem) => void;
}

export default function TaskForm(props: ITaskForm) {
  const [form, setForm] = useState(initialTaskForm);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    props.submit(form);
    // setForm(initialTaskForm);
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
          Create Task
        </Button>
      </Form>
    </div>
  );
}
