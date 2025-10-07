import React, { useEffect, useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "./services/studentServices";

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const fetchStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleAddStudent = async (formData) => {
    if (editingStudent) {
      await updateStudent(editingStudent._id, formData);
      setEditingStudent(null);
    } else {
      await addStudent(formData);
    }
    fetchStudents();
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    fetchStudents();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Management</h1>

      <StudentForm
        onAddStudent={handleAddStudent}
        editingStudent={editingStudent}
        onCancelEdit={() => setEditingStudent(null)}
      />

      <StudentList students={students} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
