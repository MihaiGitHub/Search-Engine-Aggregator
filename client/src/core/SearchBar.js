import React, { Fragment } from "react";

const SearchBar = (props) => {
  return (
    <Fragment>
      <div className="icon-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
        </svg>
      </div>
      <input
        onChange={props.searchTerm}
        id="search"
        type="text"
        placeholder="What are you looking for?"
      />
    </Fragment>
  );
};

export default SearchBar;
