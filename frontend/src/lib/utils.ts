import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date string using the Intl.DateTimeFormat API.
 *
 * @param dateStr - The date string to format (e.g., "2024-01-15")
 * @param opts - Optional Intl.DateTimeFormatOptions to customize the output
 * @returns The formatted date string
 *
 * @example
 * formatDate("2024-01-15") // "January 2024"
 * formatDate("2024-01-15", { year: 'numeric', month: 'short', day: 'numeric' }) // "Jan 15, 2024"
 */
export function formatDate(
  dateStr: string,
  opts?: Intl.DateTimeFormatOptions
): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  const options = opts || defaultOptions;
  return new Date(dateStr).toLocaleDateString("en-US", options);
}
