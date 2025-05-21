import { useEffect, useState } from "react";

const useModeToggler = () => {
  const [changedMood, setChangedMood] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setChangedMood(savedTheme === "light" ? "dark" : "light");

    localStorage.setItem("theme", changedMood);
    document.body.classList.remove(savedTheme);
    document.body.classList.add(changedMood);
  }, [changedMood]);

  const modeToggler = () => {
    setChangedMood(
      (previousMood) => (previousMood === "light" ? "dark" : "light") // OK! only icon is change 2:00
    );
  };

  return { modeToggler, changedMood };
};

export default useModeToggler;
