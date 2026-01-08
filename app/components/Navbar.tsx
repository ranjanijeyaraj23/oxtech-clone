import NavbarShell from "./NavbarShell.server";
import dynamic from "next/dynamic";

const NavbarLogic = dynamic(
  () => import("./NavbarLogic.client"),
  { ssr: false }
);

export default function Navbar() {
  return (
    <>
      <NavbarShell />
      <NavbarLogic />
    </>
  );
}
