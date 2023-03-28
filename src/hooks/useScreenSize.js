import { useEffect, useState } from "react";

let isRegisterResizeEvent = false;

export function useScreenSize() {
  const [matchedSize, setMatchedSize] = useState(() => matchScreen());

  const handleResize = (e) => {
    matchScreen();
  };

  const options = { passive: true };

  useEffect(() => {
    if (!isRegisterResizeEvent) {
      window.addEventListener("resize", handleResize, options);
    }
    isRegisterResizeEvent = true;

    return () => {
      window.removeEventListener("resize", handleResize, options);
      isRegisterResizeEvent = false;
    };
  }, []);

  function matchScreen() {
    const mobileMediaQuery = "(max-width: 576px)";
    const tabletMediaQuery = "(max-width: 960px)";

    if (matchMedia(mobileMediaQuery).matches) {
      setTimeout(() => setMatchedSize("mobile"));
      return "mobile";
    }
    if (matchMedia(tabletMediaQuery).matches) {
      setTimeout(() => setMatchedSize("tablet"));
      return "tablet";
    }
    setTimeout(() => setMatchedSize("pc"));
    return "pc";
  }

  return matchedSize;
}
