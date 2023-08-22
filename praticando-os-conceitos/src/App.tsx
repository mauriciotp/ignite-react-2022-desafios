import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css';
import { TaskDashboard } from './components/TaskDashboard';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.wrapper}>
          <TaskDashboard />
        </div>
      </main>
    </>
  );
}

export default App;
