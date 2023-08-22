import { useState } from 'react';
import { TaskForm } from './TaskForm';
import { Tasks } from './Tasks';

export interface ITasks {
  taskContent: string;
  isCompleted: boolean;
}

export function TaskDashboard() {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  return (
    <>
      <TaskForm onCreateNewTask={setTasks} />
      <Tasks tasks={tasks} onChangeStatus={setTasks} />
    </>
  );
}
