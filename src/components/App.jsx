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
    const { value } = e.currentTarget;
    this.setState(() => ({ filter: value }));
  };

  setContact = newContact => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
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
        />
      </Section>
    );
  }
}

export default App;
