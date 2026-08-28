import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: window.innerWidth < 768 ? "instant" : "smooth",
    //   behavior: "instant", // IMPORTANT for mobile
    });
  }, [pathname]);

  return null;
}
