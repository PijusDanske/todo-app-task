import React from "react";
import { Tasks } from "./Tasks";

export function Home() {
  const tasks = [
    { title: "Wash dishes", active: false },
    { title: "Read book", active: false },
    { title: "Get some sleep", active: true },
  ];
  return <Tasks tasks={tasks} />;
}
