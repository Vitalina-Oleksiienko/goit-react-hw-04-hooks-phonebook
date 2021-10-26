import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./contacts.module.css";
import { v4 as uuidv4 } from "uuid";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  inputNameId = uuidv4();
  inputNumberId = uuidv4();

  handleChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <form
          className={style.form}
          onSubmit={(e) => {
            e.preventDefault();
            this.props.handleSubmit(this.state);
            this.setState({
              name: "",
              number: "",
            });
          }}
        >
          <label htmlFor={this.inputNameId}>Name</label>
          <input
            className={style.input}
            id={this.inputNameId}
            value={this.state.name}
            autoComplete="off"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChangeInput}
          />
          <label htmlFor={this.inputNumberId}>Number</label>
          <input
            className={style.input}
            id={this.inputNumberId}
            value={this.state.number}
            autoComplete="off"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleChangeInput}
          />
          <button type="submit" className={style.btn}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default Form;

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
