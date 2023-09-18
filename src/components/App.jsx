import React from "react";
import Card from "./Card";
import emojix from "/src/emojipedia";

function Details(emojix) {
  return (
    <Card
      key={emojix.id}
      emoji={emojix.emoji}
      name={emojix.name}
      meaning={emojix.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojix.map(Details)}</dl>
    </div>
  );
}

export default App;
