import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTeacherAsync } from "./teachersSlice";

const TeacherDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const teacherToUpdate = useSelector(({ teachers }) =>
    teachers.teachers.find((teacher) => teacher._id === id)
  );

  if (!teacherToUpdate) {
    return <p>Teacher not found!</p>;
  }

  const handleDelete = (id) => {
    dispatch(deleteTeacherAsync(id));
    navigate("/teachers");
  };

  return (
    <div>
      <h2>Teacher Detail</h2>
      <p>
        <strong>Name: </strong>
        {teacherToUpdate.name}
      </p>
      <p>
        <strong>Subject: </strong>
        {teacherToUpdate.subject}
      </p>
      <p>
        <strong>Contact: </strong>
        {teacherToUpdate.contact}
      </p>

      <Link to={`/teachers/edit/${id}`} state={teacherToUpdate}>
        <button>Edit Details </button>
      </Link>

      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default TeacherDetail;
