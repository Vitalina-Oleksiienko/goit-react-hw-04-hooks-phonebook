import React from "react";
import PropTypes from "prop-types";
import style from "./contacts.module.css";

export default function ContactList({ contacts, handleDelete }) {
    return (
      <ul className={style.list}>
        {contacts.map((el) => (
          <li className={style.listItem} key={el.id}>
            {el.name}: {el.number}
            <button
              type="button"
              className={style.btnDelete}
              id={el.id}
              onClick={handleDelete}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
