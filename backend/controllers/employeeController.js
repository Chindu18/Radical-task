import { db } from '../config/database.js';

//fetch the employee data from database
const showemployee = async (req, res) => {
  try {
    const connection = await db();
    const [rows] = await connection.execute('SELECT * FROM employees');
    console.log(rows);
    res.status(200).json({
      message: "Employee data fetched successfully",
      success: true,
      data: rows
    });
  } catch (error) {
    console.error("Error in showemployee:", error);
    res.status(500).json({
      message: "Error fetching employee data",
      success: false,
      error: error.message
    });
  }
};

//add employee to database
const addemployee = async (req, res) => {
    try {
        const connection = await db();
        const {employee_name, employee_id, department,
             designation, project, work_type, work_status
            }=req.body;
            const profile_url=req.file.filename || "profile pic not uploaded";
        const [rows]=await connection.execute(`INSERT INTO employees (employee_name, employee_id, department, designation, project, work_type, work_status, profile_url)  VALUES(?,?,?,?,?,?,?,?)`,
        [employee_name, employee_id, department,designation, project, work_type, work_status, profile_url])
        console.log(rows);
        res.status(200).json({
            message:"Employee added successfully",
            success:true,
            data:rows
        })
    } catch (error) {
        res.status(500).json({
            message:"Error adding employee",
            success:false,
            error:error.message
        })
    }
}


const updateemployee = async (req, res) => {
  try {
    const connection = await db();
    const { employee_id } = req.params;
    const { employee_name, department, designation, project, work_type, work_status } = req.body;
    const profile_url = req.file ? req.file.path : undefined;

    let query = `UPDATE employees SET employee_name=?, department=?, designation=?, project=?, work_type=?, work_status=?`;
    const params = [employee_name, department, designation, project, work_type, work_status];

    if (profile_url) {
      query += `, profile_url=?`; 
      params.push(profile_url);
    }

    query += ` WHERE employee_id=?`;
    params.push(employee_id);

  
    const [rows] = await connection.execute(query, params);

    res.status(200).json({
      message: "Employee updated successfully",
      success: true,
      data: rows
    });

  } catch (error) {
    res.status(500).json({
      message: "Error updating employee",
      success: false,
      error: error.message
    });
  }
};

const deleteemployee = async (req, res) => {
  try {
    const connection = await db();
    const { employee_id } = req.params
    
      const [rows] = await connection.execute(
      `DELETE FROM employees WHERE employee_id=?`,
      [employee_id]
    );

    
    res.status(200).json({
      message: "Employee deleted successfully",
      success: true
    });

  } catch (error) {
    console.error("Error deleting employee:", error);
    res.status(500).json({
      message: "Error deleting employee",
      success: false,
      error: error.message
    });
  }
};

export { showemployee, addemployee,updateemployee ,deleteemployee};
