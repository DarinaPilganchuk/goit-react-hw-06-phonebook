import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getContactsFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getContactsFilter).toLowerCase().trim();
  console.log(contacts);

  const visibleContacts = contacts.filter(item => {
    return item.name.toLowerCase().includes(filterValue);
  });
  console.log(visibleContacts);

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactItem name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
};
