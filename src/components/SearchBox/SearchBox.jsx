import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
export default function SearchBox() {
  const nameInput = useId();
  const dispatch = useDispatch();
  const selectNameFilter = useSelector((state) => state.filters.name);

  return (
    <div className={css.searchContainer}>
      <label htmlFor={nameInput}>Find contact</label>
      <input
        className={css.searchInput}
        type="text"
        name="search"
        id={nameInput}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
