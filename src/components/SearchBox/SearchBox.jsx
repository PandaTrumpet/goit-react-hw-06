import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
export default function SearchBox() {
  const nameInput = useId();
  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor={nameInput}>Find contact</label>
      <input
        type="text"
        name="search"
        id={nameInput}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
