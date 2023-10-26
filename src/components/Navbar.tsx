import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <ul className="flex flex-row gap-1 rounded-full border-2 p-1">
        <li className="link-navbar">
          <Link href="/">Inicio</Link>
        </li>
        <li className="link-navbar">
          <Link href="/about">Proyectos</Link>
        </li>
        <li className="link-navbar">
          <Link href="/projects">Sobre mi</Link>
        </li>
      </ul>
    </nav>
  );
}
