import React from "react";
import { Task } from "../Task/Task";
import { TaskState } from "../../interfaces/TaskState";

const mockData = [
  {
    id: 1,
    name: "Initial Task",
    description: "Set up redux",
    date: "2021-06-12",
    important: true,
  },
  {
    id: 2,
    name: "Initial Task",
    description: "Set up redux",
    date: "2021-06-12",
    important: true,
  },
  {
    id: 3,
    name: "Initial Task",
    description: "Set up redux",
    date: "2021-06-12",
    important: true,
  },
];

export const TaskList = () => {
  return (
    <div>
      {mockData.map((t) => (
        <Task
          id={t.id}
          name={t.name}
          description={t.description}
          date={t.date}
          important={t.important}
        />
      ))}
    </div>
  );
};
