import React, { useState, useEffect } from "react";

function StudentForm({ onAddStudent, editingStudent, onCancelEdit }) {
  const [formData, setFormData] = useState({ name: "", age: "", grade: "" });

  // Prefill when editing
  useEffect(() => {
    if (editingStudent) {
      setFormData({
        name: editingStudent.name,
        age: editingStudent.age,
        grade: editingStudent.grade,
      });
    } else {
      setFormData({ name: "", age: "", grade: "" });
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(formData);
    setFormData({ name: "", age: "", grade: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "20px",
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="grade"
        placeholder="Grade"
        value={formData.grade}
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        style={{
          backgroundColor: editingStudent ? "#4CAF50" : "#2196F3",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "4px",
        }}
      >
        {editingStudent ? "Update Student" : "Add Student"}
      </button>

      {editingStudent && (
        <button
          type="button"
          onClick={onCancelEdit}
          style={{
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: "4px",
          }}
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default StudentForm;
