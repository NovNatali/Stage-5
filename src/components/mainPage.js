import React, { useState } from "react";
import { FormAdd } from "./form-add";
import { useRequestGet } from "../hooks/useRequestGet";
import { Link, useNavigate } from "react-router-dom";
import { strReplaceToDots } from "../hooks/strReplaceToDots";

export function MainPage() {
  const [isRefreshTask, setIsRefreshTask] = useState(false);
@@ -12,6 +14,8 @@ export function MainPage() {
    setIsRefreshTask(!isRefreshTask);
  };

  const navigate = useNavigate();

  return (
    <div>
      <FormAdd refreshTask={refreshTask} />
@@ -39,16 +43,24 @@ export function MainPage() {
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .filter((task) => task.name.includes(taskFilter))
          .map(({ id, name }) => (
            <div className="todoitem" key={id}>
              {id} - {name}
            <div
              className="todoitem"
              key={id}
              onClick={() => navigate(`formTask/${id}/${name}`)}
            >
              {id} - {strReplaceToDots(name)}
            </div>
          ))
      ) : (
        tasks
          .filter((task) => task.name.includes(taskFilter))
          .map(({ id, name }) => (
            <div className="todoitem" key={id}>
              {id} - {name}
            <div
              className="todoitem"
              key={id}
              onClick={() => navigate(`formTask/${id}/${name}`)}
            >
              {id} - {strReplaceToDots(name)}
            </div>
          ))
      )}