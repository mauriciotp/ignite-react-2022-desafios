import { HiOutlineTrash } from 'react-icons/hi';
import styles from './Task.module.css';

export function Task() {
  return (
    <div className={styles.task}>
      <label className={styles.taskLabel}>
        <input type="checkbox" />
        <p>Lavar a louça</p>
        <span className={styles.checkmark}></span>
      </label>

      <HiOutlineTrash size={18} />
    </div>
  );
}
