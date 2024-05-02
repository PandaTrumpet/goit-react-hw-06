import { useId } from "react";
import { searchContact } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
export default function SearchBox() {
  const searchName = useSelector((state) => state.filters.name);
  // console.log(searchName);
  const dispatch = useDispatch();
  const input = useId();
  const handleChange = (e) => {
    const text = e.target.value;
    dispatch(searchContact(text));
    console.log(text);
  };
  return (
    <>
      <label htmlFor={input}>Find contact by name</label>
      <input
        // value={searchName}
        id={input}
        name="search"
        type="text"
        onChange={handleChange}
      />
    </>
  );
}
