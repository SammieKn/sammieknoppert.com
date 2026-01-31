"use client";

import { ChevronDown, ChevronUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CollapsibleCardProps {
  title: string;
  description: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export function CollapsibleCard({
  title,
  description,
  isExpanded,
  onToggle,
  children,
}: CollapsibleCardProps) {
  return (
    <Card className="border-white/10 bg-card/50 backdrop-blur-sm transition-all hover:bg-card/70">
      <CardHeader>
        <CardTitle className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={`space-y-3 overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {children}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          onClick={onToggle}
          className="w-full border-white/10 transition-all hover:border-primary/30 hover:bg-primary/5"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="mr-2 h-4 w-4" />
              Hide {title.toLowerCase()}
            </>
          ) : (
            <>
              <ChevronDown className="mr-2 h-4 w-4" />
              Show {title.toLowerCase()}
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
