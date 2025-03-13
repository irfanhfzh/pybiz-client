"use client";

import { useState, useEffect, forwardRef } from "react";
import { useRouter } from "next/navigation";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import InputPhoneNumber from "@/components/ui/origin/InputPhoneNumber";

const FormLogin = forwardRef(({ isPhoneLogin, onSwitchMethodAction }, ref) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setPhoneNumber("");
    setEmail("");
    setIsAgreed(false);
    setError("");
  }, [isPhoneLogin]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    let value = isPhoneLogin ? phoneNumber : email;

    if (isPhoneLogin && value.startsWith("+")) {
      value = value.replace("+", "");
    }

    if (!value) {
      setError(
        isPhoneLogin ? "Please enter phone number" : "Please enter email"
      );
      setIsLoading(false);
      return;
    }

    if (!isAgreed) {
      setError("Please agree to the Terms & Conditions");
      setIsLoading(false);
      return;
    }

    router.replace(
      `/verify-otp?loginMethod=${
        isPhoneLogin ? "WhatsApp" : "Email"
      }&contactInfo=${value}`
    );
  };

  return (
    <div ref={ref} className="space-y-4">
      <p className="mb-4 text-gray-600 text-sm">
        {`OTP code will be sent to your ${isPhoneLogin ? "WhatsApp" : "Email"}`}
      </p>

      <form onSubmit={handleSubmit}>
        {isPhoneLogin ? (
          <InputPhoneNumber
            value={phoneNumber}
            onChangeAction={(value) => setPhoneNumber(value || "")}
          />
        ) : (
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}

        <div className="mt-4 flex items-start gap-2">
          <div className="flex items-center gap-2">
            <Checkbox
              id="terms"
              checked={isAgreed}
              onCheckedChange={(checked) => setIsAgreed(checked)}
            />
            <Label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <a href="#" className="text-primary">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary">
                Privacy Policy
              </a>
            </Label>
          </div>
        </div>

        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

        <Button
          type="submit"
          className={`mt-4 w-full text-base ${
            isAgreed ? "bg-primary text-white" : "bg-gray-200 text-gray-400"
          }`}
          disabled={!isAgreed || isLoading}
        >
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </form>

      <div className="my-6 flex items-center justify-center">
        <div className="flex-1 border-t"></div>
        <span className="px-4 text-gray-500">or</span>
        <div className="flex-1 border-t"></div>
      </div>

      <button
        onClick={onSwitchMethodAction}
        className="flex w-full items-center justify-center gap-2 text-primary"
      >
        {isPhoneLogin ? (
          <Mail className="h-5 w-5" />
        ) : (
          <Phone className="h-5 w-5" />
        )}
        <span>
          {isPhoneLogin ? "Login With Email" : "Login With Phone Number"}
        </span>
      </button>
    </div>
  );
});

FormLogin.displayName = "FormLogin";

export default FormLogin;
