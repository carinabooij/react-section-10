import { useState, useRef } from "react";

export default function Player() {
const playerName = useRef();

const [enteredPlayerName, setEnteredPlayerName] = useState('');
// const [submitted, setSubmitted] = useState(false);

// function handleChange(ev) {
  // setSubmitted(false);
  // setEnteredPlayerName(ev.target.value)
//}

function handleClick() {
  // setSubmitted(true);
  setEnteredPlayerName(playerName.current.value);
}

  return (
    <section id="player">
      {/* <h2>Welcome {submitted ? enteredPlayerName : 'unknown entity'}</h2>*/}
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        {/*<input ref={playerName} type="text" onChange={handleChange}  value={enteredPlayerName}/>*/}
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
