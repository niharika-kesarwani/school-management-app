import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addStudentAsync, updateStudentAsync } from "./studentsSlice";

const StudentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { state } = useLocation();
  const student = state ? state : null;

  const allGrades = [
    "A+",
    "A",
    "B+",
    "B",
    "C+",
    "C",
    "D+",
    "D",
    "E+",
    "E",
    "F"
  ];
  const allGenders = ["Male", "Female", "Transgender"];
  const allClasses = [
    "Std I",
    "Std II",
    "Std III",
    "Std IV",
    "Std V",
    "Std VI",
    "Std VII",
    "Std VIII",
    "Std IX",
    "Std X",
    "Std XI",
    "Std XII"
  ];

  const [studentInput, setStudentInput] = useState({
    name: student ? student.name : "",
    age: student ? student.age : 0,
    grade: student ? student.grade : allGrades[allGrades.length - 1],
    gender: student ? student.gender : allGenders[0],
    attendance: student ? student.attendance : 0,
    marks: student ? student.marks : 0,
    class: student ? student.class : allClasses[0]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student) {
      dispatch(
        updateStudentAsync({ id: student._id, updatedStudent: studentInput })
      );
      navigate(`/students/${student._id}`);
    } else {
      dispatch(addStudentAsync(studentInput));
      navigate("/");
    }
  };

  return (
    <div className="page">
      <h2>{student ? "Edit" : "Add"} Student</h2>
      <form onSubmit={handleSubmit} className="page">
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Name: </strong>
              </td>
              <td>
                <input
                  placeholder="Enter Name"
                  type="text"
                  value={studentInput.name}
                  onChange={(e) =>
                    setStudentInput({ ...studentInput, name: e.target.value })
                  }
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <strong>Age: </strong>
              </td>
              <td>
                <input
                  placeholder="Age"
                  type="number"
                  min={0}
                  value={studentInput.age}
                  onChange={(e) =>
                    setStudentInput({ ...studentInput, age: e.target.value })
                  }
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <strong>Grade: </strong>
              </td>
              <td>
                <select
                  onChange={(e) =>
                    setStudentInput({ ...studentInput, grade: e.target.value })
                  }
                  value={studentInput.grade}
                >
                  {allGrades.map((grade) => (
                    <option value={grade} key={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Gender:</strong>
              </td>
              <td>
                {allGenders.map((gender) => (
                  <span key={gender}>
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      checked={
                        studentInput.gender &&
                        studentInput.gender.toLowerCase() ===
                          gender.toLowerCase()
                      }
                      onChange={() =>
                        setStudentInput({ ...studentInput, gender })
                      }
                    />
                    {gender}
                  </span>
                ))}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Attendance: </strong>
              </td>
              <td>
                <input
                  placeholder="Attendance"
                  name="attendance"
                  type="number"
                  min={0}
                  value={studentInput.attendance}
                  onChange={(e) =>
                    setStudentInput({
                      ...studentInput,
                      attendance: e.target.value
                    })
                  }
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <strong>Marks: </strong>
              </td>
              <td>
                <input
                  placeholder="Marks"
                  name="marks"
                  type="number"
                  max={100}
                  value={studentInput.marks}
                  onChange={(e) =>
                    setStudentInput({ ...studentInput, marks: e.target.value })
                  }
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <strong>Class: </strong>
              </td>
              <td>
                <select
                  onChange={(e) =>
                    setStudentInput({ ...studentInput, class: e.target.value })
                  }
                  value={studentInput.class}
                >
                  {allClasses.map((className) => (
                    <option value={className} key={className}>
                      {className}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">{student ? "Update" : "Add"} Student</button>
      </form>
    </div>
  );
};

export default StudentForm;
