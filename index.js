import { Dialog } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const Modal = ({
  changePasswordPopup,
  onPasswordChange,
  onCancel,
  setChangePasswordPopup,
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
  currentPassword,
  setCurrentPassword,
  modalStyle,
  changePasswordTextStyle,
  currentPasswordTextStyle,
  newPasswordTextStyle,
  confirmPasswordTextStyle,
  currentPasswordInputStyle,
  newPasswordInputStyle,
  confirmPasswordInputStyle,
  cancelButtonStyle,
  updateButtonStyle,
  errorMessageStyle
}) => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);
  const [popupWidth, setPopupWidth] = useState("30%");
  useEffect(() => {
    const handleResize = () => {
      // Update the width based on screen width
      const width = window.innerWidth < 800 ? window.innerWidth < 450 ? "80%" : "50%" : "30%";
      setPopupWidth(width);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the correct width on component mount
    handleResize();

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handlePasswordChange = () => {
    // Trim the passwords to remove leading and trailing whitespaces
    const trimmedCurrentPassword = currentPassword.trim();
    const trimmedNewPassword = newPassword.trim();
    const trimmedConfirmPassword = confirmPassword.trim();

    // Check if any password field is empty after trimming
    if (trimmedCurrentPassword === "") {
      setError("Current Password cannot be empty!");
      return;
    }
    if (trimmedNewPassword === "") {
      setError("New Password cannot be empty!");
      return;
    }
    if (trimmedConfirmPassword === "") {
      setError("Confirm Password cannot be empty!");
      return;
    }
    if (trimmedNewPassword === trimmedConfirmPassword) {
      onPasswordChange(currentPassword, newPassword, confirmPassword);
      setChangePasswordPopup(false);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setError("");
    } else {
      setError("Passwords do not match!");
    }
  };
  return /*#__PURE__*/React.createElement(Dialog, {
    open: changePasswordPopup,
    onClose: () => setChangePasswordPopup(false),
    style: {
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 50,
      backgroundColor: "rgba(0, 0, 0, 0.5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: modalStyle?.backgroundColor || "white",
      width: popupWidth,
      height: "80%",
      borderRadius: modalStyle?.borderRadius || "20px",
      boxShadow: focusedInput ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
      padding: "20px",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: changePasswordTextStyle?.color || "#36454F",
      textAlign: "center",
      fontSize: changePasswordTextStyle?.fontSize || "24px",
      fontWeight: changePasswordTextStyle?.fontWeight || "600",
      marginBottom: "30px",
      opacity: 0.85
    }
  }, "Change Password"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "90%",
      margin: "auto",
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "currentPassword",
    style: {
      display: "block",
      fontFamily: "Poppins",
      fontWeight: currentPasswordTextStyle?.fontWeight || "normal",
      fontSize: currentPasswordTextStyle?.fontSize || "16px",
      color: currentPasswordTextStyle?.color || "#4B4B4B",
      marginBottom: "10px"
    }
  }, "Current Password"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: showCurrentPassword ? "text" : "password",
    id: "currentPassword",
    style: {
      flex: 1,
      marginTop: "5px",
      marginLeft: "5px",
      border: currentPasswordInputStyle?.border || "1px solid #D1D5DB",
      borderRadius: currentPasswordInputStyle?.borderRadius || "8px",
      padding: "8px",
      marginBottom: "20px",
      backgroundColor: currentPasswordInputStyle?.backgroundColor || "#FFFFFF",
      color: currentPasswordInputStyle?.color || "#000000",
      outline: "none",
      boxShadow: focusedInput === "current" ? "0px 0px 0px 3px rgba(59, 130, 246, 0.05)" : "none",
      transition: "box-shadow 0.3s"
    },
    value: currentPassword,
    onFocus: () => setFocusedInput("current"),
    onBlur: () => setFocusedInput(null),
    onChange: e => setCurrentPassword(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "flex justify-end show-password items-center",
    onClick: () => setShowCurrentPassword(!showCurrentPassword),
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      marginBottom: 10
    }
  }, showCurrentPassword ? /*#__PURE__*/React.createElement(AiOutlineEyeInvisible, {
    fontSize: 24,
    fill: "#AFB2BF"
  }) : /*#__PURE__*/React.createElement(AiOutlineEye, {
    fontSize: 24,
    fill: "#AFB2BF"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "90%",
      margin: "auto",
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "newPassword",
    style: {
      display: "block",
      fontFamily: "Poppins",
      fontWeight: newPasswordTextStyle?.fontWeight || "normal",
      fontSize: newPasswordTextStyle?.fontSize || "16px",
      color: newPasswordTextStyle?.color || "#4B4B4B",
      marginBottom: "10px"
    }
  }, "New Password"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: showNewPassword ? "text" : "password",
    id: "newPassword",
    style: {
      flex: 1,
      marginTop: "5px",
      marginLeft: "5px",
      border: newPasswordInputStyle?.border || "1px solid #D1D5DB",
      borderRadius: newPasswordInputStyle?.borderRadius || "8px",
      padding: "8px",
      marginBottom: "20px",
      backgroundColor: newPasswordInputStyle?.backgroundColor || "#FFFFFF",
      color: newPasswordInputStyle?.color || "#000000",
      outline: "none",
      boxShadow: focusedInput === "new" ? "0px 0px 0px 3px rgba(59, 130, 246, 0.05)" : "none",
      transition: "box-shadow 0.3s"
    },
    value: newPassword,
    onFocus: () => setFocusedInput("new"),
    onBlur: () => setFocusedInput(null),
    onChange: e => setNewPassword(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "flex justify-end show-password items-center",
    onClick: () => setShowNewPassword(!showNewPassword),
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      marginBottom: 10
    }
  }, showNewPassword ? /*#__PURE__*/React.createElement(AiOutlineEyeInvisible, {
    fontSize: 24,
    fill: "#AFB2BF"
  }) : /*#__PURE__*/React.createElement(AiOutlineEye, {
    fontSize: 24,
    fill: "#AFB2BF"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "90%",
      margin: "auto",
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "confirmPassword",
    style: {
      display: "block",
      fontFamily: "Poppins",
      fontWeight: confirmPasswordTextStyle?.fontWeight || "normal",
      fontSize: confirmPasswordTextStyle?.fontSize || "16px",
      color: confirmPasswordTextStyle?.color || "#4B4B4B",
      marginBottom: "10px"
    }
  }, "Confirm Password"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: showConfirmPassword ? "text" : "password",
    id: "confirmPassword",
    style: {
      flex: 1,
      marginTop: "5px",
      marginLeft: "5px",
      border: confirmPasswordInputStyle?.border || "1px solid #D1D5DB",
      borderRadius: confirmPasswordInputStyle?.borderRadius || "8px",
      padding: "8px",
      marginBottom: "20px",
      backgroundColor: confirmPasswordInputStyle?.backgroundColor || "#FFFFFF",
      color: confirmPasswordInputStyle?.color || "#000000",
      outline: "none",
      boxShadow: focusedInput === "confirm" ? "0px 0px 0px 3px rgba(59, 130, 246, 0.05)" : "none",
      transition: "box-shadow 0.3s"
    },
    value: confirmPassword,
    onFocus: () => setFocusedInput("confirm"),
    onBlur: () => setFocusedInput(null),
    onChange: e => setConfirmPassword(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "flex justify-end show-password items-center",
    onClick: () => setShowConfirmPassword(!showConfirmPassword),
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      marginBottom: 10
    }
  }, showConfirmPassword ? /*#__PURE__*/React.createElement(AiOutlineEyeInvisible, {
    fontSize: 24,
    fill: "#AFB2BF"
  }) : /*#__PURE__*/React.createElement(AiOutlineEye, {
    fontSize: 24,
    fill: "#AFB2BF"
  })))), error && /*#__PURE__*/React.createElement("p", {
    style: {
      color: errorMessageStyle?.color || "red",
      fontSize: errorMessageStyle?.fontSize || "16px",
      fontWeight: errorMessageStyle?.fontWeight || "normal",
      textAlign: "center",
      marginBottom: "10px"
    }
  }, error), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: "40px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: "127px",
      height: "48px",
      borderRadius: cancelButtonStyle?.borderRadius || "16px",
      border: cancelButtonStyle?.border || "1px solid #D0D4CA",
      backgroundColor: cancelButtonStyle?.backgroundColor || "#FFFFFF",
      color: cancelButtonStyle?.color || "#4B4B4B",
      cursor: "pointer",
      padding: "10px 20px",
      marginRight: "10px"
    },
    onClick: onCancel
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    style: {
      width: "127px",
      height: "48px",
      borderRadius: updateButtonStyle?.borderRadius || "16px",
      border: updateButtonStyle?.border || "1px solid #D0D4CA",
      backgroundColor: updateButtonStyle?.backgroundColor || "#D0D4CA",
      color: updateButtonStyle?.color || "#4B4B4B",
      cursor: "pointer",
      padding: "10px 20px",
      marginRight: "10px"
    },
    onClick: handlePasswordChange
  }, "Update"))));
};
export default Modal;