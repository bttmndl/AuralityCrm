import styles from "@/styles/components/employees/AddEmployee.module.css";
import { useState } from "react";



const AddPositions = ({ setOpenAdd, openAdd }: any) => {
  const [fullName, setFullName] = useState<string>("");
  return (
    <div className={`${styles.popup}`}>
      <h2 className={styles.heading}>Add Positions</h2>

      {/* Full Name */}
      <div className={styles.formGroup}>
        <label>Position Name</label>
        <input
          type="text"
          placeholder="position name"
          className={styles.input}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <div className={styles.inviteButtonDiv}>
        <button className={styles.saveButton}>Add</button>
        <button
          className={styles.cancelButton}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddPositions;
