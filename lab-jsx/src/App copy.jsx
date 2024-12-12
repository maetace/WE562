//import React from 'react';
import React, {useState} from 'react';

function App(props) {
  const [count, setCount] = React.useState(0);
  const [time, setTime] = useState(new Date);

  function greeting() {
    if (time.getHours() < 12) {
      return 'Good morning';
    }
    else if (time.getHours() <= 18) {
      return 'Good afternoon';
    }
    else {
      return 'Good evening';
    }
  }

  function handleClick() {
    console.log((new Date).toLocaleString());
    setCount(count + 1);
  }

  setInterval( ()=>setTime(new Date), 1000);

  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
      <p>{greeting()}, <b>{props.name}</b></p>
      <button onClick={handleClick}>Refresh: {count}</button>
      {/* <button onClick={() => setTime(new Date)}>
        Greeting
      </button> */}
    </div>
  );
}

export default App;