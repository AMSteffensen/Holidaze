import React, {Fragment, useState, useEffect} from "react";
import {BASE_URL, headers} from "../../constants/api";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Autocomplete from "react-autocomplete";
import {Form} from "react-bootstrap";
import {Typeahead} from "react-bootstrap-typeahead";

function Search() {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);

  const establishmentURL = BASE_URL + "establishments";

  const options = {headers};

  const [singleSelections, setSingleSelections] = useState([]);
  const [multiSelections, setMultiSelections] = useState([]);

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
        <Fragment>
          <Form.Group>
            <Form.Label>Search accommodations</Form.Label>
            <Typeahead
              id='basic-typeahead-single'
              labelKey='name'
              onChange={setSingleSelections}
              options={accommodations}
              placeholder='Choose a state...'
              selected={singleSelections}
              onClick={() => console.log('click!')}
            />
          </Form.Group>
        </Fragment>
      </Container>
    </>
  );
}

export default Search;
