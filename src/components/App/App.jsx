import React, { Component } from "react";
import uuid from "uuid";
import Contacts from "../Contacts/ContactsList";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Henri Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: ""
  };
  isAlreadyAdded = (contact, contacts) =>
    contacts.find(item =>
      item.name.toLowerCase().includes(contact.name.toLowerCase())
    );
  addContact = contact => {
    const { contacts } = this.state;

    const contactToAdd = {
      ...contact,
      id: uuid()
    };
    !this.isAlreadyAdded(contact, contacts)
      ? this.setState(state => ({
          contacts: [...state.contacts, contactToAdd]
        }))
      : alert(`${contact.name} is already in contacts`);
  };
  buttonDeleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id)
    }));
  };
  filterContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };
  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.filterContacts(contacts, filter);

    return (
      <div>
        <h1>PhoneBook</h1>
        <ContactForm onAddContact={this.addContact} />
        {contacts.length > 0 && (
          <>
            <h2>Contacts</h2>
            {contacts.length >= 2 && (
              <Filter onChangeFilter={this.changeFilter} />
            )}
            <Contacts
              contacts={filteredContacts}
              deleteContacts={this.buttonDeleteContact}
            />
          </>
        )}
      </div>
    );
  }
}
