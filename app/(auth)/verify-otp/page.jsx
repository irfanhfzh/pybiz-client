"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";

export default function OTPPage() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timeLeft, setTimeLeft] = useState(60);
  const [error, setError] = useState("");
  const inputRefs = useRef([]);
  const router = useRouter();

  const searchParams = useSearchParams();
  const loginMethod = searchParams.get("loginMethod");
  const contactInfo = searchParams.get("contactInfo");
  const forgotAccessCode = searchParams.get("forgotAccessCode");

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleChange = (element, index) => {
    if (isNaN(Number(element.value))) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");

    if (otpValue.length !== 6) {
      setError("Please enter complete OTP code");
      return;
    }

    if (otpValue === "123456") {
      router.push("/access-code");
    } else if (forgotAccessCode) {
      router.push("/create-access-code");
    } else {
      router.push("/create-access-code");
    }
  };

  const handleBack = () => {
    if (forgotAccessCode) {
      router.push("/access-code");
    } else {
      router.back();
    }
  };

  return (
    <div className="flex h-full flex-col p-4">
      <button onClick={handleBack} className="relative w-fit">
        <ArrowLeft className="h-6 w-6" />
      </button>

      <div className="-mt-8 flex flex-1 flex-col items-center justify-center px-2">
        <h1 className="mb-3 text-lg font-semibold">Enter OTP Code</h1>
        <p className="text-muted-foreground mb-1 text-center text-sm">
          OTP code has been sent via {loginMethod} to
        </p>
        <p className="text-muted-foreground mb-6 text-center text-sm">
          {loginMethod === "WhatsApp" ? `+${contactInfo}` : contactInfo}
        </p>
        {loginMethod == "Email" && (
          <p className="text-muted-foreground mb-6 text-center text-sm">
            Check spam if the email is not in your inbox.
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6 flex gap-1">
            {otp.map((digit, idx) => (
              <Input
                key={idx}
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={digit}
                ref={(el) => {
                  inputRefs.current[idx] = el;
                }}
                onChange={(e) => handleChange(e.target, idx)}
                onKeyDown={(e) => handleBackspace(e, idx)}
                className="h-10 w-10 [appearance:textfield] border-2 text-center text-base [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            ))}
          </div>

          {error && (
            <p className="mb-4 text-center text-sm text-red-500">{error}</p>
          )}

          <Button type="submit" className="bg-primary w-full">
            Verify OTP
          </Button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-muted-foreground text-sm">
            {"Didn't receive OTP? "}
            {timeLeft > 0 ? (
              <span>
                Resend code in{" "}
                <span className="text-primary font-medium">
                  {formatTime(timeLeft)}
                </span>
              </span>
            ) : (
              <button
                className="text-primary font-medium"
                onClick={() => setTimeLeft(60)}
              >
                Resend OTP
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
