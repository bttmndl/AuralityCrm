import { useState } from "react";
import styles from "@/styles/components/employees/AddEmployee.module.css";
import { useAddEmployeeManageMutation } from '@/store/services/EmployeesApi';
import { toast } from "react-toastify";
const AddEmployee = ({ setOpenAdd, openAdd }: any) => {
    const [email, setEmail] = useState('')
    const [joiningDate, setJoiningDate] = useState('')
    const [team, setTeam] = useState('')
    const [position, setPosition] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [fullName, setFullName] = useState('')

    const [employeeAdd]: any = useAddEmployeeManageMutation();
    const handleAddEmployee = async () => {
        const data = {
            fullName: fullName,
            email: email,
            joiningDate: joiningDate,
            team: team,
            position: position,
            userName: userName,
            password: password,
            phone: phone
        }
        const res: any = await employeeAdd(data)

        if (res?.data?.status===201) {
            toast.success('Employee Added SucessFully')
            setOpenAdd(false)
        }
        console.log({ res: res.data.status }, typeof res.data.status);

    }
    return (
      <div className={`${styles.popup}`}>
        <h2 className={styles.heading}>Add Employee</h2>
        <div className={styles.imageContainer}>
          {/* Image Box */}
          <div className={styles.imageBox}></div>
          {/* Image URL Input */}
          <div className={styles.imageInput}>
            <label>Image URL(optional)</label>
            <input type="text" placeholder="Image" />
          </div>
        </div>
        {/* Full Name */}
        <div className={styles.formGroup}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className={styles.input}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        {/* Email and Phone */}
        <div className={`${styles.formGroup} ${styles.dualInput}`}>
          <div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              className={styles.inputHalf}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="tel"
              placeholder="Phone"
              className={styles.inputHalf}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        {/* Username and Password */}
        <div className={`${styles.formGroup} ${styles.dualInput}`}>
          <div>
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              className={styles.inputHalf}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              className={styles.inputHalf}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {/* Joining Date */}
        <div className={`${styles.formGroup} ${styles.dualInput}`}>
          <div>
            <label>Joining Date</label>
            <input
              type="text"
              placeholder="Joining Date"
              className={styles.input}
              value={joiningDate}
              onChange={(e) => setJoiningDate(e.target.value)}
            />
          </div>
          <div>
            <label>Department</label>
            <select id="departmentSelect" defaultValue="select department">
              {["select department", "hello"].map((ele, index) => (
                <option key={index}>{ele}</option>
              ))}
            </select>
          </div>
        </div>
        {/* Position and Team */}
        <div className={`${styles.formGroup} ${styles.dualInput}`}>
          <div>
            <label>Position</label>
            <input
              type="text"
              placeholder="Position"
              className={styles.inputHalf}
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div>
            <label>Team</label>
            <input
              type="text"
              placeholder="Team"
              className={styles.inputHalf}
              value={team}
              onChange={(e) => setTeam(e.target.value)}
            />
          </div>
        </div>
        {/* Save Button */}
        <button
          className={styles.saveButton}
          onClick={() => handleAddEmployee()}
        >
          Save
        </button>
      </div>
    );
};

export default AddEmployee