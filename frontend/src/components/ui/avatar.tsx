import * as React from "react";
import { cn } from "@/lib/utils";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Avatar({ className, ...props }: AvatarProps) {
	return (
		<div
			className={cn(
				"inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border bg-card text-sm font-medium",
				className,
			)}
			{...props}
		/>
	);
}

export interface AvatarImageProps
	extends React.ImgHTMLAttributes<HTMLImageElement> {}

export function AvatarImage({ className, ...props }: AvatarImageProps) {
	return (
		<img
			className={cn("h-full w-full rounded-full object-cover", className)}
			{...props}
		/>
	);
}

export interface AvatarFallbackProps
	extends React.HTMLAttributes<HTMLSpanElement> {}

export function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
	return (
		<span
			className={cn(
				"flex h-full w-full items-center justify-center rounded-full bg-muted text-foreground/70",
				className,
			)}
			{...props}
		/>
	);
}
