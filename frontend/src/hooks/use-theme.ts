"use client";

import { useEffect, useState } from "react";

function getInitialTheme() {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("theme");
    return stored !== "light";
  }
  return true;
}

export function useTheme() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    const html = document.documentElement;
    const stored = localStorage.getItem("theme");
    
    if (stored === "light") {
      html.classList.remove("dark");
    } else {
      html.classList.add("dark");
    }
  }, []);

  function toggleTheme() {
    const html = document.documentElement;
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    if (nextIsDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  return { isDark, toggleTheme };
}
