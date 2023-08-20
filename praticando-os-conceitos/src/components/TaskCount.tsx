import { ReactNode } from 'react';
import styles from './TaskCount.module.css';

interface TaskCountProps {
  children: ReactNode;
  count: number;
  variant: 'completed' | 'created';
}

export function TaskCount({ children, count, variant }: TaskCountProps) {
  let colorVariantClassName;

  switch (variant) {
    case 'completed':
      colorVariantClassName = styles.completed;
      break;
    case 'created':
      colorVariantClassName = styles.created;
      break;
    default:
      break;
  }

  return (
    <div className={styles.info}>
      <p className={colorVariantClassName}>{children}</p>
      <span className={styles.count}>{count}</span>
    </div>
  );
}
