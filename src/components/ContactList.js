import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./contacts.module.css";

class ContactList extends Component {
  render() {
    return (
      <ul className={style.list}>
        {this.props.contacts.map((el) => (
          <li className={style.listItem} key={el.id}>
            {el.name}: {el.number}
            <button
              type="button"
              className={style.btnDelete}
              id={el.id}
              onClick={this.props.handleDelete}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
