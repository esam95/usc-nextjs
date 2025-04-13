"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[9999] bg-[#1d2942] text-white p-4 rounded-lg shadow-xl flex flex-col sm:flex-row items-center gap-4 w-[90%] max-w-md pointer-events-auto"
    >
      <p className="text-sm text-gray-300 text-center sm:text-left">
        Vi använder cookies för att förbättra din upplevelse. Läs vår{" "}
        <a
          href="/villkor"
          className="underline text-[#4f8de6] hover:text-[#76b0ff]"
        >
          Integritetspolicy
        </a>
        .
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleAccept}
          className="bg-[#007bff] text-white px-4 py-2 rounded hover:bg-[#0056b3] transition"
        >
          Acceptera
        </button>
        <button
          onClick={handleDecline}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
        >
          Avböj
        </button>
      </div>
    </div>
  );
}
