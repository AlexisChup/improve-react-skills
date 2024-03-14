import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPageNotFound from "../features/errors/ErrorPageNotFound";
import Header from "../features/header/Header";
import Home from "../features/home/Home";
import TaskManager from "../features/tasks/TaskManager";

export default function IndexRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="tasks-manager" element={<TaskManager />} />
        <Route path="*" element={<ErrorPageNotFound />} />
      </Route>
    </Routes>
  );
}
