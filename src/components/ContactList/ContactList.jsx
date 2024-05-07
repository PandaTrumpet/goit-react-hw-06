import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
export default function ContactList() {
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectFilter = useSelector((state) => state.filters.name);
  // console.log(selectFilter);

  return (
    <div>
      <ul>
        {selectContacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(selectFilter.toLowerCase())
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
