"use client";

import { useState } from "react";
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
  FileText,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import BannerWomanImage from "@/public/images/banner-woman.webp";
import LogoPYBIZWhiteMini from "@/public/logos/logo-pybiz-white-mini.svg";
import Link from "next/link";

export default function Income() {
  const [activeTab, setActiveTab] = useState("income");

  // Data transaksi
  const transactions = [
    {
      id: 1,
      type: "Top Up",
      amount: "RM 1.000.000,00",
      date: "15 Mar",
      icon: ArrowUpToLine,
    },
    {
      id: 2,
      type: "Mobile Prepaid",
      amount: "RM 100.000.000,00",
      date: "8 Mar",
      icon: Smartphone,
    },
    {
      id: 3,
      type: "Internet",
      amount: "RM 1.000.000,00",
      date: "5 Mar",
      icon: Wifi,
    },
    {
      id: 4,
      type: "Electricity",
      amount: "RM 100.000.000,00",
      date: "3 Mar",
      icon: Zap,
    },
  ];

  return (
    <>
      <div className="bg-gradient-primary mb-2 flex flex-col gap-2 rounded-br-xl rounded-bl-xl px-4 py-6 text-white">
        <div className="flex items-center">
          <LogoPYBIZWhiteMini className="mt-2" />
          <div className="flex w-full items-center justify-between">
            <div className="ml-2 flex flex-col">
              <div className="flex items-center gap-1.5">
                <h2 className="text-sm font-medium">Pre Allocation</h2>
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
              <p className="text-lg font-semibold">RM 19.600.000,00</p>
            </div>
            <Link href="/income/transactions/settings">
              <Settings className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="mobile-md:justify-center mobile-md:gap-8 mt-4 flex items-center justify-around">
          <Link
            href="/income/transactions/scan"
            className="flex flex-col items-center gap-1"
          >
            <div className="w-fit rounded-xl bg-white/20 p-2">
              <ScanLine className="h-6 w-6" />
            </div>
            <p className="text-xs">Scan</p>
          </Link>
          <Link
            href="/income/transactions/top-up"
            className="flex flex-col items-center gap-1"
          >
            <div className="w-fit rounded-xl bg-white/20 p-2">
              <ArrowUpToLine className="h-6 w-6" />
            </div>
            <p className="text-xs">Top Up</p>
          </Link>
          <Link
            href="/income/transactions/history"
            className="flex flex-col items-center gap-1"
          >
            <div className="w-fit rounded-xl bg-white/20 p-2">
              <History className="h-6 w-6" />
            </div>
            <p className="text-xs">History</p>
          </Link>
          <Link
            href="/income/transactions/withdraw"
            className="flex flex-col items-center gap-1"
          >
            <div className="w-fit rounded-xl bg-white/20 p-2">
              <ArrowDownToLine className="h-6 w-6" />
            </div>
            <p className="text-xs">Withdraw</p>
          </Link>
        </div>
      </div>

      <div className="mobile-md:p-4 flex flex-col gap-4 p-2">
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

        <Link
          href="/income/reports"
          className="text-primary flex w-full items-center justify-between rounded-xl border p-4"
        >
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <span className="text-sm">View Income Reports</span>
          </div>
          <ChevronRight className="h-6 w-6" />
        </Link>

        <div className="p-2">
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
            <div className="mb-4 flex h-20 w-full items-center gap-2">
              {/* Income Tab - can be active or inactive */}
              <div
                className={`relative flex h-full flex-1 items-center justify-center rounded-lg ${
                  activeTab === "income"
                    ? "bg-primary mobile-md:px-4 px-2 py-4"
                    : "flex-col border bg-white"
                }`}
                onClick={() => setActiveTab("income")}
              >
                {/* Arrow indicator - only show if active */}
                {activeTab === "income" && (
                  <div className="border-t-primary absolute -bottom-2.5 left-1/2 h-0 w-0 -translate-x-1/2 transform border-t-[12px] border-r-[12px] border-l-[12px] border-r-transparent border-l-transparent"></div>
                )}

                <div
                  className={`rounded-full ${activeTab === "income" ? "mr-2" : "mb-1.5"} bg-green-400 p-2`}
                >
                  <ArrowDown className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div
                    className={`text-sm font-medium ${activeTab === "income" ? "text-white" : "text-slate-600"}`}
                  >
                    Income
                  </div>
                  <div
                    className={`font-semibold whitespace-nowrap ${activeTab === "income" ? "text-white" : "text-slate-800"}`}
                  >
                    {activeTab === "income" ? "RM 19.600.000,00" : ""}
                  </div>
                </div>
              </div>

              {/* Outcome Tab - can be active or inactive */}
              <div
                className={`relative flex h-full flex-1 items-center justify-center rounded-lg ${
                  activeTab === "outcome"
                    ? "bg-primary mobile-md:px-4 px-2 py-4"
                    : "flex-col border bg-white"
                }`}
                onClick={() => setActiveTab("outcome")}
              >
                {/* Arrow indicator - only show if active */}
                {activeTab === "outcome" && (
                  <div className="border-t-primary absolute -bottom-2.5 left-1/2 h-0 w-0 -translate-x-1/2 transform border-t-[12px] border-r-[12px] border-l-[12px] border-r-transparent border-l-transparent"></div>
                )}

                <div
                  className={`rounded-full ${activeTab === "outcome" ? "mr-2" : "mb-1.5"} bg-orange-400 p-2`}
                >
                  <ArrowUp className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div
                    className={`text-sm font-medium ${activeTab === "outcome" ? "text-white" : "text-slate-600"}`}
                  >
                    Outcome
                  </div>
                  <div
                    className={`font-semibold whitespace-nowrap ${activeTab === "outcome" ? "text-white" : "text-slate-800"}`}
                  >
                    {activeTab === "outcome" ? "RM 197.600.000,00" : ""}
                  </div>
                </div>
              </div>
            </div>

            {/* Filtered Transactions List based on active tab */}
            {transactions
              .filter((t) => {
                // Filter logic - simple example:
                // Top Up is income, everything else is outcome
                if (activeTab === "income") {
                  return t.type === "Top Up";
                } else {
                  return t.type !== "Top Up";
                }
              })
              .map((transaction) => (
                <div
                  key={transaction.id}
                  className="mb-2 flex items-start justify-between rounded-lg border bg-white p-4"
                >
                  <div className="flex items-center">
                    <div className="bg-primary/80 mr-3 rounded-full p-2">
                      <transaction.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-600">
                        {transaction.type}
                      </div>
                      <div className="font-semibold whitespace-nowrap text-slate-800">
                        {transaction.amount}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400">{transaction.date}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
