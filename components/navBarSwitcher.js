"use client";

import { usePathname } from "next/navigation";
import NavbarHome from "./nav";
import Navbar from "./navProductos";

export default function NavbarSwitcher() {
  const pathname = usePathname();

  if (pathname === "/") {
    return <NavbarHome />;
  }

  return <Navbar />;
}
