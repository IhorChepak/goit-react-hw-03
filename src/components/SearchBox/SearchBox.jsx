import s from "./searchbox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <p>Find contact by name</p>
      <input
        type="text"
        className={s.input}
        placeholder="What name do you want to find?"
        value={value}
        onChange={onFilter}
      />
    </div>
  );
};

export default SearchBox;