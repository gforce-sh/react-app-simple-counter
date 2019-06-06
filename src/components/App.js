import React from "react";
import "../styles/App.css";
import Counter from './Counter.js'

function App() {
  const counters = [
    { id: "123", initialCount: 0 },
    { id: "456", initialCount: -10 },
    { id: "789", initialCount: 9 },
    { id: "101112", initialCount: 2 }
  ];

  const counterItems = counters.map(counter => {
    return <Counter key={counter.id} startCount={counter.initialCount} />;
  });

  return <React.Fragment>{counterItems}</React.Fragment>;
}

export default App;