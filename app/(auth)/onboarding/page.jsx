"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Check,
  Receipt,
  FileText,
  HeartIcon as UserHeart,
  BookText,
  CirclePercent,
  BadgePercent,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const features = [
  {
    id: "cashier",
    title: "Cashier",
    description: "Simplify transactions and management",
    icon: <Receipt className="h-6 w-6" />,
    iconColor: "text-teal-500",
  },
  {
    id: "bills",
    title: "Bills",
    description: "Send and track bills to customers",
    icon: <FileText className="h-6 w-6" />,
    iconColor: "text-orange-500",
  },
  {
    id: "offers",
    title: "Offers",
    description: "Send and track offers to customers",
    icon: <BadgePercent className="h-6 w-6" />,
    iconColor: "text-blue-500",
  },
  {
    id: "debtBook",
    title: "Debt Book",
    description: "Record and collect customer debts",
    icon: <BookText className="h-6 w-6" />,
    iconColor: "text-lime-600",
  },
];

export default function BusinessSetup() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [contentHeight, setContentHeight] = useState();
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    whatsapp: "",
    email: "",
  });

  useEffect(() => {
    const calculateHeight = () => {
      const height = window.innerHeight - 260;
      setContentHeight(`${height}px`);
    };

    calculateHeight();

    window.addEventListener("resize", calculateHeight);

    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  const toggleFeature = (featureId) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId],
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    return formData.name && formData.businessName && formData.whatsapp;
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      router.push("/");
    }
  };

  return (
    <div className="bg-background flex h-full flex-col justify-between p-6">
      <div>
        <div className="relative mb-4">
          <button
            className="absolute top-1/2 left-0 w-fit -translate-y-1/2 p-0"
            onClick={() => {
              if (step === 1) {
                router.back();
              } else {
                setStep(1);
              }
            }}
          >
            <ArrowLeft className="h-6 w-6" />
          </button>

          <h1 className="w-full text-center text-lg font-semibold">
            {step === 1 ? "Choose Features" : "Business Information"}
          </h1>
        </div>

        <div className="mb-4 flex items-center justify-center gap-2">
          <div className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-full">
            1
          </div>
          <div className="bg-primary h-[2px] w-4" />
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              step === 2
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            2
          </div>
        </div>

        {step == 1 ? (
          <p className="text-muted-foreground text-center">
            Choose the features provided for your business. You can modify them
            later.
          </p>
        ) : (
          <p className="text-muted-foreground text-center">
            Complete your business information!
          </p>
        )}
      </div>

      {step === 1 && (
        <div
          className="my-4 space-y-4 overflow-y-auto"
          style={{ maxHeight: contentHeight }}
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`relative rounded-xl border-2 p-4 transition-colors ${
                selectedFeatures.includes(feature.id)
                  ? "border-primary"
                  : "border-muted"
              }`}
              onClick={() => toggleFeature(feature.id)}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`${feature.iconColor} bg-background rounded-xl p-2`}
                >
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                    selectedFeatures.includes(feature.id)
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted"
                  }`}
                >
                  {selectedFeatures.includes(feature.id) && (
                    <Check className="h-4 w-4" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {step === 2 && (
        <div
          className="my-4 space-y-6 overflow-y-auto"
          style={{ maxHeight: contentHeight }}
        >
          <div className="space-y-2">
            <label className="text-sm">
              Name <span className="text-destructive">*</span>
            </label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm">
              Business Name / Trade Mark{" "}
              <span className="text-destructive">*</span>
            </label>
            <Input
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              placeholder="Example: Your Business"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm">
              Business WhatsApp Number{" "}
              <span className="text-destructive">*</span>
            </label>
            <Input
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              placeholder="Enter business WhatsApp number"
              required
            />
            <p className="text-muted-foreground text-sm">
              This number will be used on transaction documents and all
              information will be sent here.
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm">Business Email</label>
            <Input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter business email"
              type="email"
            />
          </div>
        </div>
      )}

      {step == 1 ? (
        <Button
          className="w-full"
          onClick={() => setStep(2)}
          disabled={selectedFeatures.length === 0}
        >
          Save Feature Selection
        </Button>
      ) : (
        <Button
          className="w-full"
          disabled={!isFormValid()}
          onClick={handleSubmit}
        >
          Save
        </Button>
      )}
    </div>
  );
}
