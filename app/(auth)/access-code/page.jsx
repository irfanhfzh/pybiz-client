"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function AccessCodePage() {
  const [pin, setPin] = useState("");
  const [showLogout, setShowLogout] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleNumberClick = (num) => {
    if (pin.length < 6) {
      const newPin = pin + num;
      setPin(newPin);

      if (newPin.length === 6) {
        validatePin(newPin);
      }
    }
  };

  const validatePin = (code) => {
    if (code.length !== 6) {
      setError("Silakan masukkan kode akses lengkap");
      return;
    }

    if (code === "123456") {
      router.push("/");
    } else {
      setError("Kode akses tidak valid");
      setPin("");
    }
  };

  const handleBackspace = () => {
    setPin((prev) => prev.slice(0, -1));
    setError("");
  };

  useEffect(() => {
    if (showLogout) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showLogout]);

  return (
    <div className="bg-primary relative flex h-full flex-col items-center justify-center px-6">
      <div
        className={`flex w-full max-w-sm flex-col items-center justify-between py-6 ${
          showLogout ? "pointer-events-none" : ""
        }`}
      >
        <div className="flex w-full flex-col items-center space-y-8">
          <h1 className="text-primary-foreground text-lg font-medium">
            Enter Access Code
          </h1>

          <div className="flex gap-2">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={`h-3 w-3 rounded-full ${
                    i < pin.length
                      ? "bg-primary-foreground"
                      : "border-primary-foreground border-2"
                  }`}
                />
              ))}
          </div>

          <button
            onClick={() =>
              router.push(
                "/verify-otp?loginMethod=WhatsApp&contactInfo=6289629933096&forgotAccessCode=true",
              )
            }
            className="text-primary-foreground/80 text-sm"
          >
            Forgot Access Code?
          </button>

          <div className="mt-8 grid grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleNumberClick(num)}
                className="text-primary-foreground/80 flex h-12 w-12 items-center justify-center text-3xl font-light"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => handleNumberClick(0)}
              className="text-primary-foreground/80 col-start-2 flex h-12 w-12 items-center justify-center text-3xl font-light"
            >
              0
            </button>
            <button
              onClick={handleBackspace}
              className="text-primary-foreground/80 flex h-12 w-12 items-center justify-center text-lg font-light"
            >
              ⌫
            </button>
          </div>
        </div>

        <button
          onClick={() => setShowLogout(true)}
          className="text-primary-foreground/80 mt-10"
        >
          Sign Out
        </button>
      </div>

      {showLogout && (
        <div className="fixed inset-0 bg-black/50 transition-opacity duration-300" />
      )}

      <div
        className={`bg-background fixed inset-x-0 bottom-0 transform rounded-t-3xl p-6 shadow-lg transition-transform duration-300 ease-in-out ${
          showLogout ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="space-y-4">
          <h2 className="text-center text-lg font-semibold">
            Want to sign out?
          </h2>
          <p className="text-muted-foreground text-center text-sm">
            By signing out, your account will be automatically logged out.
          </p>
          <div className="flex flex-col gap-2">
            <Button
              variant="default"
              onClick={() => setShowLogout(false)}
              className="w-full"
            >
              No, Keep Using Account
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setShowLogout(false);
              }}
              className="w-full"
            >
              Yes, Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
