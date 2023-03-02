import {
  Contact,
  Button,
  ContactCard,
} from 'components/ContactItem/ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContacts(id));

  return (
    <ContactCard>
      <Contact>
        {name}: {number}
      </Contact>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </ContactCard>
  );
};
