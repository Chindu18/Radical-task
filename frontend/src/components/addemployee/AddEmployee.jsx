import React, { useState } from "react";
import "./AddEmployee.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddEmployee = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    employee_id: "",
    department: "",
    designation: "",
    project: "",
    type: "",
    status: "",
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      await axios.post("http://localhost:5000/api/employees", formData);
      alert("✅ Employee added successfully");
      navigate("/"); 
    } catch (error) {
      console.error("Error while adding employee:", error);
      alert("Error while adding employee. Please try again.");
    }
  };

  return (
    <div className="addemployee">
      <div className="heading">
        <i onClick={() => navigate("/")} className="bi bi-chevron-left"></i>
        <p>Add New Employee</p>
      </div>

      <div className="sub-heading">
        <i className="bi bi-person-fill"></i>
        <p>Personal Information</p>
      </div>

      <div className="form-data">
        <div className="file-upload">
          <input type="file" />
          <img src="" alt="Preview" />
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="inputs-fields">
            <div>
              <p>Name*</p>
              <input
                type="text"
                name="name"
                className="input-field"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <p>Employee Id*</p>
              <input
                type="number"
                name="employee_id"
                className="input-field"
                value={formData.employee_id}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="inputs-fields">
            <div>
              <p>Department*</p>
              <select
                name="department"
                className="input-field"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select department
                </option>
                <option value="design">Design</option>
                <option value="development">Development</option>
              </select>
            </div>
            <div>
              <p>Designation*</p>
              <select
                name="designation"
                className="input-field"
                value={formData.designation}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select designation
                </option>
                <option value="designer">Designer</option>
                <option value="design_lead">Design Lead</option>
                <option value="developer">Developer</option>
              </select>
            </div>
          </div>

          <div className="inputs-fields">
            <div>
              <p>Project*</p>
              <input
                type="text"
                name="project"
                className="input-field"
                value={formData.project}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <p>Type*</p>
              <select
                name="type"
                className="input-field"
                value={formData.type}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select type
                </option>
                <option value="office">Office</option>
                <option value="remote">Remote</option>
              </select>
            </div>
          </div>

          <div className="inputs-fields">
            <div>
              <p>Status*</p>
              <select
                name="status"
                className="input-field"
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select status
                </option>
                <option value="permanent">Permanent</option>
                <option value="intern">Intern</option>
              </select>
            </div>
          </div>

          <div className="inputs-confirm">
            <button
              type="button"
              className="cancel"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
            <button type="submit" className="confirm">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
