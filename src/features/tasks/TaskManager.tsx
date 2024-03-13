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
    <div className="container my-3">
      <div className="row px-2 py-2 bg-light rounded border border-primary">
        <div className="col">
          <div className="row">
            <h2>Create task</h2>
          </div>
          <div className="row">
            <TaskForm
              submit={addNewTask}
              task={initialEditingTask}
              isEditing={false}
            />
          </div>
        </div>
        <div className="col">
          <div className="row">
            <h2>Actions</h2>
          </div>
          <div className="row">
            <div>
              <Button
                size="sm"
                variant="danger"
                onClick={(e) => dispatch(reset())}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
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
