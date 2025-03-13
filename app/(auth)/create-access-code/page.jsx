"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CreateAccessCodePage() {
  const [isConfirmStep, setIsConfirmStep] = useState(false);
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState("");
  const [contentHeight, setContentHeight] = useState();
  const router = useRouter();

  const currentPin = isConfirmStep ? confirmPin : newPin;
  const setCurrentPin = isConfirmStep ? setConfirmPin : setNewPin;

  useEffect(() => {
    const calculateHeight = () => {
      const height = window.innerHeight - 232;
      setContentHeight(`${height}px`);
    };

    calculateHeight();

    window.addEventListener("resize", calculateHeight);

    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  const handleNumberClick = (num) => {
    if (currentPin.length < 6) {
      setCurrentPin((prev) => prev + num);
    }
  };

  const handleBackspace = () => {
    setCurrentPin((prev) => prev.slice(0, -1));
  };

  const handleContinue = () => {
    if (!isConfirmStep) {
      if (newPin.length === 6) {
        setIsConfirmStep(true);
      }
    } else {
      if (newPin.length !== 6 || confirmPin.length !== 6) {
        setError("Silakan masukkan kode akses lengkap");
        return;
      }

      if (confirmPin !== newPin) {
        setError("Kode akses tidak cocok");
        setConfirmPin("");
        return;
      }

      try {
        router.push("/onboarding");
      } catch (error) {
        setError("Terjadi kesalahan saat menyimpan kode akses");
      }
    }
  };

  return (
    <div className="h-full bg-background p-6">
      <div className="flex h-full w-full max-w-sm flex-col justify-between">
        <div className="flex flex-col items-center gap-6">
          <div className="flex w-full items-center justify-between">
            <button
              className="w-fit p-0"
              onClick={() => {
                if (isConfirmStep) {
                  setIsConfirmStep(false);
                  setConfirmPin("");
                  setError("");
                } else {
                  router.back();
                }
              }}
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h2 className="flex-1 text-center text-lg font-medium">
              {isConfirmStep
                ? "Re-enter Access Code"
                : "Create New Access Code"}
            </h2>
            <div className="w-6" />
          </div>

          <div className="flex gap-2">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={`flex h-4 w-4 items-center justify-center rounded-full ${
                    currentPin[i]
                      ? showPin
                        ? "bg-background text-primary"
                        : "bg-primary"
                      : "border-2 border-primary"
                  }`}
                >
                  {currentPin[i] && showPin && (
                    <span className="font-normal">{currentPin[i]}</span>
                  )}
                </div>
              ))}
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <button
            onClick={() => setShowPin(!showPin)}
            className="flex items-center gap-2 text-primary"
          >
            {showPin ? (
              <>
                <EyeOff className="h-5 w-5" />
                <span>Hide Code</span>
              </>
            ) : (
              <>
                <Eye className="h-5 w-5" />
                <span>Show Code</span>
              </>
            )}
          </button>
        </div>

        <div
          className="my-4 flex w-full flex-col items-center space-y-4 overflow-y-auto"
          style={{ maxHeight: contentHeight }}
        >
          <div className="grid grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleNumberClick(num)}
                className="flex h-12 w-12 items-center justify-center text-3xl font-light"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => handleNumberClick(0)}
              className="col-start-2 flex h-12 w-12 items-center justify-center text-3xl font-light"
            >
              0
            </button>
            <button
              onClick={handleBackspace}
              className="flex h-12 w-12 items-center justify-center text-2xl font-light"
            >
              ⌫
            </button>
          </div>
        </div>

        <Button
          onClick={handleContinue}
          className="w-full"
          disabled={currentPin.length !== 6}
        >
          {isConfirmStep ? "Confirm Access Code" : "Continue"}
        </Button>
      </div>
    </div>
  );
}
