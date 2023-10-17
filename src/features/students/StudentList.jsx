import React from "react";
import { Link, useNavigate } from "react-router-dom";

const StudentList = ({ students, classViewPage }) => {
  const navigate = useNavigate();

  return (
    <div className="page">
      {!classViewPage && <h2>Students View</h2>}
      {!classViewPage && (
        <button onClick={() => navigate("/students/add")}>Add Student</button>
      )}
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Gender</th>
            <th>Attendance</th>
            <th>Marks</th>
            <th>Class</th>
          </tr>
          {students?.map(
            ({
              _id,
              name,
              age,
              grade,
              gender,
              attendance,
              marks,
              class: standard
            }) => (
              <tr key={_id} className="nav-items">
                <td>
                  <Link className="nav-items" to={`/students/${_id}`}>
                    {name ?? "-"}
                  </Link>
                </td>
                <td>
                  <Link className="nav-items" to={`/students/${_id}`}>
                    {age ?? "-"}
                  </Link>
                </td>
                <td>
                  <Link className="nav-items" to={`/students/${_id}`}>
                    {grade ?? "-"}
                  </Link>
                </td>
                <td>
                  <Link className="nav-items" to={`/students/${_id}`}>
                    {gender ?? "-"}
                  </Link>
                </td>
                <td>
                  <Link className="nav-items" to={`/students/${_id}`}>
                    {attendance ?? "-"}
                  </Link>
                </td>
                <td>
                  <Link className="nav-items" to={`/students/${_id}`}>
                    {marks ?? "-"}
                  </Link>
                </td>
                <td>
                  <Link className="nav-items" to={`/students/${_id}`}>
                    {standard ?? "-"}
                  </Link>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
