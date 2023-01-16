import React from 'react';
import Heading from './heading';
import Copyright from './copyright';

const styling ={
    display : "flex",
    gap : "10px",
    justifyContent : "center",
}
const button ={
    color : "blue",
    backgroundColor : "white",
    height : "60px",
    width : "60px",
    marginTop : "48px",
    fontSize : "50px",
    border : "3px solid aqua",
    borderRadius : "10px"
}
const text ={
    textAlign : "center",
    color : "blue",
    fontSize : "50px",
    fontFamily : "cursive"
}
function App() {
    const [count, setCount] =React.useState(0)

    function increase() {
        setCount(count+1);
    }
    function decrease() {
        setCount(count-1)
    }
        return(
            <div style={{paddingTop : "2rem",
            paddingBottom : "2rem" ,
            border : "5px solid aqua",
            backgroundColor : "aqua",
            borderRadius : "10px",
             width : "350px", margin : "0 auto",
              marginTop : "50px"}}>
            <Heading 
                text = "Counter App"
                Firstparagraph ="This app increases the number when the (+) is been clicked"
                Secondparagraph = "And also reduces the number when the (-) is been clicked"
            />
               <div style={styling}> 
            <button onClick={decrease} style={button}>-</button>
            <h2 style={text}>{count}</h2>
            <button onClick={increase} style={button}>+</button>
        </div>
        <Copyright/>
            </div>
        
       ) 
}
 
export default App 