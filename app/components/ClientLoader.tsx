"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function ClientLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // ❌ If loader already shown, never show again
    if (sessionStorage.getItem("loaderShown")) return;

    // Mark loader as shown
    sessionStorage.setItem("loaderShown", "true");

    // Delay loader until idle
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setVisible(true));
    } else {
      setTimeout(() => setVisible(true), 200);
    }
  }, []);

  if (!visible) return null;

  return <LoadingScreen onFinish={() => setVisible(false)} />;
}
