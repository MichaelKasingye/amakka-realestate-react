/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import BreadCrumbs from "../Components/BreadCrumbs/BreadCrumbs";
import TitleHeader from "../Components/TitleHeader";

import Product from "../Components/Products/product";
import { ApartmentsSelector } from "../redux/features/Apartments/ApartmentsSlice";
import { SearchTermSelector } from "../redux/features/SearchTerm/searchTermSlice";
import ErrorSection from "../Components/ErrorSection";

export default function Results() {
  const { SearchTerm } = useSelector(SearchTermSelector);
  const { Apartments, loading, hasErrors } = useSelector(ApartmentsSelector);

  const SearchTermLowerCase = SearchTerm.toLowerCase();

  const filteredContent = Apartments.filter((SearchItem) => {
    return (
      SearchItem.location.toLowerCase().includes(SearchTerm) ||
      SearchItem.description.toLowerCase().includes(SearchTerm) ||
      SearchItem.address.toLowerCase().includes(SearchTerm)
    );
  });

  return (
    <main>
      <TitleHeader title="Amakka-Homes-Search Results" />
      <BreadCrumbs page={`Search-${SearchTerm}`} />

      {!SearchTerm ? (
        <h1>Kindly go to the home page and search for location</h1>
      ) : (
        <h1 className="mx-4 text-capitalize">{SearchTerm}</h1>
      )}
      <div className="results-container">
        <div
          className="row mb-2 mt-3 d-flex justify-content-center"
          data-aos="fade-up"
        >
          {filteredContent.length === 0 ? (
            <ErrorSection product={SearchTerm} className="heading" />
          ) : (
            filteredContent.map((info) => (
              <Product
                key={info.id}
                name={info.name}
                address={info.address}
                id={info.id}
                title={info.title}
                price={info.price}
                beds={info.bedrooms}
                baths={info.bathrooms}
                size={info.size}
                imageUrl={info.img_url[0]}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}
