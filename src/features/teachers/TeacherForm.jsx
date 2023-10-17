import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addTeacherAsync, updateTeacherAsync } from "./teachersSlice";

const TeacherForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { state } = useLocation();
  const teacher = state ? state : null;

  const [teacherInput, setTeacherInput] = useState({
    name: teacher ? teacher.name : "",
    subject: teacher ? teacher.subject : "",
    contact: teacher ? teacher.contact : 0
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (teacher) {
      dispatch(
        updateTeacherAsync({ id: teacher._id, updatedTeacher: teacherInput })
      );
      navigate(`/teachers/${teacher._id}`);
    } else {
      dispatch(addTeacherAsync(teacherInput));
      navigate("/teachers");
    }
  };

  return (
    <div className="page">
      <h2>{teacher ? "Edit" : "Add"} Teacher</h2>
      <form onSubmit={handleSubmit} className="page">
        <div>
          <label>
            <strong>Name: </strong>
          </label>
          <input
            placeholder="Enter Name"
            type="text"
            value={teacherInput.name}
            onChange={(e) =>
              setTeacherInput({ ...teacherInput, name: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>
            <strong>Subject: </strong>
          </label>
          <input
            placeholder="Enter Subject"
            type="text"
            value={teacherInput.subject}
            onChange={(e) =>
              setTeacherInput({ ...teacherInput, subject: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>
            <strong>Contact: </strong>
          </label>
          <input
            placeholder="Enter Contact"
            name="contact"
            type="number"
            min={0}
            value={teacherInput.contact}
            onChange={(e) =>
              setTeacherInput({ ...teacherInput, contact: e.target.value })
            }
            required
          />
        </div>
        <button type="submit">{teacher ? "Update" : "Add"} Teacher</button>
      </form>
    </div>
  );
};

export default TeacherForm;
