import LoaderShell from "./components/LoaderShell";
import ClientLoader from "./components/ClientLoader";
import HomeContent from "./components/HomeContent";
import MotionProvider from "./components/MotionProvider";

export default function Page() {
  return (
    <>
      <LoaderShell />          {/* SSR static */}
      
      <MotionProvider>        {/* CLIENT MOTION CONTEXT */}
        <ClientLoader />      {/* Animations WORK */}
      </MotionProvider>

      <HomeContent />         {/* SSR site */}
    </>
  );
}
