"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function layout({ children }) {
    const pathname = usePathname();
    return (
        <div>
            <nav className="flex gap-x-2">
                <Link
                    className={` ${pathname === "/dashboards/entreprise" && "underline"}`}
                    href="/dashboards/entreprise">
                    Dashboard finance
                </Link>
                <Link
                    className={` ${pathname === "/dashboards/rh" && "underline"}`}
                    href="/dashboards/rh">
                    Dashboard RH
                </Link>
            </nav>
            {children}
        </div>
    );
}
