import React, {useState, useEffect} from "react";
import {BASE_URL, headers} from "../../constants/api";


// import components
import Search from "../search/Search";
import FeaturedPlace from "./components/FeaturedPlace";
import Questions from "./components/Questions";
import Footer from "./components/Footer"
import PopularPlaces from "./components/PopularPlaces"

const FEATURED_PLACE_INDEX = 1;

function Home() {
  const [accomodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const establishmentURL = BASE_URL + "establishments";
    const options = {headers};
    fetch(establishmentURL, options)
      .then((response) => response.json())
      .then((json) => {
        setAccommodations(json);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const featuredPlace =
    accomodations.length > 0 ? accomodations[FEATURED_PLACE_INDEX] : {};
  console.log("featuredPlace", featuredPlace);

  return (
    <>
      <Search />
      <PopularPlaces places={accomodations} />
      <FeaturedPlace {...featuredPlace} />
      <Questions />
      <Footer />
    </>
  );
}

export default Home;
