import ClassView from "./components/ClassView";
import SchoolView from "./components/SchoolView";
import StudentView from "./components/StudentView";
import TeacherView from "./components/TeacherView";
import "./styles.css";

import { Routes, Route, NavLink } from "react-router-dom";

import StudentDetail from "./features/students/StudentDetail";
import StudentForm from "./features/students/StudentForm";

import TeacherDetail from "./features/teachers/TeacherDetail";
import TeacherForm from "./features/teachers/TeacherForm";

export default function App() {
  const isActiveStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "",
    color: isActive ? "#a855f7" : ""
  });

  return (
    <div className="App">
      <div className="navbar">
        <h1 className="logo">School Management System</h1>
        <nav>
          <ul className="horizontal">
            <li>
              <NavLink to="/" style={isActiveStyle} className="nav-items">
                Students
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/teachers"
                style={isActiveStyle}
                className="nav-items"
              >
                Teachers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/classes"
                style={isActiveStyle}
                className="nav-items"
              >
                Classes
              </NavLink>
            </li>
            <li>
              <NavLink to="/school" style={isActiveStyle} className="nav-items">
                Schools
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<StudentView />} />
        <Route path="/teachers" element={<TeacherView />} />
        <Route path="/classes" element={<ClassView />} />
        <Route path="/school" element={<SchoolView />} />
        <Route path="/teachers/:id" element={<TeacherDetail />} />
        <Route path="/teachers/add" element={<TeacherForm />} />
        <Route path="/teachers/edit/:id" element={<TeacherForm />} />
        <Route path="/students/:id" element={<StudentDetail />} />
        <Route path="/students/add" element={<StudentForm />} />
        <Route path="/students/edit/:id" element={<StudentForm />} />
      </Routes>
    </div>
  );
}
