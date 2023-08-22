import styles from './Tasks.module.css';
import ClipboardIcon from '../assets/clipboard.svg';
import { Task } from './Task';
import { TaskCount } from './TaskCount';
import { ITasks } from './TaskDashboard';
import { Dispatch, SetStateAction } from 'react';

interface TasksProps {
  tasks: ITasks[];
  onChangeStatus: Dispatch<SetStateAction<ITasks[]>>;
}

export function Tasks({ tasks, onChangeStatus }: TasksProps) {
  const hasTasks = tasks.length > 0;

  const completedTasks = tasks.reduce((acc, task) => {
    if (task.isCompleted) {
      acc++;
    }

    return acc;
  }, 0);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <TaskCount count={tasks.length} variant="created">
          Tarefas Criadas
        </TaskCount>
        <TaskCount count={completedTasks} variant="completed">
          Concluídas
        </TaskCount>
      </header>

      <section className={hasTasks ? styles.tasksBox : styles.tasksBoxEmpty}>
        {hasTasks ? (
          <Task tasks={tasks} onChangeStatus={onChangeStatus} />
        ) : (
          <div className={styles.empty}>
            <img src={ClipboardIcon} alt="Clipboard Icon" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </section>
    </div>
  );
}
