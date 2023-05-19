import PropTypes from 'prop-types';
import css from './ContactsItem.module.css';

const ContactsItem = ({ contacts, deleteContact }) =>
  contacts.map(({ id, name, number }) => (
    <li className={css.item} key={id}>
      <span className={css.icon}></span>
      <p>
        <span className={css.name}>Name: </span>
        {name.length > 30 ? name.slice(0, 25) + '...' : name}
      </p>
      <p>
        <span className={css.tel}>Tel: </span>
        {number}
      </p>
      <button
        className={css.btn}
        type="button"
        data-id={id}
        onClick={deleteContact}
      >
        Delete
      </button>
    </li>
  ));

ContactsItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsItem;
