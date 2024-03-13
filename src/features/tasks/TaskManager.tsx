import React from "react";
import {
  addTask,
  reset,
  editById,
  initialEditingTask,
  filterTasks,
  TasksFilters,
} from "./tasksSlice";
import { ITaskItem } from "./TaskItem";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { Button, Modal, Form } from "react-bootstrap";

const filterToText = ["Select a filter", "Title ascending", "Title descending"];

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
      <div className="row  px-2 py-2 bg-light rounded border border-primary">
        <div className="col">
          <div className="row ">
            <h2>Create task</h2>
          </div>
          <div className="row ">
            <TaskForm
              submit={addNewTask}
              task={initialEditingTask}
              isEditing={false}
            />
          </div>
        </div>
        <div className="col">
          <div className="row">
            <h2 className="text-center">Actions</h2>
          </div>
          <div className="row ">
            <div className="col d-flex justify-content-end">
              <Button
                size="sm"
                variant="danger"
                onClick={(e) => dispatch(reset())}
              >
                Reset tasks
              </Button>
            </div>
            <div className="col">
              <Form.Select
                defaultValue={0}
                onChange={(e) =>
                  dispatch(
                    filterTasks(parseInt(e.target.value) as TasksFilters)
                  )
                }
                // onChange={(e) => console.log("Change" + e.target.value)}
              >
                {Object.keys(TasksFilters)
                  .filter((v) => !isNaN(Number(v)))
                  .map((filter, index) => {
                    return (
                      <option
                        value={filter}
                        key={index}
                        disabled={index > 0 ? false : true}
                      >
                        {filterToText[parseInt(filter)]}
                      </option>
                    );
                  })}
              </Form.Select>
            </div>
          </div>
        </div>
      </div>
      <div className="row  mt-3">
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
