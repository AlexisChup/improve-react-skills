import React from "react";

import TaskItem, { ITaskItem } from "./TaskItem";

export interface ITaskList {
  tasks: ITaskItem[];
}

export default function TaskList(props: ITaskList) {
  return (
    <div className="row">
      {props.tasks.length ? (
        props.tasks.map((task, index) => <TaskItem {...task} key={index} />)
      ) : (
        <div>No task for now on.</div>
      )}
    </div>
  );
}
