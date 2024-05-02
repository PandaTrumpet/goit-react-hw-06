import { useId } from "react";
import { addContact } from "../../redux/store";
import { useDispatch } from "react-redux";
export default function ContactForm() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    // console.log(name, number);
    dispatch(addContact(name, number));
    form.reset();
  };
  const name = useId();
  const number = useId();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={name}>Name</label>
        <input type="text" id={name} name="name" />
        <label htmlFor={number}>Number</label>
        <input type="text" id={number} name="number" />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
}
