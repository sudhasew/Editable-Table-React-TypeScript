import React, { ChangeEvent, FormEvent, Fragment, useState } from "react";
import "./App.css";
import EditableRow from "./components/EditableRow";
import ReadOnlyRow from "./components/ReadOnlyRow";
import { Contact } from "./models/Contact";

function App() {
  const [fName, setFName] = useState<string>("");
  const [addr, setAddr] = useState<string>("");
  const [phNum, setPhNum] = useState<string>("");
  const [emailAddr, setEmailAddr] = useState<string>("");

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(0);
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: 1,
      fullName: "Jenny Chan",
      address: "3 waterfoot road",
      phoneNumber: "333-962-7516",
      email: "jenny.chan@email.com",
    },
    {
      id: 2,
      fullName: "Jessica warren",
      address: "4 tall town",
      phoneNumber: "011-211-7516",
      email: "jessica.warren@email.com",
    },
    {
      id: 3,
      fullName: "Tony Frank",
      address: "11 lesly road",
      phoneNumber: "788-962-7516",
      email: "tony.frank@email.com",
    },
    {
      id: 4,
      fullName: "Jeremy Clark",
      address: "333 miltown manor",
      phoneNumber: "011-962-111",
      email: "jeremy.clark@email.com",
    },
    {
      id: 5,
      fullName: "Raymond Edwards",
      address: "99 blue acres",
      phoneNumber: "3231-962-7516",
      email: "raymon.edwards@email.com",
    },
  ]);

  const handleDeleteClick = (contactId: number) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  function handleAddContact(e: React.FormEvent) {
    e.preventDefault();
    setContacts([
      ...contacts,
      {
        id: Date.now(),
        fullName: fName,
        address: addr,
        phoneNumber: phNum,
        email: emailAddr,
      },
    ]);
    setFName("");
    setAddr("");
    setPhNum("");
    setEmailAddr("");
  }

  const handleEditFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log("i am here", editFormData.fullName);

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);

    console.log("new contacts", newContacts);

    setEditContactId(0);
  };

  const handleEditFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const newFormData = {
      ...editFormData,
      ...{ [event.target.name]: event.target.value },
    };

    setEditFormData(newFormData);
  };

  const handleEditClick = (event: FormEvent, contact: Contact) => {
    event.preventDefault();

    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(0);
  };

  return (
    <div className="App">
      <form onSubmit={(e) => handleEditFormSubmit(e)}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment key={contact.id}>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddContact}>
        <input
          className="input"
          type="text"
          name="fullName"
          required
          placeholder="Enter a name..."
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        />
        <input
          className="input"
          type="text"
          name="address"
          required
          placeholder="Enter an addres..."
          value={addr}
          onChange={(e) => setAddr(e.target.value)}
        />
        <input
          className="input"
          type="text"
          name="phoneNumber"
          required
          placeholder="Enter a phone number..."
          value={phNum}
          onChange={(e) => setPhNum(e.target.value)}
        />
        <input
          className="input"
          type="email"
          name="email"
          required
          placeholder="Enter an email..."
          value={emailAddr}
          onChange={(e) => setEmailAddr(e.target.value)}
        />
        <button onClick={handleAddContact} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
}

export default App;
