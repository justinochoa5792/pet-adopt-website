import React, { Component } from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Luna" animal="Dog" breed="American Bulldog" />
      <Pet name="Tom" animal="Cat" breed="TomCat" />
      <Pet name="Jerry" animal="Mouse" breed="Mouse" /> */}
      <SearchParams />
    </div>
  );
};
render(React.createElement(App), document.getElementById("root"));

export default App;
