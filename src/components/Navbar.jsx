import React from "react";
import FindULogo from "./FindULogo";

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 right-0 w-full flex justify-center py-6  z-50">
            <div className="flex items-center justify-between w-full lg:max-w-[690px] border-[1px] border-border dark:border-border-dark bg-surfaceContain dark:bg-surfaceContain-dark rounded-full px-6 py-3">
                {/* Logo */}
                <div className="flex items-center font-bold text-2xl select-none">
                    <FindULogo className="h-[24px]" />
                </div>
                {/* Links */}
                <div className="flex gap-9">
                    <a className="text-secondary dark:text-secondary-dark font-sans font-medium hover:text-black transition" href="https://joinfindu.com/students">Students</a>
                    <a className="text-secondary dark:text-secondary-dark font-sans font-medium hover:text-black transition" href="#">Parents</a>
                    <a className="text-secondary dark:text-secondary-dark font-sans font-medium hover:text-black transition" href="#">Schools</a>
                </div>
                {/* Button */}
                <a href="#" className="px-6 py-3 rounded-full bg-onSurface dark:bg-onSurface-dark text-surface dark:text-surface-dark font-semibold shadow transition text-sm">Join FindU</a>
            </div>
        </nav>
    );
} 