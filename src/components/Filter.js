import React from "react";
import PropTypes from "prop-types";
import style from "./contacts.module.css";

 export default function Filter ({handleChange}) {
  return (
      <>
        <label htmlFor="find" className={style.label}>
          Find contacts by name
        </label>
        <input
          className={style.input}
          autoComplete="off"
          id="find"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]"
          onChange={(e) => {
            e.preventDefault();
            handleChange(e);
          }}
        ></input>
      </>
    );
  }

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
