"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Home", sectionId: "home" },
  { label: "About", sectionId: "about" },
  { label: "Contact", sectionId: "contact" },
] as const;

const DISABLE_SMOOTH_SCROLL_ONCE_KEY = "disableSmoothScrollOnce";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { isDark, toggleTheme, mounted } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function scrollToSection(sectionId: string, behavior: ScrollBehavior) {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior, block: "start" });
  }

  function handleSectionNav(sectionId: string) {
    setMobileMenuOpen(false);
    if (pathname === "/") {
      scrollToSection(sectionId, "smooth");
      return;
    }

    sessionStorage.setItem(DISABLE_SMOOTH_SCROLL_ONCE_KEY, "1");
    router.push(`/#${sectionId}`);
  }

  function handleProjectsNav() {
    setMobileMenuOpen(false);
    router.push("/projects");
  }

  function handleLabNav() {
    setMobileMenuOpen(false);
    router.push("/lab");
  }

  useEffect(() => {
    if (sessionStorage.getItem(DISABLE_SMOOTH_SCROLL_ONCE_KEY) === "1") {
      document.documentElement.style.scrollBehavior = "auto";
      sessionStorage.removeItem(DISABLE_SMOOTH_SCROLL_ONCE_KEY);
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = "";
      }, 100);
    }
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo with hover glow */}
        <Link
          href="/"
          className="group relative font-semibold transition-colors hover:text-primary"
        >
          <span className="relative z-10">Sammie Knoppert</span>
          <span className="absolute -inset-2 -z-10 rounded-lg bg-primary/0 transition-all group-hover:bg-primary/5" />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
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
                    className="transition-colors hover:text-primary"
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
                <Link
                  href="/lab"
                  className="transition-colors hover:text-primary"
                >
                  Lab
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link
                  href="/projects"
                  className="transition-colors hover:text-primary"
                >
                  Projects
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side: Theme toggle + Mobile menu */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-card/50 text-foreground backdrop-blur-sm transition-all hover:bg-accent hover:scale-105"
            onClick={toggleTheme}
          >
            <span className="transition-transform duration-300">
              {/* Show consistent icon during SSR, then switch after mount */}
              {!mounted ? (
                <Sun className="h-4 w-4" />
              ) : isDark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </span>
          </button>

          {/* Mobile hamburger menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="outline"
                size="icon"
                className="border-white/10 bg-card/50 backdrop-blur-sm"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 border-white/10 bg-background/95 backdrop-blur-xl"
            >
              <SheetHeader>
                <SheetTitle className="text-left">Navigation</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.sectionId}
                    type="button"
                    onClick={() => handleSectionNav(item.sectionId)}
                    className="flex items-center rounded-lg px-4 py-3 text-left text-lg font-medium transition-colors hover:bg-accent hover:text-primary"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={handleLabNav}
                  className="flex items-center rounded-lg px-4 py-3 text-left text-lg font-medium transition-colors hover:bg-accent hover:text-primary"
                >
                  Lab
                </button>
                <button
                  type="button"
                  onClick={handleProjectsNav}
                  className="flex items-center rounded-lg px-4 py-3 text-left text-lg font-medium transition-colors hover:bg-accent hover:text-primary"
                >
                  Projects
                </button>

                {/* Theme toggle in mobile menu */}
                <div className="mt-4 border-t border-white/10 pt-4">
                  <button
                    onClick={toggleTheme}
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left font-medium transition-colors hover:bg-accent"
                  >
                    <span>Theme</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-muted">
                      {isDark ? (
                        <Sun className="h-4 w-4" />
                      ) : (
                        <Moon className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
