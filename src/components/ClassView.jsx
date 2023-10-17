import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStudents,
  setClassSortBy,
  setFilter,
  setSortBy
} from "../features/students/studentsSlice";
import StudentList from "../features/students/StudentList";

const ClassView = () => {
  const dispatch = useDispatch();
  const { students, classSortBy, filter, sortBy } = useSelector(
    ({ students: { students, classSortBy, filter, sortBy } }) => ({
      students,
      classSortBy,
      filter,
      sortBy
    })
  );

  const allClasses = [
    "All",
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
  const allGenders = ["All", "Male", "Female", "Transgender"];
  const allSort = ["Select", "Name", "Age", "Attendance", "Marks"];

  const classSortedStudents = students.filter((student) =>
    classSortBy === "All" ? true : student.class === classSortBy
  );

  const filteredStudents = classSortedStudents.filter((student) =>
    filter === "All" ? true : student.gender === filter
  );
  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortBy === allSort[1]) {
      console.log("1");
      return a.name.localeCompare(b.name);
    }
    if (sortBy === allSort[2]) {
      console.log("2");
      return b.age - a.age;
    }
    if (sortBy === allSort[3]) {
      console.log("3");
      return b.attendance - a.attendance;
    }
    if (sortBy === allSort[4]) {
      console.log("4");
      return b.marks - a.marks;
    }
    return 0;
  });

  const handleClassChange = (e) => dispatch(setClassSortBy(e.target.value));

  const handleFilterChange = (e) => dispatch(setFilter(e.target.value));

  const handleSortChange = (e) => dispatch(setSortBy(e.target.value));

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  return (
    <div className="page">
      <h2>Class View</h2>

      <div className="row-filters">
        <div>
          <label htmlFor="class">
            <strong>Class: </strong>
          </label>
          <select id="class" onChange={handleClassChange}>
            {allClasses.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="filter">
            <strong>Filter by Gender: </strong>
          </label>
          <select id="filter" onChange={handleFilterChange}>
            {allGenders.map((gender) => (
              <option value={gender}>{gender}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="sort">
            <strong>Sort by: </strong>
          </label>
          <select id="sort" onChange={handleSortChange}>
            {allSort.map((sort) => (
              <option value={sort}>{sort}</option>
            ))}
          </select>
        </div>
      </div>

      <StudentList students={sortedStudents} classViewPage />
    </div>
  );
};

export default ClassView;
