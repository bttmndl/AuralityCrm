import React from "react";
import Card from "@/components/dashboard/Card";
import Styles from "@/styles/dashboard/timeTracking.module.css";
import ProgressBar from "./ProgressBar";
import ColumnChart from "./ColumnChart";

const TimeTracking = () => {
  const dataa = [40, 55, 42, 75, 27, 58];
  const categories = [
    "Mohit",
    "Rohan",
    "Akki",
    "Priya",
    "Rohan",
    "Others",
  ];
  const teamData = [
    {
      title: "Teams",
      worked: "9/9",
      progress: "100%",
    },
    {
      title: "Project Worked",
      worked: "9/9",
      progress: "100%",
    },
    {
      title: "Work For The Day",
      worked: "60%",
      progress: "60%",
    },
    {
      title: "Worked Member",
      worked: "13/19",
      progress: "68%",
    },
    {
      title: "Project Worked",
      worked: "9/9",
      progress: "100%",
    },
    {
      title: "Work For The Day",
      worked: "60%",
      progress: "60%",
    },
    {
      title: "Worked Member",
      worked: "13/19",
      progress: "68%",
    },
  ];
  return (
    <div className={Styles.container}>
      <div className={Styles.cardContainer}>
        {teamData.map((item, i) => (
          <Card
            key={i}
            title={item?.title}
            subTitle={item?.worked}
            progress={item?.progress}
            progressBar={true}
          />
        ))}
      </div>
      <div className={Styles.graphContainer}>
      <div className={Styles.graphBox}>
        <div>
          <span>Average Time Devoted</span>
        </div>
        <ColumnChart minutes={true} data={dataa} categories={categories} width={420}/>
      </div>
      <div className={Styles.graphBox}>
        <div>
          <span>Strike Time</span>
        </div>
        <ColumnChart minutes={true} data={dataa} categories={categories} />
      </div>
      </div>
      
      <div className={Styles.dataContainer}>
        <div className={Styles.subContainer}>
          <div className={Styles.title}>
            Task
            <button>View All</button>
          </div>
          {Array.from({ length: 4 }).map(() => (
            <div className={Styles.content}>
              <p>Support for the dev container</p>
              <div>
                <div
                  style={{
                    color: "#5D5FEF",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  60%
                </div>
                <ProgressBar
                  width={"100px"}
                  height={"4px"}
                  marginTop={"3px"}
                  backgroundColor={"#E2E8F0"}
                  progressData="60%"
                  progressColor={"#5D5FEF"}
                />
              </div>
              <p>9:00:00</p>
            </div>
          ))}
        </div>
        <div className={Styles.subContainer}>
          <div className={Styles.title}>
            Project
            <button>View All</button>
          </div>
          {Array.from({ length: 4 }).map(() => (
            <div className={Styles.content}>
              <p>Support for the dev container</p>
              <div>
                <div
                  style={{
                    color: "#5D5FEF",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  60%
                </div>
                <ProgressBar
                  width={"100px"}
                  height={"4px"}
                  marginTop={"3px"}
                  backgroundColor={"#E2E8F0"}
                  progressData="60%"
                  progressColor={"#5D5FEF"}
                />
              </div>
              <p>9:00:00</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ width: "63%" }} className={Styles.dataContainer}>
        <div style={{ flex: "1.2" }} className={Styles.subContainer}>
          <div className={Styles.title}>
            Apps and URL
            <button>View All</button>
          </div>
          {Array.from({ length: 4 }).map(() => (
            <div className={Styles.content}>
              <p>Support for the dev container</p>
              <div>
                <div
                  style={{
                    color: "#5D5FEF",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  60%
                </div>
                <ProgressBar
                  width={"100px"}
                  height={"4px"}
                  marginTop={"3px"}
                  backgroundColor={"#E2E8F0"}
                  progressData="60%"
                  progressColor={"#5D5FEF"}
                />
              </div>
              <p>9:00:00</p>
            </div>
          ))}
        </div>
        <div style={{ flex: "1" }} className={Styles.subContainer}>
          <div className={Styles.title}>
            Members
            <button>View All</button>
          </div>
          {Array.from({ length: 4 }).map(() => (
            <div className={Styles.content}>
              <div style={{display:'flex', gap:'5px'}}>
              <img
                src="https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg"
                alt=""
              />
              <p style={{ fontWeight: "700", fontSize: "14px" }}>Random Guy</p>
              </div>
              <div>
                <div
                  style={{
                    color: "#5D5FEF",
                    fontSize: "14px",
                    fontWeight: "700",
                  }}
                >
                  60%
                </div>
                <ProgressBar
                  width={"100px"}
                  height={"4px"}
                  marginTop={"3px"}
                  backgroundColor={"#E2E8F0"}
                  progressData="60%"
                  progressColor={"#5D5FEF"}
                />
              </div>
              <p>9:00:00</p>
            </div>
          ))}
        </div>
      </div>

      <div className={Styles.recentBox}>
        <div className={Styles.title}>
          Recent Acivities
          <button>View All</button>
        </div>
        <div className="d-flex justify-content-between flex-wrap gap-4">
        {Array.from({ length: 3 }).map(() => (
          <div className={Styles.recentSubBox}>
            <div className={Styles.recentTitle}>
              <img
                src="https://i.pinimg.com/1200x/83/66/6a/83666acd8bf0d501a652087d0391667a.jpg"
                alt=""
              />
              <div>
                <strong>Random Guy</strong>
                <div>Last work 23,Jan 2023</div>
              </div>
            </div>
            <img
              style={{ padding: "1rem" }}
              width={300}
              height={200}
              src="../../assets/dashboard/recentwork.png"
              alt=""
            />
            <div className={Styles.bottomTitle}>
              <strong>Uploaded 2 day ago</strong>
              <div>
                See team member's time worked, activity and amounts earned per
                project or task
              </div>
              <button>View Screen</button>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default TimeTracking;
