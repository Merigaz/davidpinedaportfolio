"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentRoute = usePathname();
  return (
    <nav >
      <ul className="flex flex-row gap-3 rounded-full border-2">
        <li className={currentRoute === "/" ? "active-link-navbar": "link-navbar"}>
          <Link href="/">Inicio</Link>
        </li>
        <li className={currentRoute === "/about" ? "active-link-navbar" : "link-navbar"}>
          <Link href="/about">Proyectos</Link>
        </li>
        <li className={currentRoute === "/projects" ? "active-link-navbar" : "link-navbar"}>
          <Link href="/projects">Sobre mi</Link>
        </li>
      </ul>
    </nav>
  );
}
