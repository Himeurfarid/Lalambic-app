import PropTypes from "prop-types";
import Filters from "./Filters";
import SearchBar from "./SearchBar";
import "./Header.css";
import "./Filters.css";

function Header({
  userSearch,
  onSubmit,
  onChange,
  placeholder,
  setIsSearchActive,
  setCurrentCocktail,
  isLoading,
  filters,
  setValidatedFilters,
}) {
  return (
    <header className="header">
      <div className="logosearchbar">
        <button
          className="logo"
          type="button"
          onClick={() => {
            setCurrentCocktail();
            setIsSearchActive(false);
          }}
        >
          <img
            src="../src/assets/logo-texte.png"
            alt="logo"
            className="logo-header"
          />
        </button>
        <SearchBar
          userSearch={userSearch}
          onSubmit={onSubmit}
          onChange={onChange}
          placeholder={placeholder}
        />
        {!isLoading && (
          <Filters
            filters={filters}
            setValidatedFilters={setValidatedFilters}
          />
        )}
      </div>
    </header>
  );
}
Header.propTypes = {
  userSearch: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  setIsSearchActive: PropTypes.func.isRequired,
  setCurrentCocktail: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  filters: PropTypes.shape({
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
      })
    ),
    ingredients: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
      })
    ),
    alcoholic: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  setValidatedFilters: PropTypes.func.isRequired,
};
export default Header;
