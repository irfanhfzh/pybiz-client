"use client";

import Image from "next/image";
import { isMobile } from "react-device-detect";
import {
  Settings,
  HelpCircle,
  ArrowDownToLine,
  ScanLine,
  ArrowUpToLine,
  History,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  Wifi,
  Zap,
  Smartphone,
  ArrowDown,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import BannerWomanImage from "@/public/images/banner-woman.webp";

export default function Income() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="bg-gradient-primary flex flex-col gap-2 rounded-xl p-4 text-white">
        <div className="flex items-center gap-1.5">
          <h2 className="text-sm font-medium">Active Balance</h2>
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
          <span className="text-lg font-semibold">RM 15,222.00</span>
          <Settings className="h-5 w-5" />
        </div>
        <div className="mobile-md:justify-center mobile-md:gap-8 mt-2 flex items-center justify-around">
          <div className="flex flex-col items-center gap-1">
            <div className="w-fit rounded-xl bg-white/20 p-2">
              <ScanLine className="h-5 w-5" />
            </div>
            <p className="text-xs">Scan</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-fit rounded-xl bg-white/20 p-2">
              <ArrowUpToLine className="h-5 w-5" />
            </div>
            <p className="text-xs">Top Up</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-fit rounded-xl bg-white/20 p-2">
              <History className="h-5 w-5" />
            </div>
            <p className="text-xs">History</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-fit rounded-xl bg-white/20 p-2">
              <ArrowDownToLine className="h-5 w-5" />
            </div>
            <p className="text-xs">Withdraw</p>
          </div>
        </div>
      </div>

      <div className="relative h-28 w-full">
        <Image
          src={BannerWomanImage}
          alt="Banner Community"
          className="h-full w-full rounded-xl object-cover object-top"
          priority
        />
        <div className="absolute inset-0 left-10 flex flex-col items-start justify-center text-white">
          <p className="mb-2 font-bold">
            Information <br /> Banner Here
          </p>
          <button className="text-xs font-light text-white">
            Lorem, ipsum dolor sit amet.
          </button>
        </div>
      </div>

      <div className="p-2">
        {/* <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
          <Settings className="h-8 w-8 text-slate-400" />
        </div>
        <p className="text-slate-600">No transactions history yet</p> */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-primary text-left font-semibold">March</p>
            <p className="text-xs text-slate-600">1 Mar - 31 Mar 2025</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-primary rounded-full p-1 text-white">
              <ChevronLeft className="h-5 w-5" />
            </div>
            <div className="bg-primary rounded-full p-1 text-white">
              <ChevronRight className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="mb-4 grid grid-cols-2 gap-2">
            {/* Income Card with Arrow */}
            <div className="relative flex items-center rounded-lg bg-purple-500 px-2 py-4 shadow-sm">
              {/* Arrow down indicator */}
              <div className="absolute -bottom-2.5 left-1/2 h-0 w-0 -translate-x-1/2 transform border-t-[12px] border-r-[12px] border-l-[12px] border-t-purple-500 border-r-transparent border-l-transparent"></div>

              <div className="mr-3 rounded-full bg-green-400 p-2">
                <ArrowDown className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium text-white">Income</div>
                <div className="font-bold whitespace-nowrap text-white">
                  RM 976,000.00
                </div>
              </div>
            </div>

            {/* Outcome Card */}
            <div className="flex items-center rounded-lg border bg-white px-2 py-4">
              <div className="mr-3 rounded-full bg-orange-400 p-2">
                <ArrowUp className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-600">Outcome</div>
                <div className="font-bold whitespace-nowrap text-gray-800">
                  RM 97,600.00
                </div>
              </div>
            </div>
          </div>

          {/* Top Up Card */}
          <div className="mb-2 flex items-start justify-between rounded-lg border bg-white p-4">
            <div className="flex items-center">
              <div className="bg-primary/80 mr-3 rounded-full p-2">
                <ArrowUpToLine className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-600">Top Up</div>
                <div className="font-bold whitespace-nowrap text-gray-800">
                  RM 100,000.00
                </div>
              </div>
            </div>
            <p className="text-xs font-medium text-gray-400">15 Mar 2025</p>
          </div>

          {/* Mobile Prepaid Card */}
          <div className="mb-2 flex items-start justify-between rounded-lg border bg-white p-4">
            <div className="flex items-center">
              <div className="bg-primary/80 mr-3 rounded-full p-2">
                <Smartphone className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-600">
                  Mobile Prepaid
                </div>
                <div className="font-bold whitespace-nowrap text-gray-800">
                  RM 1,000.00
                </div>
              </div>
            </div>
            <p className="text-xs font-medium text-gray-400">8 Mar 2025</p>
          </div>

          {/* Internet Card */}
          <div className="mb-2 flex items-start justify-between rounded-lg border bg-white p-4">
            <div className="flex items-center">
              <div className="bg-primary/80 mr-3 rounded-full p-2">
                <Wifi className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-600">
                  Internet
                </div>
                <div className="font-bold whitespace-nowrap text-gray-800">
                  RM 10,000.00
                </div>
              </div>
            </div>
            <p className="text-xs font-medium text-gray-400">5 Mar 2025</p>
          </div>

          {/* Electricity Card */}
          <div className="mb-2 flex items-start justify-between rounded-lg border bg-white p-4">
            <div className="flex items-center">
              <div className="bg-primary/80 mr-3 rounded-full p-2">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-600">
                  Electricity
                </div>
                <div className="font-bold whitespace-nowrap text-gray-800">
                  RM 5,000.00
                </div>
              </div>
            </div>
            <p className="text-xs font-medium text-gray-400">3 Mar 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
