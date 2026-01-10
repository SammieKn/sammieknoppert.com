"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const DISABLE_SMOOTH_SCROLL_ONCE_KEY = "disableSmoothScrollOnce";

export function ScrollManager() {
	const pathname = usePathname();

	useEffect(() => {
		if (pathname !== "/") {
			return;
		}

		const shouldDisableSmooth =
			sessionStorage.getItem(DISABLE_SMOOTH_SCROLL_ONCE_KEY) === "1";

		if (!shouldDisableSmooth) {
			return;
		}

		sessionStorage.removeItem(DISABLE_SMOOTH_SCROLL_ONCE_KEY);

		const html = document.documentElement;
		const previous = html.style.scrollBehavior;

		html.style.scrollBehavior = "auto";

		const hash = window.location.hash;
		if (hash.length > 1) {
			const element = document.getElementById(hash.slice(1));
			element?.scrollIntoView({ behavior: "auto", block: "start" });
		} else {
			window.scrollTo({ top: 0, left: 0, behavior: "auto" });
		}

		requestAnimationFrame(() => {
			html.style.scrollBehavior = previous;
		});
	}, [pathname]);

	return null;
}
