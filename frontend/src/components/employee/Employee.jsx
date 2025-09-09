import React, { useState } from 'react'
import './Employee.css'
import { useNavigate } from 'react-router-dom'

const Employee = () => {
    const navigate=useNavigate();
  const [employee, setEmployee] = useState([
  {
    employee_name: "Chin",
    employee_id: "77",
    department: "IT",
    designation: "Dev",
    project: "Alpha",
    work_type: "Full-Time",
    work_status: "Active",
  }
]);



  return (
    <div>
        <div className='employee-container'>
            <h1>Employee</h1>
            <div className='search-container'>
                <div className='search-box'>
                    <input type="text" placeholder='Search' />
                    <span><i className="bi bi-search" ></i></span>   
                </div>
                <div className='button' onClick={()=>navigate('/addemployee')}><i className="bi bi-plus-circle"></i><p>Add New Employee</p></div>
            </div>
        </div>
        <div>
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
                      ) :(employee.map(emp=>(
                        <tr key={emp.employee_id}>
                        <td>{emp.employee_name}</td>
                        <td>{emp.employee_id}</td>
                        <td>{emp.department}</td>
                        <td>{emp.designation}</td>
                        <td>{emp.project}</td>
                        <td>{emp.work_type}</td>
                        <td>{emp.work_status}</td>
                        <td style={{display:'flex',gap:'5px'}}> 
                            <div><i className="bi bi-eye"></i></div>
                            <div><i className="bi bi-pencil-square"></i></div>
                            <div><i className="bi bi-trash3"></i></div>
                        </td>
                </tr>
                    )))
                }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Employee