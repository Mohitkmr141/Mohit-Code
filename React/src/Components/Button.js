import React from "react";

export default function Button(props) {
 
  return (
    <>
    <div className="container">
    <h1>{props.title}</h1>
    <li>{props.list}</li>


    <button onClick = {props.onClick}>{props.text}</button>
    
    </div>
    </>
  );
}
// {
//   Create a co6ponent na6ed "Button" that takes two props - "text" and "onClick". The co6ponent should
// display a button element with the gi2en text and call the onClick function when clicked5
// }
