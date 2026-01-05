import Link from "next/link";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navItems = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/#about" },
	{ label: "Contact", href: "/#contact" },
	{ label: "Projects", href: "/projects" },
] as const;

export function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
			<div className="container flex h-14 items-center justify-between">
				<Link href="/" className="font-semibold">
					Sammie Knoppert
				</Link>

				<NavigationMenu>
					<NavigationMenuList>
						{navItems.map((item) => (
							<NavigationMenuItem key={item.href}>
								<NavigationMenuLink
									asChild
									className={navigationMenuTriggerStyle()}
								>
									<Link href={item.href}>{item.label}</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</header>
	);
}
