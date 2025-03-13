"use client";

import React, { forwardRef, useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChevronDown, Phone } from "lucide-react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

const COUNTRY_DATA = {
  ID: { name: "Indonesia", dialCode: "62" },
  MY: { name: "Malaysia", dialCode: "60" },
  SG: { name: "Singapore", dialCode: "65" },
};

const ALLOWED_COUNTRIES = ["ID", "MY", "SG"];

function InputPhoneNumber({ value, onChangeAction }) {
  return (
    <div className="space-y-2" dir="ltr">
      <RPNInput.default
        className="flex rounded-lg shadow-sm shadow-black/5"
        international
        defaultCountry="ID"
        flagComponent={FlagComponent}
        countrySelectComponent={CountrySelect}
        inputComponent={PhoneInput}
        countries={ALLOWED_COUNTRIES}
        id="input-46"
        placeholder="812 3456 7890"
        value={value}
        onChange={onChangeAction}
      />
    </div>
  );
}

const PhoneInput = forwardRef(({ className, ...props }, ref) => {
  return (
    <Input
      className={cn(
        "-ms-px h-9 rounded-s-none shadow-none focus-visible:z-10",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});

PhoneInput.displayName = "PhoneInput";

const CountrySelect = ({ value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options.filter(
    (option) => option.value && ALLOWED_COUNTRIES.includes(option.value),
  );

  return (
    <div className="relative flex items-center self-stretch" ref={dropdownRef}>
      <div
        className="border-input bg-background relative flex h-9 w-[72px] items-center justify-center rounded-s-lg border transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <FlagComponent
            country={value}
            countryName={value}
            aria-hidden="true"
          />
          <ChevronDown
            size={14}
            strokeWidth={2}
            className={cn(
              "text-muted-foreground/80 transition-transform duration-200",
              isOpen && "rotate-180",
            )}
            aria-hidden="true"
          />
        </div>

        {isOpen && (
          <div className="border-input bg-background absolute top-full left-0 z-50 mt-1 w-[100px] overflow-hidden rounded-md border shadow-lg">
            {filteredOptions.map((option) => {
              if (!option.value || !COUNTRY_DATA[option.value]) return null;
              return (
                <div
                  key={option.value}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2",
                    value === option.value && "bg-accent/50",
                  )}
                  onClick={(e) => {
                    e.stopPropagation();
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                >
                  <span className="w-5 overflow-hidden rounded-sm">
                    <FlagComponent
                      country={option.value}
                      countryName={option.value}
                    />
                  </span>
                  <span className="text-sm">
                    +{COUNTRY_DATA[option.value]?.dialCode}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const FlagComponent = ({ country, countryName }) => {
  const Flag = flags[country];

  return (
    <span className="w-5 overflow-hidden rounded-sm">
      {Flag ? (
        <Flag title={countryName} />
      ) : (
        <Phone size={16} aria-hidden="true" />
      )}
    </span>
  );
};

export default InputPhoneNumber;
