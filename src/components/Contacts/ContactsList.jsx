import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactsList.module.css";
const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <ul className={styles.item}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name} : {number}
          </p>
          <button
            type="button"
            className={styles.button}
            onClick={() => deleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired
};
export default ContactList;
