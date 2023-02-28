import React from "react";
import ServicesList from "../ServicesList";
import SearchForm from "../SearchForm";

function Search() {
  return (
    <article className="search">
      <ServicesList />
      <SearchForm />
    </article>
  );
}

export default Search;
