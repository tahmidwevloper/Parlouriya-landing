import { useEffect, useState } from "react";

const useScrollingEffect = () => {
  const [changeHeaderColor, setChangeHeaderColor] = useState(false);
  const handleScrollingEffect = () => {
    if (scrollY > 50) setChangeHeaderColor(true);
    else setChangeHeaderColor(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScrollingEffect);

    return () => {
      document.removeEventListener("scroll", handleScrollingEffect);
    };
  }, [changeHeaderColor]);

  return changeHeaderColor;
};

export default useScrollingEffect;
