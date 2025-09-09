import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./ViewEmployee.css";

const ViewEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    
    const fetchEmployee = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/employees/${id}`);
        setEmployee(res.data);
      } catch (error) {
        console.error("Error fetching employee details:", error);
      }
    };
    fetchEmployee();
  }, [id]);

  if (!employee) {
    return <p>Loading employee details...</p>;
  }

  return (
    <div className="view-employee">
      
      <div className="heading">
        <i onClick={() => navigate(-1)} className="bi bi-chevron-left"></i>
        <p>View Employee Details</p>
      </div>

     
      <div className="sub-heading">
        <i className="bi bi-person-fill"></i>
        <p>Personal Information</p>
      </div>

     
      <div className="employee-card">
        <div className="employee-img">
          <img
            src={employee.image || "https://via.placeholder.com/120"}
            alt={employee.name}
          />
        </div>

        <div className="employee-info">
          <div className="info-row">
            <p><strong>Name</strong></p>
            <p>{employee.name}</p>
            <p><strong>Employee ID</strong></p>
            <p>{employee.employee_id}</p>
          </div>

          <div className="info-row">
            <p><strong>Department</strong></p>
            <p>{employee.department}</p>
            <p><strong>Designation</strong></p>
            <p>{employee.designation}</p>
          </div>

          <div className="info-row">
            <p><strong>Project</strong></p>
            <p>{employee.project}</p>
            <p><strong>Type</strong></p>
            <p>{employee.type}</p>
          </div>

          <div className="info-row">
            <p><strong>Status</strong></p>
            <p>{employee.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
