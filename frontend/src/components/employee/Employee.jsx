import React, { useState, useEffect } from 'react';
import './Employee.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Employee = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  
  const fetchEmployees = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/showemployee'); 
      if (res.data.success) {
        setEmployee(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  
  const show = (id) => {
    navigate(`/viewemployee/${id}`);
  };

  const remove = async (id) => {
    const confirmDelete = window.confirm("Do you want to delete this employee?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/deleteemployee/${id}`);
      

      alert("Employee deleted successfully");
      fetchEmployees(); 

    } catch (error) {
      console.error("Error deleting employee:", error);
      alert("Failed to delete employee");
    }
  };

  return (
    <div>
      <div className='employee-container'>
        <h1>Employee</h1>
        <div className='search-container'>
          <div className='search-box'>
            <input type="text" placeholder='Search' />
            <span><i className="bi bi-search"></i></span>   
          </div>
          <div className='button' onClick={() => navigate('/addemployee')}>
            <i className="bi bi-plus-circle"></i>
            <p>Add New Employee</p>
          </div>
        </div>
      </div>

      <div className="table-wrapper">
        <table className='employee-table'>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Employee Id</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Project</th>
              <th>Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {!employee || employee.length === 0 ? (
              <tr>
                <td className='nodata' colSpan="8" style={{ textAlign: 'center', padding: '20px' }}>
                  No records found
                </td>
              </tr>
            ) : (
              employee.map(emp => (
                <tr key={emp.employee_id}>
                  <td>{emp.employee_name}</td>
                  <td>{emp.employee_id}</td>
                  <td>{emp.department}</td>
                  <td>{emp.designation}</td>
                  <td>{emp.project}</td>
                  <td>{emp.work_type}</td>
                  <td>{emp.work_status}</td>
                  <td style={{ display: 'flex', gap: '5px' }}> 
                    <div>
                      <i onClick={() => show(emp.employee_id)} className="bi bi-eye"></i>
                    </div>
                    <div>
                      <i onClick={() => navigate(`/editemployee/${emp.employee_id}`)} className="bi bi-pencil-square"></i>
                    </div>
                    <div>
                      <i onClick={() => remove(emp.employee_id)} className="bi bi-trash3"></i>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
