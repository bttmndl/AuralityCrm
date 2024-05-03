import React, { useState, useEffect } from "react";
import styles from "../../styles/employees/Approval.module.css";
import Table from "@/components/employees/Table";
import AddApproval from "@/components/employees/AddApproval";
import Styles from "@/styles/dashboard/dashboard.module.css";

const tableTitle = [
  "NAME",
  "APPROVAL POLICY",
  "DATE",
  "EMPLOYEE",
  "TEAM",
  "STATUS",
];

const placeHolder = ["Name"];

const Approval = () => {
  const [openAddApproval, setOpenAddApproval] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <h5 className={styles.headerText}>Approvals</h5>

      <div className="row">
        <div className="col-12">
          <div className={Styles.date}>
            <div style={{ gap: "20px" }}>
              <span
                style={{
                  color: "#FFF",
                  fontFamily: "Helvetica",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "140%",
                  background: "#F56D58",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setOpenAdd(!openAdd);
                }}
              >
                Add
              </span>
              <span>
                All Employees <img src="/assets/down.svg" alt="" />
              </span>
              <span>
                01.01.2023 - 31.01.2023{" "}
                <img src="/assets/sidebar/date.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <Table tableName={`Approvals`} tableTitle={tableTitle}>
        <tbody>
          <tr>
            {placeHolder.map((item: any, i: number) => (
              <td key={i}>
                <input placeholder={item} name={tableTitle[i]} />
              </td>
            ))}
          </tr>
          {Array.from({ length: 16 }).map((item: any, i: number) => (
            <tr key={i}>
              <td>Domain Name</td>
              <td>Default</td>
              <td>29/12/2022</td>
              <td>
                <img
                  src="https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg"
                  alt={item?.name}
                />
                <div>Random Guy</div>
              </td>
              <td></td>
              <td>
                <button style={{ background: "#FFAB2D" }}>viewed</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      { openAddApproval && <AddApproval setOpenAdd={openAddApproval} openAdd={openAddApproval}/>}
    </div>
  );
};

export default Approval;
