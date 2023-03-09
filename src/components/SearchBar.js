import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  /*   const handleClick = () => {
    onSubmit("cat");
  }; */

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input type="text" onChange={handleChange} value={term} />
      </form>

      {/* <button onClick={handleClick}>Click Me</button> */}
    </div>
  );
}

export default SearchBar;
