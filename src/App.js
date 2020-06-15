import React, { Component } from "react";
import { render } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "American Bulldog",
    }),
    React.createElement(Pet, {
      name: "Tom",
      animal: "Cat",
      breed: "House Cat",
    }),
    React.createElement(Pet, {
      name: "Jerry",
      animal: "Mouse",
      breed: "Mouse",
    }),
  ]);
};
render(React.createElement(App), document.getElementById("root"));

export default App;
