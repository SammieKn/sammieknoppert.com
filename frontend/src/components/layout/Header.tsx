"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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

export function Header() {
  const pathname = usePathname();
  const router = useRouter();

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
    document.documentElement.style.scrollBehavior = "auto";
    router.push(`/#${sectionId}`);
  }

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
      </div>
    </header>
  );
}
