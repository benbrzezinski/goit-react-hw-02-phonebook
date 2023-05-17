import PropTypes from 'prop-types';
import css from './Form.module.css';

const Form = ({ name, nameInputId, handleSubmit, handleChange }) => (
  <form className={css.form} onSubmit={handleSubmit}>
    <label className={css.label} htmlFor={nameInputId}>
      Name
    </label>
    <input
      className={css.name}
      type="text"
      name="name"
      value={name}
      id={nameInputId}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      onChange={handleChange}
    />
    <button className={css.btn} type="submit">
      Add contact
    </button>
  </form>
);

Form.propTypes = {
  name: PropTypes.string.isRequired,
  nameInputId: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Form;
