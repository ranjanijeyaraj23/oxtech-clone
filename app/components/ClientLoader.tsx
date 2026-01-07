"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function ClientLoader() {
  // Loader lifecycle
  const [showLoader, setShowLoader] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🚀 Delay loader until browser is idle
    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => {
          setShowLoader(true);
        });
      } else {
        setTimeout(() => setShowLoader(true), 200);
      }
    }
  }, []);

  // ✅ Do NOT block first paint
  if (!showLoader || !loading) return null;

  return <LoadingScreen onFinish={() => setLoading(false)} />;
}
