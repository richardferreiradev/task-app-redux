import React from "react";
import { TaskState } from "../../interfaces/TaskState";
import styles from "./Task.module.css";

export const Task = (props: TaskState) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>{props.name}</h3>
      <div className={styles.subContainer}>
        <p>{props.description}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );
};
