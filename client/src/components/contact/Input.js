import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    padding: 0.5rem;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 1rem;
    border: 1px solid ${(props) => props.theme.borderColour};
    border-color: ${(props) => props.colour};
    &::placeholder {
        color: ${(props) => props.colour};
    }
`;

function Input(props) {
    console.log(props);
    return <StyledInput placeholder={props.placeholder} colour={props.colour} />;
}

export default Input;