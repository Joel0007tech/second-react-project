import React from 'react';

const copyright={
    color : "blue",
    textAlign : "center",
    fontFamily : "cursive"
}
const date = new Date();
const Newdate = date.getFullYear()

function Copyright(){
    return(
        <p style={copyright}> All Rights Reserved Joel copyright © {Newdate}</p>
    )
}  

export default Copyright