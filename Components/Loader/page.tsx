import { useEffect } from "react";
import Typed from "typed.js";

const Loader = () => {
  useEffect(() => {
    const typed = new Typed(".typed", {
      strings: [
        "Loading.",
        "Loading..",
        "Loading...",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="loader">
      <h1 className="typed">Loading</h1>
    </div>
  );
};

export default Loader;
