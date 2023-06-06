import React from "react";
import { useSearchParams } from "react-router-dom";

const SearchResult = () => {
    const [search, setSearch] = useSearchParams();
    console.log(search.get("from"));
    /* if (!(from || to || date || adult || children || infant || flightType)) {
      setSearchParams({ from: "" });
      setSearchParams({ to: "" });
      setSearchParams({ date: "" });
      setSearchParams({ adult: "" });
      setSearchParams({ children: "" });
      setSearchParams({ infant: "" });
    } */
  return (
    <div className="my-5">
      <h1>Search Result</h1>
    </div>
  );
};

export default SearchResult;
