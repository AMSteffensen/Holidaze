import React, {Fragment, useState, useEffect} from "react";

function Search({accomodations}) {
  const [singleSelections, setSingleSelections] = useState([]);
  const [multiSelections, setMultiSelections] = useState([]);

  return (
    <>
      <div className='p-4'>
        <form>
          <input
            className='p-2 rounded-bl-md w-full shadow-lg outline-none'
            placeholder='Search hotels'
          ></input>
        </form>
      </div>
    </>
  );
}

export default Search;
