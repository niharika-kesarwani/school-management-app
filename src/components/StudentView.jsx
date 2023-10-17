import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStudents } from "../features/students/studentsSlice";
import StudentList from "../features/students/StudentList";

const StudentView = () => {
  const { students, status, error } = useSelector(({ students }) => students);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStudents());
    }
  }, [status, dispatch]);

  return (
    <div className="page">
      {status === "loading" && <p>Loading...</p>}
      {status === "error" && <p>{error}</p>}
      <StudentList students={students} />
    </div>
  );
};

export default StudentView;
