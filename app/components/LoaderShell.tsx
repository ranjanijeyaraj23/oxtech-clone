"use client";

import LoadingScreen from "./LoadingScreen";

export default function ClientLoader() {
  return (
    <LoadingScreen
      onFinish={() => {
        const shell = document.getElementById("ssr-loader");
        if (shell) shell.remove();
      }}
    />
  );
}
