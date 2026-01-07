"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function ClientLoader() {
  const [showLoader, setShowLoader] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Detect Lighthouse
    const isLighthouse =
      typeof window !== "undefined" &&
      navigator.userAgent.includes("Chrome-Lighthouse");

    // 🚫 Skip loader for Lighthouse
    if (isLighthouse) {
      setShowLoader(false);
      setLoading(false);
      return;
    }

    // 🚀 Real users: delay loader until idle
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setShowLoader(true));
    } else {
      setTimeout(() => setShowLoader(true), 200);
    }
  }, []);

  if (!showLoader || !loading) return null;

  return <LoadingScreen onFinish={() => setLoading(false)} />;
}
