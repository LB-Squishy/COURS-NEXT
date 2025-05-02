"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function () {
    const pathname = usePathname();

    return (
        <nav className="flex gap-x-2">
            <Link className={` ${pathname === "/" && "underline"}`} href="/">
                Accueil
            </Link>
            <Link className={` ${pathname === "/blog" && "underline"}`} href="/blog">
                Blog
            </Link>
            <Link
                className={` ${
                    pathname === "/dashboards" ||
                    pathname === "/dashboards/entreprise" ||
                    pathname === "/dashboards/rh"
                        ? "underline"
                        : ""
                }`}
                href="/dashboards">
                Dashboards
            </Link>
            <Link className={` ${pathname === "/contact" && "underline"}`} href="/contact">
                Contact
            </Link>
        </nav>
    );
}
