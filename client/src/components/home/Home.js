import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {BASE_URL, headers} from "../../constants/api";

// import components
import Search from "../search/Search";

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2em;
`;

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

  
  return (
    <>
      <Search />
    </>
  );
}

export default Home;
