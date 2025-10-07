// src/studentServices.js

const API_URL = "http://localhost:5000/api/students"; // Backend URL

export const getStudents = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data.message ? [] : data; // handle "No students found"
  } catch (err) {
    console.error("Error fetching students:", err);
    return [];
  }
};

export const addStudent = async (student) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
    return await res.json();
  } catch (err) {
    console.error("Error adding student:", err);
  }
};

export const updateStudent = async (id, student) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
    return await res.json();
  } catch (err) {
    console.error("Error updating student:", err);
  }
};

export const deleteStudent = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    return await res.json();
  } catch (err) {
    console.error("Error deleting student:", err);
  }
};
