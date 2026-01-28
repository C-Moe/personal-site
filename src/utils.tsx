import { useEffect } from "react";

export const sectionHeaderColumnSpacing = "col-12 col-md-4 mb-4 mb-md-0";
export const sectionContentColumnSpacing =
  "col-12 col-md-8 col-lg-6 offset-lg-1";

export const useBodyClassName = (className: string) => {
  useEffect(() => {
    document.body.classList.add(className);
    return () => {
      document.body.classList.remove(className);
    };
  }, [className]);
};
