import PropTypes from "prop-types";
import useFetch from "../data/allCocktails";
import "./SearchBar.css";
import loupe from "../assets/loupe.png";

function SearchBar({ userSearch, onSubmit, onChange, placeholder }) {
  const { cocktails } = useFetch();

  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <button type="submit">
        <img src={loupe} alt="search" />
      </button>
      <input
        list="suggestions"
        className="input-search-bar"
        value={userSearch}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
      <datalist id="suggestions">
        {cocktails.map((cocktail) => (
          <option
            key={cocktail.id}
            value={cocktail.name}
            label={cocktail.name}
          />
        ))}
      </datalist>
    </form>
  );
}

SearchBar.propTypes = {
  userSearch: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default SearchBar;
