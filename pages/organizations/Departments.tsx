
import React, { useState, useEffect } from "react";
import styles from "../../styles/organization/Departments.module.css";
import AddOrganisation from "@/components/organisation/addOrganisation";

interface Employee {
  id: string;
  name: string;
  size:number;
}

const Departments = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [data, setData] = useState<Employee[]>([
    { id: "0", name: "Designer", size: 19 },
    { id: "1", name: "Front-end", size: 9 },
    { id: "2", name: "Back-end", size: 9 },
    { id: "3", name: "HR", size: 4 },
    { id: "4", name: "Marketing", size: 10 },
  ]);
  return (
    <div className={styles.container}>
      <h6 className={styles.headerText}>Departments</h6>
      <div className={styles.sectioncontainer}>
        <div className={styles.sectionwrapper}>
          <div className={styles.section}>
            <button className={styles.addButton}>Add</button>
            <input
              type="date"
              className={styles.datePicker}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <h4 className={styles.tableHeading}>Departments</h4>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>NAME</th>
              <th>SIZE</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele: Employee) => (
              <tr key={ele.id}>
                <td>{ele.name}</td>
                <td>{ele.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default Departments;
