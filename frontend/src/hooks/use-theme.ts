"use client";

import { useEffect, useState } from "react";

export function useTheme() {
  // Start with a consistent value for SSR (dark mode matches the html class="dark")
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const html = document.documentElement;
    const stored = localStorage.getItem("theme");

    if (stored === "light") {
      html.classList.remove("dark");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      setIsDark(true);
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

  return { isDark, toggleTheme, mounted };
}
