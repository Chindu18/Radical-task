import React from 'react'
import './Employee.css'
import { useNavigate } from 'react-router-dom'

const Employee = () => {
    const navigate=useNavigate();
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
                    <tr>
                        <td>jeeva</td>
                        <td>123</td>
                        <td>dd</td>
                        <td>wd</td>
                        <td>sd</td>
                        <td>ds</td>
                        <td>wsd</td>
                        <td>dws</td>
                    </tr>
                
                    <tr>
                        <td>John Doe</td>
                        <td>EMP001</td>
                        <td>IT</td>
                        <td>Developer</td>
                        <td>Project Alpha</td>
                        <td>Full-Time</td>
                        <td>Active</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                </tr>
                <tr>
                        <td>Jane Smith</td>
                        <td>EMP002</td>
                        <td>HR</td>
                        <td>Manager</td>
                        <td>Project Beta</td>
                        <td>Part-Time</td>
                        <td>Inactive</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                </tr>
                <tr>
                        <td>Michael Brown</td>
                        <td>EMP003</td>
                        <td>Finance</td>
                        <td>Analyst</td>
                        <td>Project Gamma</td>
                        <td>Full-Time</td>
                        <td>Active</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                </tr>
                <tr>
                        <td>Emily Davis</td>
                        <td>EMP004</td>
                        <td>Marketing</td>
                        <td>Executive</td>
                        <td>Project Delta</td>
                        <td>Contract</td>
                        <td>Active</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                </tr>
                <tr>
                        <td>David Wilson</td>
                        <td>EMP005</td>
                        <td>IT</td>
                        <td>Tester</td>
                        <td>Project Epsilon</td>
                        <td>Full-Time</td>
                        <td>Inactive</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Employee