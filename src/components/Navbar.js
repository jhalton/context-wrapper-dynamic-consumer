import horoscopesObj from "../data/horoscopes";
import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext.js";

const Navbar = () => {
  const horoscopes = Object.keys(horoscopesObj);
  const { setCurrentSign } = useContext(HoroscopeContext);

  return (
    <nav>
      {horoscopes.map((sign) => (
        <span key={sign} onClick={() => setCurrentSign(sign)}>
          {sign}
          {console.log(`Navbar is rendering`)}
        </span>
      ))}
    </nav>
  );
};

export default Navbar;
