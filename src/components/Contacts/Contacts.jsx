import PropTypes from 'prop-types';

const Contacts = ({ title, contacts }) => (
  <>
    <h2 className="contactsTitle">{title}</h2>
    {contacts.length > 0 ? (
      <ul className="contacts">
        {contacts.map(({ name, id }) => (
          <li className="contactsItem" key={id}>
            {name}
          </li>
        ))}
      </ul>
    ) : (
      <p className="contactsInfo">There are no contacts</p>
    )}
  </>
);

export default Contacts;
