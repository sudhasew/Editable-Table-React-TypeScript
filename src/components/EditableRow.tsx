import React, { ChangeEvent } from "react";

import "./styles.css";

interface Props {
  editFormData: {
    fullName: string;
    address: string;
    phoneNumber: string;
    email: string;
  };
  handleCancelClick: () => void;
  handleEditFormChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const EditableRow = ({
  handleCancelClick,
  editFormData,
  handleEditFormChange,
}: Props) => {
  return (
    <tr>
      <td className={editFormData.fullName ? "changed" : ""}>
        <input
          className="input"
          required
          type="text"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className={editFormData.address ? "changed" : ""}>
        <input
          className="input"
          required
          type="text"
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td className={editFormData.phoneNumber ? "changed" : ""}>
        <input
          className="input"
          required
          type="text"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td className={editFormData.email ? "changed" : ""}>
        <input
          className="input"
          required
          type="email"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
