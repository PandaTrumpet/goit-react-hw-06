import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
export default function ContactList() {
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);

  // console.log(selectContacts);

  return (
    <div>
      <ul className={css.contactList}>
        {selectContacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
          )
          .map((contact) => (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
      </ul>
    </div>
  );
}
