"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HomeContent from "./components/HomeContent";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <LoadingScreen /> : <HomeContent />;
}
