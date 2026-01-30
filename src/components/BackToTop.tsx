import { useEffect, useRef, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const atBottom = windowHeight + currentScrollY >= docHeight - 2;
      const atTop = currentScrollY <= 2;

      const scrollingUp = currentScrollY < lastScrollY.current;

      if (atBottom || atTop) {
        setVisible(false);
      } else if (scrollingUp && currentScrollY > 300) {
        setVisible(true);
      } else if (!scrollingUp) {
        setVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`btn btn-primary back-to-top ${visible ? "show" : ""}`}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
};

export default BackToTop;
