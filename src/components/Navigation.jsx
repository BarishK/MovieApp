"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Categories from "./Categories";

export default function Navigation() {
  const pathname = usePathname();

  const [cateTab, setCateTab] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Favorites", href: "/favorites" },
  ];

  return (
    <nav className="flex items-center gap-6">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={
              isActive
                ? "text-accent border-b-2 border-accent pb-1"
                : "text-foreground pb-1"
            }
          >
            {link.label}
          </Link>
        );
      })}

      <div className="relative">
        <button
          className="hover:cursor-pointer pb-1 text-foreground"
          onClick={() => setCateTab((prev) => !prev)}
        >
          Categories
        </button>

        {cateTab && <Categories onClose={() => setCateTab(false)} />}
      </div>
    </nav>
  );
}
