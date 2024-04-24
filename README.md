# react-modify-password

This is a customizable popup interface designed for securely updating passwords in a React application.

![Default Mode](https://github.com/akashadr/react-modify-password/blob/main/assets/DefaultModeXS.png)
![Light Mode](https://github.com/akashadr/react-modify-password/blob/main/assets/LightModeXS.png)
![Dark Mode](https://github.com/akashadr/react-modify-password/blob/main/assets/DarkModeXS.png)

## Installation

```markdown
npm install react-modify-password  # using npm
yarn add react-modify-password     # using yarn
```

## Features

- ✅Configurable via props.
- ✅Stylable via css (or custom components).
- ✅Best Modify/Change Password Modal for JavaScript/React.
- ✅Error Validation for empty password(s) + new and confirm passowrd doesn't match.
- ✅Small bundle size.

## Example Usage

```jsx
import React, { useState } from "react";
import Modal from "react-modify-password";

function MyComponent() {
  const [changePasswordPopup, setChangePasswordPopup] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (currentPassword, newPassword, confirmPassword) => {
    console.log("Current Password:", currentPassword);
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);

    //Implement your logic here!
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
      <button onClick={handleOpenChangePasswordPopup}>Open Modal</button>
      <Modal
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

export default MyComponent;
```

### Props

| Prop                     | Type     | Description                                                                                  | Default Value                          |
|--------------------------|----------|----------------------------------------------------------------------------------------------|----------------------------------------|
| changePasswordPopup      | boolean  | Controls the visibility of the change password popup.                                        | false                                  |
| onPasswordChange         | function | Callback function triggered when the user submits a password change request.                 | -                                      |
| onCancel                 | function | Callback function triggered when the user cancels the password change action.                 | -                                      |
| setChangePasswordPopup   | function | Setter function to update the state controlling the visibility of the change password popup. | -                                      |
| newPassword              | string   | State variable for the new password input field.                                             | ""                                     |
| setNewPassword           | function | Setter function to update the new password state variable.                                    | -                                      |
| confirmPassword          | string   | State variable for the confirm password input field.                                         | ""                                     |
| setConfirmPassword       | function | Setter function to update the confirm password state variable.                                | -                                      |
| currentPassword          | string   | State variable for the current password input field.                                         | ""                                     |
| setCurrentPassword       | function | Setter function to update the current password state variable.                                | -                                      |
| modalStyle               | object   | Custom styles for the modal container.                                                       | Refer to the `styles` object in the code |
| changePasswordTextStyle  | object   | Custom styles for the change password text.                                                   | Refer to the `styles` object in the code |
| currentPasswordTextStyle | object   | Custom styles for the current password text.                                                  | Refer to the `styles` object in the code |
| newPasswordTextStyle    | object   | Custom styles for the new password text.                                                      | Refer to the `styles` object in the code |
| confirmPasswordTextStyle | object   | Custom styles for the confirm password text.                                                  | Refer to the `styles` object in the code |
| currentPasswordInputStyle | object  | Custom styles for the current password input field.                                           | Refer to the `styles` object in the code |
| newPasswordInputStyle    | object  | Custom styles for the new password input field.                                               | Refer to the `styles` object in the code |
| confirmPasswordInputStyle | object | Custom styles for the confirm password input field.                                           | Refer to the `styles` object in the code |
| cancelButtonStyle        | object   | Custom styles for the cancel button.                                                          | Refer to the `styles` object in the code |
| updateButtonStyle        | object   | Custom styles for the update button.                                                          | Refer to the `styles` object in the code |
| errorMessageStyle        | object   | Custom styles for the error message displayed if password validation fails.                   | Refer to the `styles` object in the code |

### Styles

| Style Name              | Default Value         |
|-------------------------|-----------------------|
| modalStyle                   | `{ backgroundColor: "#F0F0F0", borderRadius: "10px" }` |
| changePasswordTextStyle      | `{ fontSize: "20px", fontWeight: "bold", color: "#333333" }` |
| currentPasswordTextStyle    | `{ fontSize: "16px", fontWeight: "normal", color: "#555555" }` |
| newPasswordTextStyle        | `{ fontSize: "16px", fontWeight: "normal", color: "#555555" }` |
| confirmPasswordTextStyle    | `{ fontSize: "16px", fontWeight: "normal", color: "#555555" }` |
| currentPasswordInputStyle   | `{ backgroundColor: "#FFFFFF", color: "#000000", borderRadius: "8px", border: "1px solid #CCCCCC" }` |
| newPasswordInputStyle       | `{ backgroundColor: "#FFFFFF", color: "#000000", borderRadius: "8px", border: "1px solid #CCCCCC" }` |
| confirmPasswordInputStyle   | `{ backgroundColor: "#FFFFFF", color: "#000000", borderRadius: "8px", border: "1px solid #CCCCCC" }` |
| cancelButtonStyle           | `{ backgroundColor: "#DDDDDD", color: "#333333", borderRadius: "12px" }` |
| updateButtonStyle           | `{ backgroundColor: "#007bff", color: "#FFFFFF", borderRadius: "12px" }` |
| errorMessageStyle           | `{ color: "#DDDDDD", fontSize: "14px", fontWeight: "normal" }` |

## Customization 

```jsx
import React, { useState } from "react";
import Modal from "react-modify-password";

const styles = {
  modal: {
    backgroundColor: "#F0F0F0",
    borderRadius: "10px"
  },
  changePasswordText: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333333"
  },
  currentPasswordText: {
    fontSize: "16px",
    fontWeight: "normal",
    color: "#555555"
  },
  newPasswordText: {
    fontSize: "16px",
    fontWeight: "normal",
    color: "#555555"
  },
  confirmPasswordText: {
    fontSize: "16px",
    fontWeight: "normal",
    color: "#555555"
  },
  currentPasswordInput: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    borderRadius: "8px",
    border: "1px solid #CCCCCC"
  },
  newPasswordInput: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    borderRadius: "8px",
    border: "1px solid #CCCCCC"
  },
  confirmPasswordInput: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    borderRadius: "8px",
    border: "1px solid #CCCCCC"
  },
  cancelButton: {
    backgroundColor: "#DDDDDD",
    color: "#333333",
    borderRadius: "12px"
  },
  updateButton: {
    backgroundColor: "#007bff",
    color: "#FFFFFF",
    borderRadius: "12px"
  }
};

function MyComponent() {
  const [changePasswordPopup, setChangePasswordPopup] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (currentPassword, newPassword, confirmPassword) => {
    console.log("Current Password:", currentPassword);
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);

    //Implement your logic here!
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
      <button onClick={handleOpenChangePasswordPopup}>Open Modal</button>
      <Modal
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
          modalStyle={styles.modal}
          changePasswordTextStyle={styles.changePasswordText}
          currentPasswordTextStyle={styles.currentPasswordText}
          newPasswordTextStyle={styles.newPasswordText}
          confirmPasswordTextStyle={styles.confirmPasswordText}
          currentPasswordInputStyle={styles.currentPasswordInput}
          newPasswordInputStyle={styles.newPasswordInput}
          confirmPasswordInputStyle={styles.confirmPasswordInput}
          cancelButtonStyle={styles.cancelButton}
          updateButtonStyle={styles.updateButton}
          errorMessageStyle={styles.errorMessage}
        />
    </div>
  );
}

export default MyComponent;
```

## Dark Mode 

```jsx
import React, { useState } from "react";
import Modal from "react-modify-password";

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

function MyComponent() {
  const [changePasswordPopup, setChangePasswordPopup] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (currentPassword, newPassword, confirmPassword) => {
    console.log("Current Password:", currentPassword);
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);

    //Implement your logic here!
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
      <button onClick={handleOpenChangePasswordPopup}>Open Modal</button>
      <Modal
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
          modalStyle={styles.modal}
          changePasswordTextStyle={styles.changePasswordText}
          currentPasswordTextStyle={styles.currentPasswordText}
          newPasswordTextStyle={styles.newPasswordText}
          confirmPasswordTextStyle={styles.confirmPasswordText}
          currentPasswordInputStyle={styles.currentPasswordInput}
          newPasswordInputStyle={styles.newPasswordInput}
          confirmPasswordInputStyle={styles.confirmPasswordInput}
          cancelButtonStyle={styles.cancelButton}
          updateButtonStyle={styles.updateButton}
          errorMessageStyle={styles.errorMessage}
        />
    </div>
  );
}

export default MyComponent;
```