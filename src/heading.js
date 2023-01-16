import React from 'react';

const heading ={
    color : "blue",
    textAlign : "center",
    marginTop : "10px",
    fontSize : "30px",
    fontWeight : "900",
    fontFamily : "cursive"
}
const paragraph={
    color : "blue",
    textAlign : "center",
    fontSize : "20px",
    marginTop : "50px",
    fontFamily : "cursive"
}
function Heading(props) {
    return (<div><h3 style={heading}>{props.text}</h3>
    <p style={paragraph}>{props.Firstparagraph}</p>
    <p style={paragraph}>{props.Secondparagraph}</p></div>)
}

export default Heading