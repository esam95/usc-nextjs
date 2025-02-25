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
    <div className="fixed bottom-0 left-0 w-full bg-[#1d2942] text-white p-4 flex flex-col sm:flex-row justify-between items-center shadow-lg">
      <p className="text-sm text-gray-300">
        Vi använder cookies för att förbättra din upplevelse. Läs vår{" "}
        <a href="/villkor" className="underline text-[#4f8de6] hover:text-[#76b0ff]">
          Integritetspolicy
        </a>
        .
      </p>
      <div className="flex gap-4 mt-2 sm:mt-0">
        <button onClick={handleAccept} className="bg-[#007bff] text-white px-4 py-2 rounded hover:bg-[#0056b3]">
          Acceptera
        </button>
        <button onClick={handleDecline} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700">
          Avböj
        </button>
      </div>
    </div>
  );
}
