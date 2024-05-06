import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchContact } from "../../redux/filtersSlice";
export default function SearchBox() {
  const searchSelector = useSelector((state) => state.filters.name);
  console.log(searchSelector);

  const nameInput = useId();
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor={nameInput}>Find contact</label>
      <input
        type="text"
        name="search"
        id={nameInput}
        onChange={(e) => dispatch(searchContact(e.target.value))}
      />
    </div>
  );
}
