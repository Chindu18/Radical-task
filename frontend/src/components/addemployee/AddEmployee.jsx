import React, { useEffect, useState } from "react";
import "./AddEmployee.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import img from '../../assests/img.png'

const AddEmployee = () => {
  const navigate = useNavigate();

  const [image,setimage]=useState('')

  const [formData, setFormData] = useState({
    employee_name: "",
    employee_id: "", // will be converted to number
    department: "",
    designation: "",
    project: "",
    work_type: "",
    work_status: "",
    profile_url: "",
  });

  const handleChange = (e) => {
  let { name, value } = e.target;

  if (name === "employee_id") {
    value = value ? Number(value) : "";
  }

  setFormData({
    ...formData,
    [name]: value,
  });
};


  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/addemployee", formData);
      navigate("/");
    } catch (error) {
      console.log("Error while adding employee:", error);
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
          <label htmlFor="img"><img className="upload-img" src={image?URL.createObjectURL(image):img} alt="" /></label>
          <input
          id="img"
            type="file"
            name="profile_url"
            onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            setimage(file); 
            console.log(file)
            setFormData({
              ...formData,
              profile_url: file, 
            });
          }
        }}
            hidden
          />
          
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="inputs-fields">
            <div>
              <p>Name*</p>
              <input
                type="text"
                name="employee_name"
                className="input-field"
                value={formData.employee_name}
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
              <p>Work Type*</p>
              <select
                name="work_type"
                className="input-field"
                value={formData.work_type}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select work type
                </option>
                <option value="office">Office</option>
                <option value="remote">Remote</option>
              </select>
            </div>
          </div>

          <div className="inputs-fields">
            <div>
              <p>Work Status*</p>
              <select
                name="work_status"
                className="input-field"
                value={formData.work_status}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select work status
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
