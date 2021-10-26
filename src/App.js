import "./App.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./components/contacts.module.css";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const contact = localStorage.getItem("contacts");
    if (contact) {
      return JSON.parse(contact);
    }
    else { return [];}
  });
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (name, number) => {
    if (!contacts.find((el) => el.name === name)) {
      setContacts(prev => [...prev, { name, number, id: uuidv4() }]);
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  const handleChange = (e) => {
    const regExp = new RegExp(`^${e.target.value.toLowerCase()}`);
    setFilter(regExp);
  };

  const handleFilter = () => {
    return contacts.filter((el) => {
      const array = el.name.toLowerCase().split(" ");

      for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase().match(filter) !== null) {
          return true;
        }
      }
      return false;
    });
  };

  const handleDelete = (e) => {
    setContacts(prev => prev.filter((elem) => elem.id !== e.target.id));
  };

  return (
      <div className="App">
        <h1 className={style.title}>Phonebook</h1>
        <Form handleSubmit={handleSubmit} />

        <h2 className={style.title}>Contacts</h2>
        <Filter handleChange={handleChange} />
        <ContactList
          contacts={handleFilter()}
          handleDelete={handleDelete}
        />
      </div>
    );
}

