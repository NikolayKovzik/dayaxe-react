import React from "react";
import ServicesList from "../ServicesList";
import SearchForm from "../SearchForm";

function Search() {
  return (
    <article className="search">
      <ServicesList
        services={[
          "All",
          "Day Pass",
          "Cabanas",
          "Daybeds",
          "Spa Passes",
          "Fitness",
          "Events",
        ]}
      />
      <SearchForm />
    </article>
  );
}

export default Search;
