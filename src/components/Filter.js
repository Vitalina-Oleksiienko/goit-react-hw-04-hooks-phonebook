import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./contacts.module.css";

class Filter extends Component {
  render() {
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
            this.props.handleChange(e);
          }}
        ></input>
      </>
    );
  }
}

export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
