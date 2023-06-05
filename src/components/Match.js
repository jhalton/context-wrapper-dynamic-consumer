import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";
// import { horoscopesObj } from "../data/horoscopes";

const Match = () => {
  const [match, setMatch] = useState(false);
  const { sign } = useContext(HoroscopeContext);
  return (
    <>
      <button
        style={{ backgroundColor: "pink" }}
        onClick={() => setMatch(!match)}
      >
        Match
      </button>
      {match === true ? <div>{sign.match}</div> : null}
    </>
  );
};

export default Match;
