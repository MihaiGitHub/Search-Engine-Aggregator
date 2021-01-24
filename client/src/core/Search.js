import React from "react";
import SearchBar from "./SearchBar";
import SearchBtn from "./SearchBtn";

const Search = (props) => {
  return (
    <div className="inner-form">
      <div className="input-field first-wrap">
        <SearchBar searchTerm={props.searchTerm} />
      </div>

      {/*   <div className="input-field fouth-wrap">
            <div className="icon-wrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
              </svg>
            </div>
            <select data-trigger="" name="choices-single-defaul">
              <option placeholder="">2 Adults</option>
              <option>3 Adults</option>
              <option>4 Adults</option>
              <option>5 Adults</option>
            </select>
          </div> */}
      <div className="input-field fifth-wrap">
        <SearchBtn searchSubmit={props.searchSubmit} />
      </div>
    </div>
  );
};

export default Search;
