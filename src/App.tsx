import { useEffect, useState } from "react";
import "./App.css";
import AppRoutes from "./routes";
import LoadingBar from "./components/LoadingBar";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("load", () => {
      setTimeout(() => setIsLoading(false), 500);
    });

    const timer = setTimeout(() => setIsLoading(false), 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingBar isLoading={isLoading} />
      {!isLoading && <AppRoutes />}
    </>
  );
}

export default App;
