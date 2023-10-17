import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchTeachers } from "../features/teachers/teachersSlice";
import TeacherList from "../features/teachers/TeacherList";

const TeacherView = () => {
  const { teachers, status, error } = useSelector(({ teachers }) => teachers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTeachers());
    }
  }, [status, dispatch]);

  return (
    <div className="page">
      {status === "loading" && <p>Loading...</p>}
      {status === "error" && <p>{error}</p>}
      <TeacherList teachers={teachers} />
    </div>
  );
};

export default TeacherView;
