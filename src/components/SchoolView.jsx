import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSchoolStats,
  setTopStudent
} from "../features/school/schoolSlice";
import { fetchStudents } from "../features/students/studentsSlice";

const SchoolView = () => {
  const dispatch = useDispatch();
  const {
    school,
    students: { students }
  } = useSelector(({ school, students }) => ({
    school,
    students
  }));

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  useEffect(() => {
    const totalStudents = students.length;
    const totalAttendance = students.reduce(
      (sum, { attendance }) => sum + parseFloat(attendance ?? 0),
      0
    );
    const averageAttendance = totalAttendance / totalStudents;
    const totalMarks = students.reduce(
      (sum, { marks }) => sum + parseFloat(marks ?? 0),
      0
    );
    const averageMarks = totalMarks / totalStudents;
    const topStudent = students.reduce(
      (top, student) => (student.marks > (top.marks ?? 0) ? student : top),
      ""
    );

    dispatch(
      updateSchoolStats({
        totalStudents,
        averageAttendance,
        averageMarks,
        topStudent
      })
    );
    dispatch(setTopStudent(topStudent));
  }, [students, dispatch]);

  return (
    <div>
      <h2>School View</h2>
      <p>
        <strong>Total Students: </strong>
        {school.totalStudents}
      </p>
      <p>
        <strong>Average Attendance: </strong>
        {school.averageAttendance}
      </p>
      <p>
        <strong>Average Marks: </strong>
        {school.averageMarks}
      </p>
      <p>
        <strong>Top Student: </strong>
        {school.topStudent ? school.topStudent.name : "-"}
      </p>
    </div>
  );
};

export default SchoolView;
