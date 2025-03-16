"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  ChevronRight,
  CircleUserRound,
  Gift,
  PlusCircle,
  Settings,
  Star,
  Trophy,
} from "lucide-react";
import LogoPYBIZSquare from "@/public/logos/logo-pybiz-square.svg";
import Badge from "@/public/icons/badge.svg";
import Smartphone from "@/public/icons/smartphone.svg";
import Wifi from "@/public/icons/wifi.svg";
import Voucher from "@/public/icons/voucher.svg";
import Electricity from "@/public/icons/electricity.svg";
import Dashboard from "@/public/icons/dashboard.svg";
import BannerImage from "@/public/images/banner.webp";

const digitalProducts = [
  { name: "Mobile Prepaid", icon: Smartphone },
  { name: "Internet", icon: Wifi },
  { name: "Mobile PIN", icon: Voucher },
  { name: "Electricity", icon: Electricity },
  { name: "View All", icon: Dashboard },
];

const news = [
  {
    id: 1,
    title: "Increase your sales with PYBIZ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, velit ullam. Dicta at eligendi, nobis molestiae commodi iusto harum quaerat.",
    image: BannerImage,
  },
  {
    id: 2,
    title: "Increase your sales with PYBIZ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, velit ullam. Dicta at eligendi, nobis molestiae commodi iusto harum quaerat.",
    image: BannerImage,
  },
  {
    id: 3,
    title: "Increase your sales with PYBIZ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, velit ullam. Dicta at eligendi, nobis molestiae commodi iusto harum quaerat.",
    image: BannerImage,
  },
];

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <h1 className="text-primary text-lg font-semibold">
          Let&apos;s Start Transaction!
        </h1>
        <div className="mobile-md:gap-2 flex gap-1">
          <button className="rounded-full p-1">
            <Bell className="mobile-md:h-6 mobile-md:w-6 h-5 w-5" />
          </button>
          <Link href="/profile?from=/" className="rounded-full p-1">
            <CircleUserRound className="mobile-md:h-6 mobile-md:w-6 h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="px-4">
        <div className="border-primary flex items-center rounded-xl border bg-white py-4 pr-4">
          <div className="shrink-0">
            <LogoPYBIZSquare />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium">
              Complete Your Business Profile
            </p>
            <p className="text-xs">
              Your business profile will appear on transaction documents.
            </p>
            <p className="text-primary text-xs font-medium">
              Come on, Complete your{" "}
              <span className="whitespace-nowrap">profile &gt;</span>
            </p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-primary font-semibold">Transaction Features</h2>
          <Settings className="mobile-md:h-6 mobile-md:w-6 h-5 w-5" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="mobile-md:flex-row flex flex-col gap-4">
            {/* Row 1: Cashier (larger) with added content */}
            <div className="mobile-md:w-1/2">
              <div className="bg-gradient-primary flex h-full flex-col rounded-xl p-4 shadow-md">
                <div className="mb-3 flex items-center justify-between text-white">
                  <h3 className="font-medium">Cashier</h3>
                  <ChevronRight className="h-6 w-6 font-medium" />
                </div>

                {/* Added stats summary */}
                <div className="mb-4 text-white">
                  <div className="mb-1 text-xs opacity-80">
                    Today's transactions
                  </div>
                  <div className="text-lg font-semibold">24</div>
                </div>

                {/* Added quick actions */}
                <div className="mb-4 flex gap-2">
                  <div className="flex flex-1 items-center justify-center rounded-xl bg-white/20 p-2">
                    <PlusCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex flex-1 items-center justify-center rounded-xl bg-white/20 p-2">
                    <PlusCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex flex-1 items-center justify-center rounded-xl bg-white/20 p-2">
                    <PlusCircle className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Auto margin untuk mendorong button ke bawah */}
                <div className="mt-auto">
                  <button className="text-primary flex w-full items-center justify-center gap-1 rounded-xl bg-white p-2 text-center text-xs font-medium whitespace-nowrap">
                    <PlusCircle className="h-4 w-4" /> New Transaction
                  </button>
                </div>
              </div>
            </div>

            <div className="mobile-md:w-1/2 flex flex-col justify-between gap-4">
              {/* Bills card - dengan tinggi yang ditetapkan */}
              <div className="bg-gradient-primary flex flex-col gap-4 rounded-xl p-4 shadow-md">
                <div className="flex items-center justify-between text-white">
                  <h3 className="font-medium">Bills</h3>
                  <ChevronRight className="h-6 w-6 font-medium" />
                </div>
                <button className="text-primary flex w-full items-center justify-center gap-1 rounded-xl bg-white p-2 text-center text-xs font-medium">
                  <PlusCircle className="h-4 w-4" /> New Bill
                </button>
              </div>

              {/* Offers card - dengan tinggi yang ditetapkan */}
              <div className="bg-gradient-primary flex flex-col gap-4 rounded-xl p-4 shadow-md">
                <div className="flex items-center justify-between text-white">
                  <h3 className="font-medium">Offers</h3>
                  <ChevronRight className="h-6 w-6 font-medium" />
                </div>
                <button className="text-primary flex w-full items-center justify-center gap-1 rounded-xl bg-white p-2 text-center text-xs font-medium">
                  <PlusCircle className="h-4 w-4" /> New Offer
                </button>
              </div>
            </div>
          </div>

          {/* Row 2: Rewards (full width) */}
          <div className="bg-gradient-primary rounded-xl p-4 shadow-md">
            <div className="mobile-md:flex-row mobile-md:gap-0 mb-6 flex flex-col items-center justify-between gap-2 text-white">
              <h3 className="text-lg font-medium">My Rewards</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm">Achieved</span>
                <div className="text-primary rounded-full bg-white px-3 py-1 text-xs whitespace-nowrap">
                  5/6 Rewards
                </div>
              </div>
            </div>

            {/* Progress Summary */}
            <div className="mb-4 grid grid-cols-3 gap-4 text-white">
              <div className="rounded-xl bg-white/20 p-3 text-center">
                <div className="text-lg font-bold">1,420</div>
                <div className="text-xs opacity-80">Total Points</div>
              </div>

              <div className="rounded-xl bg-white/20 p-3 text-center">
                <div className="text-lg font-bold">Gold</div>
                <div className="text-xs opacity-80">Current Tier</div>
              </div>

              <div className="rounded-xl bg-white/20 p-3 text-center">
                <div className="text-lg font-bold">580</div>
                <div className="text-xs opacity-80">To Next Tier</div>
              </div>
            </div>

            {/* Quick Preview */}
            <div className="mb-6 grid grid-cols-2 gap-2 text-white md:grid-cols-3">
              <div className="flex items-center gap-2 rounded-xl bg-white/20 p-2 transition">
                <Trophy className="h-5 w-5" />
                <span className="text-sm">Elite Shopper</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/20 p-2 transition">
                <Star className="h-5 w-5" />
                <span className="text-sm">1000 Club</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/20 p-2 transition">
                <Gift className="h-5 w-5" />
                <span className="text-sm">Birthday</span>
              </div>
            </div>

            {/* View Details CTA */}
            <button className="text-primary flex w-full items-center justify-center gap-1 rounded-xl bg-white p-2 text-center text-xs font-medium">
              <ArrowRight className="h-4 w-4" />
              View All Reward Details
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-40 w-full px-4 py-2">
        <Image
          src={BannerImage}
          alt="Banner Promo"
          className="h-full w-full rounded-xl object-cover"
          priority
        />
        <div className="absolute inset-0 left-10 flex flex-col items-start justify-center text-white">
          <p className="mb-2 font-medium">
            Promotion
            <br />
            Banner Here
          </p>
          <button className="rounded-xl px-3 py-2 text-xs font-medium text-white outline-1 outline-white">
            Claim Promos
          </button>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-primary mb-4 font-semibold">
          Sell Digital Products Now
        </h2>
        <div>
          <div className="no-scrollbar flex gap-6 overflow-x-auto">
            {digitalProducts.map((product) => {
              const Icon = product.icon;
              return (
                <button
                  key={product.name}
                  className="flex max-w-[64px] flex-col items-center"
                >
                  <div className="mb-2 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-purple-100">
                    <Icon />
                  </div>
                  <span className="text-xs">{product.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-gradient-primary mx-4 my-2 flex items-center gap-2 rounded-xl px-3 py-2 text-white">
        <div className="shrink-0">
          <Badge />
        </div>
        <p className="text-xs">
          Make your customers loyal with rewards for every product you sell
        </p>
      </div>

      <div className="p-4">
        <h2 className="text-primary mb-4 font-semibold">News</h2>
        <div>
          <div className="no-scrollbar flex gap-4 overflow-x-auto">
            {news.map((item) => (
              <div key={item.id} className="min-w-[173px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={173}
                  height={115}
                  className="h-[115px] w-full rounded-xl object-cover object-right"
                  priority
                />
                <div className="mt-3">
                  <h3 className="mb-1 text-sm font-medium">{item.title}</h3>
                  <p className="line-clamp-2 text-xs text-ellipsis text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
