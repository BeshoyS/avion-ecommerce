import { useState, useEffect } from "react";

export default function useIsMobile(maxSize: number) {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  // Checks if screen size is mobile on load.
  useEffect(() => {
    window.innerWidth <= maxSize ? setIsMobile(true) : setIsMobile(false);
  }, []);

  // Checks for mobile size.
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= maxSize) setIsMobile(true);
      else setIsMobile(false);
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  });
  return isMobile;
}
