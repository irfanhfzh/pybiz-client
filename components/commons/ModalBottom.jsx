import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";

const ModalBottom = ({
  isOpen,
  onClose,
  title,
  description,
  buttonText = "Close",
  children,
}) => {
  const modalRef = useRef(null);

  // untuk menutup modal pada outside modal bottom komponen/parent komponen
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 transition-opacity duration-300" />
      )}

      <div
        className={`bg-background fixed inset-x-0 bottom-0 z-40 transform rounded-t-3xl px-4 pb-4 shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        ref={modalRef}
      >
        <button
          className="ml-auto flex rounded-full pt-4 pb-1"
          onClick={onClose}
        >
          <X className="h-5 w-5 text-slate-500" />
        </button>
        <div className="space-y-2">
          {title && (
            <h2 className="text-center text-lg font-semibold">{title}</h2>
          )}
          {description && (
            <p className="text-center text-sm text-slate-500">{description}</p>
          )}
          {children}
          <div className="flex flex-col gap-2">
            <Button
              variant="default"
              onClick={onClose}
              className="bg-primary w-full"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBottom;
