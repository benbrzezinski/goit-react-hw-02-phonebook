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
  nameId = nanoid();

  state = {
    ...INITIAL_STATE,
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;

    const newContact = {
      name: name,
      id: nanoid(),
    };

    this.setState(state => ({
      contacts: [...state.contacts, newContact],
    }));

    this.reset();
  };

  render() {
    const { name, contacts } = this.state;

    return (
      <Section title={'Phonebook'}>
        <Form
          name={name}
          nameId={this.nameId}
          onHandleSubmit={this.handleSubmit}
          onHandleChange={this.handleChange}
        />
        <Contacts title={'Contacts'} contacts={contacts} />
      </Section>
    );
  }
}

export default App;
