import React, {useState, useEffect} from "react";
import {BASE_URL, headers} from "../../constants/api";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Autocomplete from "react-autocomplete";

function Search() {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);

  const establishmentURL = BASE_URL + "establishments";

  const options = {headers};

  useEffect(() => {
    fetch(establishmentURL, options)
      .then((response) => response.json())
      .then((json) => {
        setAccommodations(json);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [options, establishmentURL]);

  if (loading) {
    return <div>...Loading</div>;
  }

  return (
    <>
      <Container>
        <Autocomplete
          items={accommodations}
          shouldItemRender={(accommodations, value) =>
            accommodations.name.toLowerCase().indexOf(value.toLowerCase()) > -1
          }
          getItemValue={(accommodations) => accommodations.name}
          menuStyle={{
            borderRadius: "3px",
            boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
            background: "rgba(255, 255, 255, 0.9)",
            padding: "5px",
            fontSize: "90%",
            position: "fixed",
            overflow: "auto",
            maxHeight: "50%",
            width: "50%",
          }}
          
          renderItem={(accommodations) => (
            <Col md={12} key={accommodations.id}>
              {accommodations.name}
            </Col>
          )}
          value={accommodations.name}
          onChange={(e) => (accommodations.name = e.target.value)}
          onSelect={(id) => (console.log(id)) }
        />
      </Container>
    </>
  );
}

export default Search;
