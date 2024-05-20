import React from "react";
import MoviesGrid from "../components/MoviesGrid"
import Search from "../components/Search";
import UseQuery from "../hooks/UseQuery";
import { useDebounce } from "../hooks/useDebounce";

const LandingPage = () => {
  const query = UseQuery();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 300)

  return (
    <div>
      <Search/>
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
};

export default LandingPage;
