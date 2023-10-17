import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudentAsync } from "./studentsSlice";

const StudentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const studentToUpdate = useSelector(({ students }) =>
    students.students.find((student) => student._id === id)
  );

  if (!studentToUpdate) {
    return <p>Student not found!</p>;
  }

  const handleDelete = (id) => {
    dispatch(deleteStudentAsync(id));
    navigate("/");
  };

  return (
    <div>
      <h2>Student Detail</h2>
      <p>
        <strong>Name: </strong>
        {studentToUpdate.name}
      </p>
      <p>
        <strong>Age: </strong>
        {studentToUpdate.age}
      </p>
      <p>
        <strong>Grade: </strong>
        {studentToUpdate.grade}
      </p>
      <p>
        <strong>Gender: </strong>
        {studentToUpdate.gender}
      </p>
      <p>
        <strong>Attendance: </strong>
        {studentToUpdate.attendance}
      </p>
      <p>
        <strong>Marks: </strong>
        {studentToUpdate.marks}
      </p>

      <Link to={`/students/edit/${id}`} state={studentToUpdate}>
        <button>Edit Details </button>
      </Link>

      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default StudentDetail;
