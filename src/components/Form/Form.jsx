import PropTypes from 'prop-types';
import css from './Form.module.css';

const Form = ({
  name,
  nameInputId,
  number,
  numberInputId,
  handleSubmit,
  handleChange,
}) => (
  <form className={css.form} onSubmit={handleSubmit}>
    <label className={css.label} htmlFor={nameInputId}>
      Name
    </label>
    <input
      className={css.input}
      id={nameInputId}
      type="text"
      name="name"
      value={name}
      onChange={handleChange}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
    <label className={css.label} htmlFor={numberInputId}>
      Number
    </label>
    <input
      className={css.input}
      id={numberInputId}
      type="tel"
      name="number"
      value={number}
      onChange={handleChange}
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    />
    <button className={css.btn} type="submit">
      Add contact
    </button>
  </form>
);

Form.propTypes = {
  name: PropTypes.string.isRequired,
  nameInputId: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  numberInputId: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Form;
