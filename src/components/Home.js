import React from "react";
import { Tasks } from "./Tasks";

export function Home() {
  const tasks = [
    { title: "Wash dishes", done: false },
    { title: "Read book", done: false },
    { title: "Get some sleep", done: true },
  ];
  return <Tasks tasks={tasks} />;
}
