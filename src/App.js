import React from "react";

export default function App() {
  const people = [
    "List element 1",
    "List element 2",
    "List element 3",
    "List element 4",
    "List element 5",
  ];
  const listItems = people.map((person) => <li>{person}</li>);
  return (
    <>
      <ul>{listItems}</ul>;
    </>
  );
}
