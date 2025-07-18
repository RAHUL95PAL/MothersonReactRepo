import axios from "axios";
import React, { useState } from "react";

export default function EmployeeForm() {
  // State for form fields
  const [formData, setFormData] = useState({
    ssn: "",
    name: "",
    lastName: "",
    department: ""
  });

  // State for success/error messages
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5033/api/Curd/InsertData", {
        ssn: parseInt(formData.ssn) || 0,
        name: formData.name,
        lastName: formData.lastName,
        department: parseInt(formData.department) || 0,
      });

      setMessage("Employee added successfully!");
      setFormData({ ssn: "", name: "", lastName: "", department: "" });
      console.log("Response:", response.data);
    } catch (error) {
      if (error.response) {
        console.error("Server error response:", error.response.status, error.response.data);
        setMessage(`Failed to add employee: ${error.response.data}`);
      } else if (error.request) {
        console.error("No response received:", error.request);
        setMessage("Failed to add employee: No response from server.");
      } else {
        console.error("Error setting up request:", error.message);
        setMessage(`Failed to add employee: ${error.message}`);
      }
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>SSN:</label>
          <input
            type="number"
            name="ssn"
            value={formData.ssn}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Department:</label>
          <input
            type="number"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}