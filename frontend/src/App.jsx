import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Section from "./components/Section";
import "./App.css";
import allCocktails from "./data/allCocktails";

function App() {
  const [userSearch, setUserSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");
  /* const [actvieSearch, setActiveSearch] = useState(false); */
  const [cocktailsList, setCocktailsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userSearch}`;

  function handleChange(e) {
    setUserSearch(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSearchValue(e.target.children[0].value);
    if (e.target.children[0].value === "") {
      /* setActiveSearch(false); */
    } else {
      /* setActiveSearch(true); */
    }
  }

  const fetchApi = () => {
    axios.get(url).then((res) => {
      setCocktailsList(res.data.drinks);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchApi();
  }, [url]);

  return (
    <div className="App">
      <Header
        userSearch={userSearch}
        onSubmit={(e) => handleSubmit(e)}
        onChange={(e) => handleChange(e)}
      />
      {!loading && cocktailsList ? (
        <Section searchValue={searchValue} cocktailsList={allCocktails} />
      ) : (
        <p className="search-not-found">
          {loading ? "Loading cocktails..." : "No matching result"}
        </p>
      )}
    </div>
  );
}

export default App;
