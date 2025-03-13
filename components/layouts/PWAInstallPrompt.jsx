"use client";

import { useEffect, useState, useRef } from "react";
import { Megaphone } from "lucide-react";
import { Button } from "../ui/button";

const PWAInstallPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const promptRef = useRef(null);

  useEffect(() => {
    const isInstalled = window.matchMedia("(display-mode: standalone)").matches;
    if (isInstalled) {
      setShowPrompt(false);
      return;
    }

    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);

    if (outcome === "accepted") {
      setDeferredPrompt(null);
      setShowPrompt(false);
    }
  };

  if (!showPrompt) return null;

  return (
    <div ref={promptRef} className="z-40 mx-auto">
      <div className="bg-gradient-primary p-2">
        <div className="flex items-center gap-3">
          <Megaphone className="h-6 w-6 text-white" />
          <div className="flex-1">
            <p className="text-xs font-medium text-white">
              Enhance your experience by installing this application
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={handleInstall}
              size="sm"
              variant="secondary"
              className="bg-white text-primary"
            >
              Install
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
