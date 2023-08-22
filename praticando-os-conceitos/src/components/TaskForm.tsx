import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from 'react';
import styles from './TaskForm.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { ITasks } from './TaskDashboard';

interface TaskFormProps {
  onCreateNewTask: Dispatch<SetStateAction<ITasks[]>>;
}

export function TaskForm({ onCreateNewTask }: TaskFormProps) {
  const [newTask, setNewTask] = useState('');

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    onCreateNewTask((state) => {
      return [...state, { taskContent: newTask, isCompleted: false }];
    });

    setNewTask('');
  }

  return (
    <form className={styles.form} onSubmit={handleCreateNewTask}>
      <input
        onChange={handleNewTaskChange}
        value={newTask}
        type="text"
        placeholder="Adicione uma nova tarefa"
        required
      />
      <button type="submit">
        Criar
        <AiOutlinePlusCircle size={18} />
      </button>
    </form>
  );
}
