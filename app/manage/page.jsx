"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  PlusCircle,
  Share2,
  Download,
  ChevronRight,
  ChartNoAxesCombined,
} from "lucide-react";
import Handshake3D from "@/public/icons/handshake-3d.svg";
import BannerWomanImage from "@/public/images/banner-woman.webp";

export default function Manage() {
  return (
    <>
      <div className="bg-gradient-primary mb-2 flex h-fit w-full flex-col items-start gap-6 rounded-br-xl rounded-bl-xl px-4 py-6 text-white">
        <div className="flex w-full items-center gap-4">
          <Image
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80"
            alt="Profile"
            width={64}
            height={64}
            className="shrink-0 rounded-full border-2 border-white object-cover"
            priority
          />
          <div className="flex w-full flex-col gap-1">
            <h1 className="text-lg leading-6 font-semibold text-white">
              PocketYou Asia Indonesia Malaysia Singapore
            </h1>
            <div className="mobile-md:flex-row mobile-md:items-center mobile-md:gap-0 mt-1 flex flex-col items-start justify-between gap-2">
              <p className="text-sm text-white">
                Retail Store{" "}
                <span className="bg text-primary ml-[2px] rounded-xl bg-white px-2 py-[2px] text-xs font-semibold">
                  Premium
                </span>
              </p>
              <Link
                href="/profile"
                className="text-xs whitespace-nowrap underline"
              >
                View Profile &gt;
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-primary flex w-full flex-col gap-4 rounded-xl p-4">
          <div className="mobile-md:flex-row flex w-full flex-col items-center gap-4">
            <div className="mobile-md:w-fit bg-secondary/25 flex w-full shrink-0 justify-center rounded-xl p-3">
              <Handshake3D />
            </div>
            <div className="space-y-2">
              <h1 className="text-sm font-semibold">
                Share your BIZ Link to your Customer
              </h1>
              <p className="text-xs font-light">
                Customers can scan the QR code or open the Your BIZ link
                directly from their mobile phone.
              </p>
            </div>
          </div>
          <div className="flex w-full items-center justify-evenly gap-2">
            <a
              href="#"
              className="flex items-center gap-2 overflow-hidden rounded-xl bg-white p-2 text-xs text-slate-600"
            >
              <p className="inline-flex truncate whitespace-nowrap">
                https://sites.pybiz.com/kedaimakanmak...
              </p>
              <Share2 className="text-primary h-4 w-4 shrink-0" />
            </a>
            <a
              href="#"
              className="bg-secondary flex items-center gap-2 rounded-xl p-2 text-xs text-white"
            >
              <Download className="h-4 w-4" />
              <p className="whitespace-nowrap">QR BIZ Link</p>
            </a>
          </div>
        </div>
      </div>

      <div className="mobile-md:p-4 p-2">
        <div className="mb-6 space-y-4">
          <div className="mobile-md:flex-row flex flex-col gap-4">
            <div className="bg-gradient-primary mobile-md:w-3/5 flex w-full flex-col justify-center gap-4 rounded-xl p-4 shadow-md">
              <div className="flex items-center justify-between text-white">
                <h3 className="font-medium">Products</h3>
                <ChevronRight className="h-6 w-6 font-medium" />
              </div>
              <button className="text-primary flex w-full items-center justify-center gap-1 rounded-xl bg-white p-2 text-center text-xs font-medium">
                <PlusCircle className="h-4 w-4" /> New Product
              </button>
            </div>

            <div className="bg-gradient-primary mobile-md:w-2/5 flex w-full flex-col justify-center gap-4 rounded-xl p-4 shadow-md">
              <div className="flex items-center justify-between text-white">
                <h3 className="font-medium">Customers</h3>
                <ChevronRight className="h-6 w-6 font-medium" />
              </div>
              <button className="text-primary flex w-full items-center justify-center gap-1 rounded-xl bg-white p-2 text-center text-xs font-medium">
                <PlusCircle className="h-4 w-4" /> New Customer
              </button>
            </div>
          </div>

          <div className="mobile-md:flex-row flex flex-col gap-4">
            <div className="mobile-md:w-2/5 bg-gradient-primary flex w-full flex-col justify-center gap-4 rounded-xl p-4 shadow-md">
              <div className="flex items-center justify-between text-white">
                <h3 className="font-medium">Outlets</h3>
                <ChevronRight className="h-6 w-6 font-medium" />
              </div>
              <button className="text-primary flex w-full items-center justify-center gap-1 rounded-xl bg-white p-2 text-center text-xs font-medium">
                <PlusCircle className="h-4 w-4" /> New Outlet
              </button>
            </div>

            <div className="mobile-md:w-3/5 bg-gradient-primary flex w-full flex-col justify-center gap-4 rounded-xl p-4 shadow-md">
              <div className="flex items-center justify-between text-white">
                <h3 className="font-medium">Purchase Amount</h3>
                <ChevronRight className="h-6 w-6 font-medium" />
              </div>
              <button className="text-primary flex w-full items-center justify-center gap-1 rounded-xl bg-white p-2 text-center text-xs font-medium">
                <PlusCircle className="h-4 w-4" /> New Amount
              </button>
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
              Let's Check Out <br /> the Community
            </p>
            <button className="text-xs font-light text-white">
              Grow by selling in the community
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
