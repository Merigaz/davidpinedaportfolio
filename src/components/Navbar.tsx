import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex flex-row gap-4 rounded-full border-2">
        <li className="link-navbar">
          <Link href="/home">Inicio</Link>
        </li>
        <li className="link-navbar">
          <Link href="/projects">Proyectos</Link>
        </li>
        <li className="link-navbar">
          <Link href="/about">Sobre mi</Link>
        </li>
      </ul>
    </nav>
  );
}
