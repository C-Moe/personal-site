import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const idleTimeout = useRef<number | null>(null);

  useEffect(() => {
    const showCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
      }
    };

    const hideCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;

      showCursor();

      if (idleTimeout.current) {
        window.clearTimeout(idleTimeout.current);
      }

      idleTimeout.current = window.setTimeout(hideCursor, 120);
    };

    const animate = () => {
      if (cursorRef.current) {
        current.current.x += (target.current.x - current.current.x) * 0.08;
        current.current.y += (target.current.y - current.current.y) * 0.08;

        cursorRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    hideCursor();
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (idleTimeout.current) {
        window.clearTimeout(idleTimeout.current);
      }
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor;
