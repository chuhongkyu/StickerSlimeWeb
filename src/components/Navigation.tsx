"use client"

import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="flex justify-center space-x-4 mb-5">
            <NavLink href="/" text="Home" active={pathname === '/'} />
            <NavLink href="/privacy" text="Privacy" active={pathname === '/privacy'} />
            <NavLink href="/userDelete" text="User Delete" active={pathname === '/userDelete'} />
        </nav>
    );
}

interface NavLinkProps {
    href: string;
    text: string;
    active: boolean;
}

function NavLink({ href, text, active }: NavLinkProps) {
    return (
        <a href={href} className="relative text-lg font-semibold p-4">
            {text}
            {active && (
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black" />
            )}
        </a>
    );
}
