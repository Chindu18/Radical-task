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
             designation, project, work_type, work_status, 
             profile_url}=req.body;
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

export { showemployee, addemployee };
