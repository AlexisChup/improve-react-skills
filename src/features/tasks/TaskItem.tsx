import React from "react";

export interface ITaskItem {
  index?: number;
  title: string;
  text: string;
}

export default function TaskItem(props: ITaskItem) {
  return (
    <div className="taskItemContainer">
      <div className="taskItemTitle">{props.title}</div>
      <div className="taskItemText">{props.text}</div>
    </div>
  );
}
