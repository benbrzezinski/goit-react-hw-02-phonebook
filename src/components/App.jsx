import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';

const INITIAL_STATE = {
  name: '',
  number: '',
  filter: '',
  contacts: [],
};

class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState(() => ({ [name]: value }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      name: '',
      number: '',
      contacts: [...contacts, newContact],
    }));
  };

  render() {
    const { name, number, filter, contacts } = this.state;

    return (
      <Section>
        <Form
          name={name}
          nameInputId={this.nameInputId}
          number={number}
          numberInputId={this.numberInputId}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Contacts
          filter={filter}
          contacts={contacts}
          handleChange={this.handleChange}
        />
      </Section>
    );
  }
}

export default App;
