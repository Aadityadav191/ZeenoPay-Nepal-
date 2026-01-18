import { useEffect, useState } from "react";
import AppRouter from "./router/AppRouter";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 2 seconds
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  // 1. Loading Screen
  if (isLoading) {
    return (
      <div className="grid h-screen place-items-center bg-white">
        <div className=" animate-[pulse_2s_infinite] transition-transform duration-[2000ms] scale-105">
          <img
            src="/src/assets/Logo.jpeg"
            alt="Loading..."
            className="w-32 h-auto rounded-lg border-2 border-green-300 shadow-lg"
          />
        </div>
      </div>
    );
  }

  // 2. Main Content
  return (
    <>
      <AppRouter />
    </>
  );
}
