import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/store";
export default function Contact({ contact }) {
  const dispatch = useDispatch();

  //   console.log(dispatch);
  const deleteContacts = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button onClick={deleteContacts}>Delete</button>
    </>
  );
}
