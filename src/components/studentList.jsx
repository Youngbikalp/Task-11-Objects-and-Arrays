import React from "react";
import students from "../data/students.json";
import styles from "../styles/studentList.module.css";
function StudentList() {
  return (
    <div className={styles.studentListBox}>
      <h2>List of Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <p>Name: {student.name}</p>
            <br />
            <p>Age: {student.age}</p>
            <br />
            {/* join adds all the element in an array to a string */}
            <p>Courses: {student.courses.join(",")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
