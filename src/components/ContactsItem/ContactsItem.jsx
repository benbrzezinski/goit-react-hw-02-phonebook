import PropTypes from 'prop-types';
import css from './ContactsItem.module.css';

const ContactsItem = ({ contacts }) =>
  contacts.map(({ id, name, number }) => (
    <li className={css.contactsItem} key={id}>
      {name}: {number}
    </li>
  ));

ContactsItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
};

export default ContactsItem;
