"use client";

import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HomeContent from "./components/HomeContent";

export default function Page() {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <LoadingScreen onFinish={() => setLoading(false)} />
  ) : (
    <HomeContent />
  );
}
