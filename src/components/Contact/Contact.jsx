import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
export default function Contact({ contact }) {
  //   const contac = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();
  const handleDelte = () => {
    dispatch(deleteContact(contact.id));
  };
  //   console.log(contac);
  return (
    <div>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button onClick={handleDelte}>Delete</button>
    </div>
  );
}
