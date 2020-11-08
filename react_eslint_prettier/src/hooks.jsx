import React, { useState } from "react";
import ReactDOM from "react-dom";

// ❌
const someStuff = () => {
  const [stuff, setStuff] = useState();
  console.log(stuff, setStuff);
};

const ComponentWithHooks = () => {
  // ❌
  if (true) {
    const [ctr, setCtr] = useState(0);
    console.log(ctr, setCtr);
  }

  return <div>what?</div>;
};

// ✅
const Stuff = () => {
  const [stuff1, setStuff1] = useState();
  console.log(stuff1, setStuff1);
};

// ✅
const useStuff = () => {
  const [stuff2, setStuff2] = useState();
  console.log(stuff2, setStuff2);
};

someStuff(); // regular function
useStuff(); // ❌ cannot call hook outside a function
const elements = (
  <div>
    <Stuff />
    <ComponentWithHooks />
  </div>
);
const rootElement = document.getElementById("root");
ReactDOM.render(elements, rootElement);
