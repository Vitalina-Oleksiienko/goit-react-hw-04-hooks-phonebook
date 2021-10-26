import "./App.css";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./components/contacts.module.css";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: [],
  };

  filterStatus = false;

  handleSubmit = ({ name, number }) => {
    if (!this.state.contacts.find((el) => el.name === name)) {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, { name, number, id: uuidv4() }],
      }));
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  handleChange = (e) => {
    const regExp = new RegExp(`^${e.target.value.toLowerCase()}`);
    this.setState({
      filter: regExp,
    });
  };

  handleFilter = () => {
    return this.state.contacts.filter((el) => {
      const array = el.name.toLowerCase().split(" ");

      for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase().match(this.state.filter) !== null) {
          return true;
        }
      }
      return false;
    });
  };

  handleDelete = (e) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((elem) => elem.id !== e.target.id),
    }));
  };

  render() {
    return (
      <div className="App">
        <h1 className={style.title}>Phonebook</h1>
        <Form handleSubmit={this.handleSubmit} name={this.state.name} />

        <h2 className={style.title}>Contacts</h2>
        <Filter handleChange={this.handleChange} />
        <ContactList
          contacts={this.handleFilter()}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
