import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex flex-row gap-4">
        <li>
          <Link href="/home">Inicio</Link>
        </li>
        <li>
          <Link href="/projects">Proyectos</Link>
        </li>
        <li>
          <Link href="/about">Sobre mi</Link>
        </li>
      </ul>
    </nav>
  );
}
