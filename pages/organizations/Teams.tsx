import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/organization/Teams.module.css";


interface Employee {
  id: string;
  fullName: string;
  email: string;
  joiningDate: string;
  income: number;
  bonus: string;
  status: string;
}
interface ChartProps {
  data: number[]; // Y-axis data
}

interface ChartProps {
  data: number[]; // Y-axis data
}

const Teams = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [project, setProject] = useState<string>("All Project");
  const [allEmployees, setAllEmployees] = useState<string>("All Employees");
  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    // Generate 50 random dummy records
    const dummyData: Employee[] = Array.from({ length: 50 }, (_, index) => ({
      id: index.toString(),
      fullName: `Employee ${index + 1}`,
      email: `employee${index + 1}@example.com`,
      joiningDate: new Date(
        2022,
        index % 12,
        (index % 28) + 1
      ).toLocaleDateString(),
      income: Math.floor(Math.random() * 10000) + 5000,
      bonus: `${Math.floor(Math.random() * 5000)}`,
      status: Math.random() < 0.5 ? "Active" : "Inactive",
    }));

    setEmployees(dummyData);
  }, []);


  const Table = () => {
    const [employeesData, setEmployeesData] = useState<Employee[]>(employees);

    return (
      <div className={styles.tableWrapper}>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>TEAM NAME</th>
                <th>MANAGER NAME</th>
                <th>TASK</th>
                <th>TEAM</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {employeesData.map((employee: Employee) => (
                <tr key={employee.id}>
                  <td>{employee.fullName}</td>
                  <td>{employee.email}</td>
                  <td>{employee.joiningDate}</td>
                  <td>{employee.income}</td>
                  <td>
                    <div
                      className={`${styles.statusButton} ${
                        employee.status === "Active"
                          ? styles.active
                          : styles.inactive
                      }`}
                    >
                      {employee.status}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <h6 className={styles.headerText}>Teams</h6>

      <div className={styles.sectioncontainer}>
        <div className={styles.sectionwrapper}>
          <div className={styles.section}>
            <button className={styles.addButton}>Add</button>
            <select
              className={styles.dropdown}
              value={project}
              onChange={(e) => setProject(e.target.value)}
            >
              <option value="All Projects">All Projects</option>
              {/* Add more options if needed */}
            </select>
            <select
              className={styles.dropdown}
              value={allEmployees}
              onChange={(e) => setAllEmployees(e.target.value)}
            >
              <option value="All Employees">All Employees</option>
              {/* Add more options if needed */}
            </select>
            <input
              type="date"
              className={styles.datePicker}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.tableHeadText}><h5>Teams</h5></div>
      <Table />
    </div>
  );
};

export default Teams;
