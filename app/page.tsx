// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HomeContent from "./components/HomeContent";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800); // loading time

    return () => clearTimeout(timer);
  }, []);

  return loading ? <LoadingScreen /> : <HomeContent />;
}
