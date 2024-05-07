import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { RiContactsLine } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
export default function Contact({ contact }) {
  //   const contac = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();
  const handleDelte = () => {
    dispatch(deleteContact(contact.id));
  };
  //   console.log(contac);
  return (
    <div className={css.contactItemContainer}>
      <div>
        <div className={css.nameContainer}>
          <RiContactsLine />
          <p>{contact.name}</p>
        </div>
        <div className={css.numberContainer}>
          <BsFillTelephoneFill />
          <p>{contact.number}</p>
        </div>
        <button onClick={handleDelte}>Delete</button>
      </div>
    </div>
  );
}
