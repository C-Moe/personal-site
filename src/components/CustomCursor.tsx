import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
        cursorRef.current.style.transform = `translate3d(${e.clientX - 12}px, ${e.clientY - 12}px, 0)`;
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#474747"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0 L13.5 9 L21 3 L15 10.5 L24 12 L15 13.5 L21 21 L13.5 15 L12 24 L10.5 15 L3 21 L9 13.5 L0 12 L9 10.5 L3 3 L10.5 9 Z" />
      </svg>
    </div>
  );
};

export default CustomCursor;
