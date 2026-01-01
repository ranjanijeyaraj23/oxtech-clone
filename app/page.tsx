import LoaderShell from "./components/LoaderShell";
import ClientLoader from "./components/ClientLoader";
import HomeContent from "./components/HomeContent";

export default function Page() {
  return (
    <>
      <LoaderShell />   {/* SSR HTML */}
      <ClientLoader />  {/* Client animation */}
      <HomeContent />   {/* SSR site */}
    </>
  );
}
