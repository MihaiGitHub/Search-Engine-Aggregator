import React from "react";

const SearchBtn = (props) => {
  return (
    <button onClick={props.searchSubmit} className="btn-search" type="button">
      SEARCH
    </button>
  );
};

export default SearchBtn;
