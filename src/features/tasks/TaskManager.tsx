import React from "react";
import { addTask, reset, editById, initialEditingTask } from "./tasksSlice";
import { ITaskItem } from "./TaskItem";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { Button, Modal } from "react-bootstrap";

export default function TaskManager() {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const isModalEditShow = useAppSelector((state) => state.tasks.isEditingTask);
  const editTask = useAppSelector((state) => state.tasks.editingTask);
  const dispatch = useAppDispatch();

  const handleEditTask = (task: ITaskItem) => {
    dispatch(editById(task));
  };

  const addNewTask = (task: ITaskItem) => {
    dispatch(addTask(task));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2 d-flex justify-content-center">
          <div>
            <Button onClick={(e) => dispatch(reset())}>Reset</Button>
          </div>
        </div>
        <div className="col">
          <TaskForm
            submit={addNewTask}
            task={initialEditingTask}
            isEditing={false}
          />
        </div>
        <div className="col">
          <TaskList tasks={tasks} />
        </div>
      </div>

      <Modal show={isModalEditShow}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TaskForm submit={handleEditTask} task={editTask} isEditing />
        </Modal.Body>
      </Modal>
    </div>
  );
}
