import React, { useState } from "react";
import courses from "../data/courses.json";
import styles from "../styles/courseList.module.css";
function CourseList() {
  const [filter, setFilter] = useState("");

  const courseFilter = courses.filter((course) =>
    course.instructor.toLocaleLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={styles.courseListBox}>
      <h2>Course List</h2>
      <input
        type="text"
        placeholder="Courses by instructor"
        value={filter}
        // when value inside input is changed, this onChange event gets triggered
        //(e) contains the info about the event
        //e.target.value refers to the element that triggered the event,
        //in this case it would be value which is the part of input filed
        onChange={(e) => setFilter(e.target.value)}
      ></input>
      <ul>
        {courseFilter.map((course) => (
          <li key={course.id}>
            <p>Name: {course.name}</p>
            <p>Instructor Name: {course.instructor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
