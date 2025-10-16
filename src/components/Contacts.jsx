import { useState } from "react";
import styles from "./Contacts.module.css";
import ContactList from "./ContactList";
import inputs from "../constants/input";
function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setContact((contact) => ({ ...contact, [name]: value }));
  };
  function addHandler() {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please enter a valid data! ");
      return;
    }
    setAlert("");
    setContacts((contacts) => [...contacts, contact]);

    console.log(contacts);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  }
  return (
    <div className={styles.container}>
      <div>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}
        <button onClick={addHandler}>Add contact</button>
      </div>
      <div>{alert && <p>{alert}</p>}</div>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default Contacts;
