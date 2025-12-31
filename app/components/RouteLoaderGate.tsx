"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RouteLoaderGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(false);
  }, [pathname]);

  if (!show) return null;
  return <>{children}</>;
}
