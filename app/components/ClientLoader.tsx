"use client";

import { useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function ClientLoader() {
  const [loading, setLoading] = useState(true);

  if (!loading) return null;

  return <LoadingScreen onFinish={() => setLoading(false)} />;
}
