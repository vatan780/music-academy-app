'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link"

const NavBar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <>
            <div
                className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
            >
                Nav Bar
            </div>
        </>
    )
}

export default NavBar
