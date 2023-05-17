import PropTypes from 'prop-types';
import css from './Contacts.module.css';

const Contacts = ({ title = 'Contacts', contacts }) => (
  <>
    <h2 className={css.contactsTitle}>{title}</h2>
    {contacts.length > 0 ? (
      <ul className={css.contacts}>
        {contacts.map(({ name, id }) => (
          <li className={css.contactsItem} key={id}>
            {name}
          </li>
        ))}
      </ul>
    ) : (
      <p className={css.contactsInfo}>There are no contacts</p>
    )}
  </>
);

Contacts.propTypes = {
  title: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
};

export default Contacts;
