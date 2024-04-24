import React, { useState } from "react";
import ChangePasswordPopup from "./ChangePasswordPopup";

// const styles = {
//   modal: {
//     backgroundColor: "#F0F0F0",
//     borderRadius: "10px"
//   },
//   changePasswordText: {
//     fontSize: "20px",
//     fontWeight: "bold",
//     color: "#333333"
//   },
//   currentPasswordText: {
//     fontSize: "16px",
//     fontWeight: "normal",
//     color: "#555555"
//   },
//   newPasswordText: {
//     fontSize: "16px",
//     fontWeight: "normal",
//     color: "#555555"
//   },
//   confirmPasswordText: {
//     fontSize: "16px",
//     fontWeight: "normal",
//     color: "#555555"
//   },
//   currentPasswordInput: {
//     backgroundColor: "#FFFFFF",
//     color: "#000000",
//     borderRadius: "8px",
//     border: "1px solid #CCCCCC"
//   },
//   newPasswordInput: {
//     backgroundColor: "#FFFFFF",
//     color: "#000000",
//     borderRadius: "8px",
//     border: "1px solid #CCCCCC"
//   },
//   confirmPasswordInput: {
//     backgroundColor: "#FFFFFF",
//     color: "#000000",
//     borderRadius: "8px",
//     border: "1px solid #CCCCCC"
//   },
//   cancelButton: {
//     backgroundColor: "#DDDDDD",
//     color: "#333333",
//     borderRadius: "12px"
//   },
//   updateButton: {
//     backgroundColor: "#007bff",
//     color: "#FFFFFF",
//     borderRadius: "12px"
//   }
// };

const styles = {
  modal: {
    backgroundColor: "#333333",
    borderRadius: "10px"
  },
  changePasswordText: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#CCCCCC"
  },
  currentPasswordText: {
    fontSize: "16px",
    fontWeight: "normal",
    color: "#AAAAAA"
  },
  newPasswordText: {
    fontSize: "16px",
    fontWeight: "normal",
    color: "#AAAAAA"
  },
  confirmPasswordText: {
    fontSize: "16px",
    fontWeight: "normal",
    color: "#AAAAAA"
  },
  currentPasswordInput: {
    backgroundColor: "#444444",
    color: "#DDDDDD",
    borderRadius: "8px",
    border: "1px solid #666666"
  },
  newPasswordInput: {
    backgroundColor: "#444444",
    color: "#DDDDDD",
    borderRadius: "8px",
    border: "1px solid #666666"
  },
  confirmPasswordInput: {
    backgroundColor: "#444444",
    color: "#DDDDDD",
    borderRadius: "8px",
    border: "1px solid #666666"
  },
  cancelButton: {
    backgroundColor: "#444444",
    color: "#CCCCCC",
    borderRadius: "12px",
    border: "1px solid #666666"
  },
  updateButton: {
    backgroundColor: "#444444",
    color: "#FFFFFF",
    borderRadius: "12px",
    border: "1px solid #666666"
  },
  errorMessage: {
    color: "#DDDDDD",
    fontSize: "14px", 
    fontWeight: "normal" 
  }
};

function App() {
  const [changePasswordPopup, setChangePasswordPopup] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (currentPassword, newPassword, confirmPassword) => {
    console.log("Current Password:", currentPassword);
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);
  };

  const handleOpenChangePasswordPopup = () => {
    setChangePasswordPopup(true);
  };

  const handleCloseChangePasswordPopup = () => {
    setChangePasswordPopup(false);
  };

  const handleCancel = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    handleCloseChangePasswordPopup();
  };

  return (
    <div>
      <button onClick={handleOpenChangePasswordPopup}>Open Change Password Popup</button>
      <ChangePasswordPopup
          changePasswordPopup={changePasswordPopup}
          onPasswordChange={handlePasswordChange}
          onCancel={handleCancel}
          setChangePasswordPopup={setChangePasswordPopup}
          newPassword={newPassword}
          setNewPassword={setNewPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          currentPassword={currentPassword}
          setCurrentPassword={setCurrentPassword}
          // modalStyle={styles.modal}
          // changePasswordTextStyle={styles.changePasswordText}
          // currentPasswordTextStyle={styles.currentPasswordText}
          // newPasswordTextStyle={styles.newPasswordText}
          // confirmPasswordTextStyle={styles.confirmPasswordText}
          // currentPasswordInputStyle={styles.currentPasswordInput}
          // newPasswordInputStyle={styles.newPasswordInput}
          // confirmPasswordInputStyle={styles.confirmPasswordInput}
          // cancelButtonStyle={styles.cancelButton}
          // updateButtonStyle={styles.updateButton}
          // errorMessageStyle={styles.errorMessage}
        />
    </div>
  );
}

export default App;
