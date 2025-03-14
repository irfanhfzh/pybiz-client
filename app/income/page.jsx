"use client";

import { Settings, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { isMobile } from "react-device-detect";
import { Button } from "@/components/ui/button";

export default function Income() {
  return (
    <div className="p-4">
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <h2 className="text-lg font-medium">Active Balance</h2>
          <TooltipProvider>
            <Tooltip isMobile={isMobile}>
              <TooltipTrigger>
                <HelpCircle className="h-4 w-4" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Balance that can be withdrawn to your bank account</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Rp 15.222.810</span>
          <Settings className="h-5 w-5" />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 font-medium">Would you like to withdraw funds?</h3>
        <p className="mb-4 text-sm text-gray-600">
          Please verify your account to enable top-up and withdrawal features.
        </p>
        <Button
          variant="outline"
          className="border-primary text-primary w-full p-6 text-base"
        >
          Verify Account
        </Button>
      </div>

      <div className="rounded-xl border p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
          <Settings className="h-8 w-8 text-gray-400" />
        </div>
        <p className="text-gray-600">No transactions history yet</p>
      </div>
    </div>
  );
}
