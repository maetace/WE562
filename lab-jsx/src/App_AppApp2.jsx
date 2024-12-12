import React from 'react';

const name = 'Maetee';
// let now = new Date;
let now = new Date(2024, 10, 26, 6);

function greeting() {
  if (now.getHours() < 12) {
    return 'Good morning';
  }
  else if (now.getHours() <= 18) {
    return 'Good afternoon';
  }
  else {
    return 'Good evening';
  }
}

function App() {
  const [count, setCount] = React.useState(0);
  
  function handleClick() {
    console.log((new Date).toLocaleString());
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{now.toLocaleTimeString()}</h1>
      <p>{greeting()}, <b>{name}</b></p>
      <button onClick={handleClick}>Refresh: {count}</button>
    </div>
  );
}

function App2() {
  const [count, setCount] = React.useState(0);
  
  function handleClick() {
    console.log((new Date).toLocaleString());
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{now.toLocaleTimeString()}</h1>
      <p>{greeting()}, <b>{name}</b></p>
      <button onClick={handleClick}>Refresh: {count}</button>
    </div>
  );
}

export {App, App2};