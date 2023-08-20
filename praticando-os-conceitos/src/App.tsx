import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css';
import { TaskForm } from './components/TaskForm';
import { Tasks } from './components/Tasks';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.wrapper}>
          <TaskForm />
          <Tasks />
        </div>
      </main>
    </>
  );
}

export default App;
