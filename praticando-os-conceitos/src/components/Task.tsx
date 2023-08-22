import { HiOutlineTrash } from 'react-icons/hi';
import styles from './Task.module.css';
import { ITasks } from './TaskDashboard';
import { Dispatch, SetStateAction } from 'react';

interface TaskProps {
  tasks: ITasks[];
  onChangeStatus: Dispatch<SetStateAction<ITasks[]>>;
}

export function Task({ tasks, onChangeStatus }: TaskProps) {
  function handleCheckTask(position: number) {
    const updatedCheckedState = tasks.map((task, index) => {
      if (index === position) {
        return { ...task, isCompleted: !task.isCompleted };
      } else {
        return task;
      }
    });

    onChangeStatus(updatedCheckedState);
  }

  function handleDeleteTask(position: number) {
    const updatedTasksList = tasks.filter((_, index) => {
      return index !== position;
    });

    onChangeStatus(updatedTasksList);
  }

  return (
    <>
      {tasks.map((task, index) => (
        <div className={styles.task} key={task.taskContent}>
          <label className={styles.taskLabel}>
            <input
              type="checkbox"
              onChange={() => {
                handleCheckTask(index);
              }}
              checked={task.isCompleted}
            />
            <p>{task.taskContent}</p>
            <span className={styles.checkmark}></span>
          </label>

          <HiOutlineTrash size={18} onClick={() => handleDeleteTask(index)} />
        </div>
      ))}
    </>
  );
}
