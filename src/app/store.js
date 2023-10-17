import { configureStore } from "@reduxjs/toolkit";
import { studentsSlice } from "../features/students/studentsSlice";
import { teachersSlice } from "../features/teachers/teachersSlice";
import { schoolSlice } from "../features/school/schoolSlice";

export default configureStore({
  reducer: {
    students: studentsSlice.reducer,
    teachers: teachersSlice.reducer,
    school: schoolSlice.reducer
  }
});
