import { useEffect } from "react";
import Typed from "typed.js";

const Loader = () => {
  useEffect(() => {
    const typed = new Typed(".typed", {
      strings: ["Loading.", "Loading..", "Loading..."],
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
    <div className="loader bg-clip-text bg-gradient-to-br from-[#FF9800] via-[#FFC107] to-[#FF5722] text-transparent">
      <h1 className="typed">Loading</h1>
    </div>
  );
};

export default Loader;
