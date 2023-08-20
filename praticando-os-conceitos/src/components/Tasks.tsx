import styles from './Tasks.module.css';
import ClipboardIcon from '../assets/clipboard.svg';
import { Task } from './Task';
import { useState } from 'react';
import { TaskCount } from './TaskCount';

export function Tasks() {
  const [hasTasks, setHasTasks] = useState(false);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <TaskCount count={0} variant="created">
          Tarefas Criadas
        </TaskCount>
        <TaskCount count={0} variant="completed">
          Concluídas
        </TaskCount>
      </header>

      <section className={styles.tasksBox}>
        {hasTasks ? (
          <Task />
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
