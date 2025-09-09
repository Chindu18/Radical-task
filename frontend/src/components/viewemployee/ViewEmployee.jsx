import React, { useState, useEffect } from 'react';
import './ViewEmployee.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ViewEmployee = () => {
  const navigate = useNavigate();
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/employee/${employeeId}`);
        if (res.data.success) {
          setEmployee(res.data.data);
          console.log('suu')
        }
      } catch (error) {
        console.error("Error fetching employee:", error);
      }
    };

    fetchEmployee();
  }, [employeeId]);

  return (
    <>
      <div className="heading">
        <i onClick={() => navigate("/")} className="bi bi-chevron-left"></i>
        <p>View Employee Details</p>
      </div>

      <div className="sub-heading">
        <i className="bi bi-person-fill"></i>
        <p>Personal Information</p>
      </div>

      <div className='information'>
        <div className='image-container'>
          <img src={employee.profile_url} alt="Profile" />
        </div>

        <div className='information-container'>
          <div className='information-details'>
            <p className='name'>Name</p>
            <p className='value'>{employee.employee_name}</p>
          </div>
          <div className='information-details'>
            <p className='name'>Employee Id</p>
            <p className='value'>{employee.employee_id || 'N/A'}</p>
          </div>
        </div>

        <div className='information-container'>
          <div className='information-details'>
            <p className='name'>Department</p>
            <p className='value'>{employee.department || 'N/A'}</p>
          </div>
          <div className='information-details'>
            <p className='name'>Designation</p>
            <p className='value'>{employee.designation || 'N/A'}</p>
          </div>
        </div>

        <div className='information-container'>
          <div className='information-details'>
            <p className='name'>Project</p>
            <p className='value'>{employee.project || 'N/A'}</p>
          </div>
          <div className='information-details'>
            <p className='name'>Type</p>
            <p className='value'>{employee.work_type || 'N/A'}</p>
          </div>
        </div>

        <div className='information-container'>
          <div className='information-details'>
            <p className='name'>Status</p>
            <p className='value'>{employee.work_status || 'N/A'}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewEmployee;
