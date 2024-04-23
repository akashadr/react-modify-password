import React, { useState } from "react";
import ChangePasswordPopup from "./ChangePasswordPopup";

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
      />
    </div>
  );
}

export default App;
