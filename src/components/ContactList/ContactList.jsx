import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
export default function ContactList() {
  const selectContacts = useSelector((state) => state.contacts.items);

  return (
    <div>
      <ul>
        {selectContacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
