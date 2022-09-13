import React from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Users",
    path: "/users",
  },
];

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          {navLinks.map((link, index) => {
            return (
              <Link key={index} href={link.path}>
                <li>{link.name}</li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
