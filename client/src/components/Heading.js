import React from "react";


function Heading(props) {
    console.log(props)


const headingStyle = {
    color: props.color,
    padding: props.padding + "px",
    fontSize: props.fontSize + "px"
}

    return <div className={'FancyBorder FancyBorder-' + props.color}>
        <h1 style={headingStyle}>{props.content}</h1>
    </div>;
}

export default Heading;