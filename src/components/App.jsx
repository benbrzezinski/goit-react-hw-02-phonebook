import { Component } from 'react';
import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';

class App extends Component {
  state = {
    filter: '',
    contacts: [],
  };

  setFilter = e => {
    const { name, value } = e.currentTarget;
    this.setState(() => ({ [name]: value }));
  };

  setContact = newContact => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  deleteContact = e => {
    const deletedId = e.currentTarget.dataset.id;

    this.setState(({ contacts }) => {
      const filteredContacts = contacts.filter(({ id }) => id !== deletedId);
      return { contacts: filteredContacts };
    });
  };

  render() {
    const { filter, contacts } = this.state;

    return (
      <Section>
        <Form contacts={contacts} setContact={this.setContact} />
        <Contacts
          filter={filter}
          contacts={contacts}
          setFilter={this.setFilter}
          deleteContact={this.deleteContact}
        />
      </Section>
    );
  }
}

export default App;
