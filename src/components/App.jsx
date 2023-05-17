import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';

const INITIAL_STATE = {
  name: '',
  contacts: [],
};

class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  nameInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;

    const newContact = {
      name: name,
      id: nanoid(),
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  render() {
    const { name, contacts } = this.state;

    return (
      <Section>
        <Form
          name={name}
          nameInputId={this.nameInputId}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Contacts contacts={contacts} />
      </Section>
    );
  }
}

export default App;
