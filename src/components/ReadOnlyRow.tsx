import React, { FormEvent } from "react";
import { Contact } from "../models/Contact";

interface Props {
  contact: Contact;
  handleEditClick: (e: FormEvent, contact: Contact) => void;
  handleDeleteClick: (id: number) => void;
}

const ReadOnlyRow = ({
  contact,
  handleEditClick,
  handleDeleteClick,
}: Props) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button type="button" onClick={(e) => handleEditClick(e, contact)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
