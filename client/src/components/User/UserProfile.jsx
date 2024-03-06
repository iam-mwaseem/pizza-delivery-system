import Form from "../../ui/Form";

export default function UserProfile() {
  return (
    <div>
      <Form
        isProfile={true}
        linkTo={"/app/menu"}
        buttonText={"Update Profile"}
      />
    </div>
  );
}

// <div className={styles["profile-container"]}>
//   <div className={styles["profile-header"]}>
//     <span>Profile</span>
//   </div>
//   <div className={styles["profile-form-container"]}>
//     <form action="" className={styles["profile-form"]}>
//       <input type="text" placeholder="Name" />
//       <input type="text" placeholder="Email" />
//       <input type="text" placeholder="Phone" />
//       <input type="text" placeholder="Address" />
//       <input type="text" placeholder="City" />
//     </form>
//   </div>
//   <button type="submit">Update Profile</button>
//   {/* <Button buttonText="Update Profile" /> */}
// </div>
