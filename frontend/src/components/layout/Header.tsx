"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Moon, Sun } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navItems = [
  { label: "Home", sectionId: "home" },
  { label: "About", sectionId: "about" },
  { label: "Contact", sectionId: "contact" },
] as const;

const DISABLE_SMOOTH_SCROLL_ONCE_KEY = "disableSmoothScrollOnce";

function getInitialTheme() {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("theme");
    return stored !== "light";
  }
  return true;
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const html = document.documentElement;
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

  function scrollToSection(sectionId: string, behavior: ScrollBehavior) {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior, block: "start" });
  }

  function handleSectionNav(sectionId: string) {
    if (pathname === "/") {
      scrollToSection(sectionId, "smooth");
      return;
    }

    sessionStorage.setItem(DISABLE_SMOOTH_SCROLL_ONCE_KEY, "1");
    router.push(`/#${sectionId}`);
  }

  useEffect(() => {
    if (sessionStorage.getItem(DISABLE_SMOOTH_SCROLL_ONCE_KEY) === "1") {
      document.documentElement.style.scrollBehavior = "auto";
      sessionStorage.removeItem(DISABLE_SMOOTH_SCROLL_ONCE_KEY);
      // Optionally reset scrollBehavior after navigation
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = "";
      }, 100);
    }
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold">
          Sammie Knoppert
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.sectionId}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <button
                    type="button"
                    onClick={() => handleSectionNav(item.sectionId)}
                  >
                    {item.label}
                  </button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/projects">Projects</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <button
          aria-label="Toggle theme"
          className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-md border bg-card text-foreground hover:bg-accent"
          onClick={toggleTheme}
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </div>
    </header>
  );
}
