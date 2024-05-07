import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";
export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const nameContact = form.elements.nameContact.value;
    const numberContact = form.elements.number.value;
    dispatch(addContact(nameContact, numberContact));
    // console.log(nameContact, numberContact);
    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleForm} className={css.mainForm}>
        <div className={css.formContainer}>
          <label htmlFor={nameId}>Name</label>
          <input type="text" id={nameId} name="nameContact" />
        </div>
        <div className={css.formContainer}>
          <label htmlFor={numberId}>Number</label>
          <input type="text" id={numberId} name="number" />
        </div>
        <button type="submit" className={css.btnContact}>
          Addcontact
        </button>
      </form>
    </div>
  );
}
