import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TeacherList = ({ teachers }) => {
  const navigate = useNavigate();
  return (
    <div className="page">
      <h2>Teachers View</h2>
      <button onClick={() => navigate("/teachers/add")}>Add Teacher</button>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Contact</th>
          </tr>
          {teachers?.map(({ _id, name, subject, contact }) => (
            <tr key={_id} className="nav-items">
              <td>
                <Link className="nav-items" to={`/teachers/${_id}`}>
                  {name}
                </Link>
              </td>
              <td>
                <Link className="nav-items" to={`/teachers/${_id}`}>
                  {subject}
                </Link>
              </td>
              <td>
                <Link className="nav-items" to={`/teachers/${_id}`}>
                  {contact}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherList;
