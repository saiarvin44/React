import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a front end JS framework",
  },
  {
    title: "Why use React?",
    content: "React is a fav JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

export default () => {
  return (
    <div>
      <br />
      <Search />
      <br />
      <Accordion items={items} />
      <br />
      <Translate />
    </div>
  );
};

// some comment
