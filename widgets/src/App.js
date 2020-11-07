import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
const options = [
  {
    label: "Blue",
    value: "bl",
  },
  {
    label: "Green",
    value: "gr",
  },
  {
    label: "Red",
    value: "re",
  },
];

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
  const [selected, setSelected] = useState(options[[0]]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
