// import PropTypes from 'prop-types';

const Form = ({ name, nameId, onHandleSubmit, onHandleChange }) => (
  <form className="form" onSubmit={onHandleSubmit}>
    <label className="label" htmlFor={nameId}>
      Name
    </label>
    <input
      className="name"
      type="text"
      name="name"
      value={name}
      id={nameId}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      onChange={onHandleChange}
    />
    <button className="btn" type="submit">
      Add contact
    </button>
  </form>
);

export default Form;
