import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Dropdown from 'rsuite/Dropdown';
import './App.css';
const App = () => {
const [style, setStyle] = useState("cont");

const red = () => {
	setStyle("red");
};
const white = () => {
	setStyle("white");
};
const yellow = () => {
	setStyle("yellow");
};
const green = () => {
	setStyle("green");
};
const blue = () => {
	setStyle("blue");
};
const pink = () => {
	setStyle("pink");
};
const orange = () => {
	setStyle("orange");
};
return (
	<>
	<div className={style}>
  <Dropdown title="Color">
      <Dropdown.Item onClick={white}>White</Dropdown.Item>
      <Dropdown.Item onClick={red}>Red</Dropdown.Item>
      <Dropdown.Item onClick={yellow}>Yellow</Dropdown.Item>
      <Dropdown.Item onClick={green}>Green</Dropdown.Item>
      <Dropdown.Item onClick={blue}>Blue</Dropdown.Item>
      <Dropdown.Item onClick={pink}>pink</Dropdown.Item>
      <Dropdown.Item onClick={orange}>Orange</Dropdown.Item>
  </Dropdown>
  </div>
	</>
  );
};
export default App;
ReactDOM.render(<App/>, document.getElementById('root'));


