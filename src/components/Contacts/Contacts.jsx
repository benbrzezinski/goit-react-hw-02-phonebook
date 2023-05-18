import PropTypes from 'prop-types';
import css from './Contacts.module.css';
import Filter from 'components/Filter/Filter';
import ContactsItem from 'components/ContactsItem/ContactsItem';
import Notification from 'components/Notification/Notification';

const Contacts = ({ title = 'Contacts', filter, contacts, setFilter }) => {
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().trim().startsWith(filter.toLowerCase().trim())
  );

  return (
    <>
      <h2 className={css.title}>{title}</h2>
      {contacts.length > 0 ? (
        <>
          <Filter filter={filter} setFilter={setFilter} />
          <ul className={css.contacts}>
            {!filter.trim() ? (
              <ContactsItem contacts={contacts} />
            ) : (
              <ContactsItem contacts={filteredContacts} />
            )}
          </ul>
        </>
      ) : (
        <Notification />
      )}
    </>
  );
};

Contacts.propTypes = {
  title: PropTypes.string,
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Contacts;
