
import React, { useState, useEffect } from "react";
import styles from "../../styles/employees/Position.module.css";
import Styles from "@/styles/dashboard/dashboard.module.css";
import TableActionPopUp from "@/components/commonElement/TableActionPopUp";
import AddPositions from "@/components/employees/AddPositions";


const Position: React.FC = () => {
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [showActions, setShowActions] = useState<number>(-1);

  
  return (
    <div className={styles.container}>
      <h6 className={styles.headerText}>Positions</h6>

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

      {/* <div className={styles.level}>
        <h4>Positions</h4>
        <div>
          <p>TITLE</p>
        </div>
        <div>
          <input type="text" placeholder="Positions" />
        </div>
        {[
          "CEO",
          "Team Lead",
          "Senior Software Developer",
          "Junior Software Developer",
          "CTO",
        ].map((e) => (
          <div>
            <h5>{e}</h5>
          </div>
        ))}
      </div> */}

      <h5 className={styles.tableHeader}>Positions</h5>
      <table
        style={{
          borderCollapse: "separate",
          borderSpacing: "17px",
          marginLeft: "20px",
        }}
      >
        <tbody>
          {[...Array(3)].map((item, i) => (
            <tr key={i}>
              {[...Array(3)].map((itm, j) => (
                <td
                  key={j}
                  style={{
                    padding: "16px 26px",
                    border: "1px solid #fff",
                    background: "#fff",
                    borderRadius: "15px",
                  }}
                >
                  <div style={{ display: "flex", gap: "124px" }}>
                    <div>Senior Software Enginner</div>
                    <div>
                      <img
                        onClick={() => setShowActions(i * 3 + j)}
                        src="/assets/3dotV.svg"
                        style={{ cursor: "pointer" }}
                        alt={item?.name}
                      />
                      <TableActionPopUp
                        show={showActions === i * 3 + j}
                        setShow={setShowActions}
                      >
                        <div style={{ cursor: "pointer" }} className="p-1">
                          <img title="edit" src="/assets/editIcon.svg" alt="" />
                          Edit
                        </div>
                        <div style={{ cursor: "pointer" }} className="p-1">
                          <img
                            title="remove"
                            src="/assets/deleteIcon.svg"
                            alt=""
                          />
                          delete
                        </div>
                      </TableActionPopUp>
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {openAdd && <AddPositions setOpenAdd={setOpenAdd} openAdd={openAdd} />}
    </div>
  );
};

export default Position;
