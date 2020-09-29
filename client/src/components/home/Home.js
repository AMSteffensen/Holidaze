import React from "react";
import styled from "styled-components";

// import components
import Search from "../search/Search";



const Container = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding: 2em;
`;

function Home() {
    
    return (
    <Container>
        <Search /> 
    </Container>
    )
}

export default Home;



 
