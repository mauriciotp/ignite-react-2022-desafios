import styles from './TaskForm.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export function TaskForm() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar
        <AiOutlinePlusCircle size={18} />
      </button>
    </form>
  );
}
