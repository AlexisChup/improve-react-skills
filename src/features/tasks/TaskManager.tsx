import React from "react";
import { addTask, reset } from "./tasksSlice";
import { ITaskItem } from "./TaskItem";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { Button } from "react-bootstrap";

export default function TaskManager() {
  const tasks = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

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
          <TaskForm submit={addNewTask} />
        </div>
        <div className="col">
          <TaskList tasks={tasks} />
        </div>
      </div>
    </div>
  );
}
