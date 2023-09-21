import styles from "./app.module.css";
import CourseList from "./components/CourseList";
import StudentList from "./components/studentList";

function App() {
  return (
    <div className={styles.box}>
      <StudentList />
      <CourseList />
    </div>
  );
}

export default App;
