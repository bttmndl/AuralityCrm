import styles from "@/styles/components/employees/InviteEmployee.module.css";
import {
  useGetAllDepartmentsQuery,
  useGetAllTeamsQuery,
} from "@/store/services/organizationsApi";


const AddApproval = ({ setOpenInvite, openInvite }: any) => {
  const { data: GetDepartment }: any = useGetAllDepartmentsQuery("");
  const { data: GetTeam }: any = useGetAllTeamsQuery("");
  const getDepartmentData = GetDepartment?.data;
  const getTeamData = GetTeam?.data;
  console.log({ GetDepartment: getDepartmentData });

  return (
    <div className={`${styles.popup}`}>
      <h2 className={styles.heading}>Invite Employee</h2>
      {/* Full Name */}
      <div className={styles.formGroup}>
        <label>Email addresses</label>
        <input type="email" placeholder="Email" className={styles.inputHalf} />
      </div>

      {/* Username and Password */}
      <div className={`${styles.formGroup} ${styles.dualInput}`}>
        <div>
          <label htmlFor="departmentSelect">Department</label>
          <select id="departmentSelect">
            {getDepartmentData?.length > 0 ? (
              getDepartmentData?.map(({ ele, index }: any) => (
                <option key={index}>{ele?.departmentName}</option>
              ))
            ) : (
              <option>select Department</option>
            )}
          </select>
          <div>
            {getDepartmentData?.length > 0
              ? getDepartmentData?.map(({ item, index }: any) => {
                  return <li key={index}>{item?.userId}</li>;
                })
              : ""}
          </div>
        </div>
        <div>
          <label>Team</label>
          <select name="" id="">
            {getTeamData?.map(({ item, index }: any) => {
              console.log({ item, index });

              return <option key={index}>{item?.teamName}</option>;
            })}
          </select>
        </div>
      </div>
      {/* Joining Date */}
      <div className={styles.formGroup}>
        <label>Joining Date</label>
        <input
          type="text"
          placeholder="Joining Date"
          className={styles.input}
        />
      </div>
      {/* Position and Team */}
      <div className={`${styles.formGroup}`}>
        <label>Invition expiration</label>
        <input
          type="text"
          placeholder="Invition Expiration"
          className={styles.inputHalf}
        />
      </div>
      {/* Save Button */}
      <div className={styles.inviteButtonDiv}>
        <button className={styles.saveButton}>Invite</button>
        <button
          className={styles.cancelButton}
          onClick={() => setOpenInvite(!openInvite)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddApproval;
