"use client";

import { useEffect, useState } from "react";

/**
 * A custom hook that creates a typing animation effect, cycling through
 * multiple text strings with configurable typing and deleting speeds.
 *
 * @param texts - Array of strings to cycle through
 * @param typingSpeed - Speed in milliseconds for typing each character (default: 100)
 * @param deletingSpeed - Speed in milliseconds for deleting each character (default: 50)
 * @param pauseTime - Pause duration in milliseconds before starting to delete (default: 2000)
 * @returns The current text being displayed in the typing animation
 *
 * @example
 * ```tsx
 * const roles = ["Developer", "Designer", "Engineer"];
 * const typedText = useTypingEffect(roles, 100, 50, 2000);
 * return <span>{typedText}</span>;
 * ```
 */
export function useTypingEffect(
  texts: string[],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000
): string {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let pauseTimeout: NodeJS.Timeout | undefined;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            pauseTimeout = setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => {
      clearTimeout(timeout);
      if (pauseTimeout) clearTimeout(pauseTimeout);
    };
  }, [
    displayText,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return displayText;
}
