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
        <div className="flex gap-2">
          <button className="rounded-full p-1">
            <Bell className="h-6 w-6" />
          </button>
          <Link href="/profile?from=/" className="rounded-full p-1">
            <CircleUserRound className="h-6 w-6" />
          </Link>
        </div>
      </div>

      <div className="px-4">
        <div className="border-primary flex items-center rounded-lg border bg-white py-4 pr-4">
          <div className="flex-shrink-0">
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
          <Settings className="h-6 w-6" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            {/* Row 1: Cashier (larger) with added content */}
            <div className="w-1/2">
              <div className="bg-gradient-primary flex h-full flex-col rounded-lg p-4 shadow-md">
                <div className="mb-3 flex items-center justify-between text-white">
                  <h3 className="font-medium">Cashier</h3>
                  <ChevronRight className="h-6 w-6 font-medium" />
                </div>

                {/* Added stats summary */}
                <div className="mb-6 text-white">
                  <div className="mb-1 text-xs opacity-80">
                    Today's transactions
                  </div>
                  <div className="text-2xl font-semibold">24</div>
                </div>

                {/* Added quick actions */}
                <div className="mb-6 flex gap-2">
                  <div className="flex flex-1 items-center justify-center rounded-md bg-white/20 p-2">
                    <PlusCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex flex-1 items-center justify-center rounded-md bg-white/20 p-2">
                    <PlusCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex flex-1 items-center justify-center rounded-md bg-white/20 p-2">
                    <PlusCircle className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Auto margin untuk mendorong button ke bawah */}
                <div className="mt-auto">
                  <button className="text-primary flex w-full items-center justify-center gap-1 rounded-lg bg-white p-2 text-center text-xs font-medium">
                    <PlusCircle className="h-4 w-4" /> New Transaction
                  </button>
                </div>
              </div>
            </div>

            <div className="flex w-1/2 flex-col gap-4">
              {/* Bills card - dengan tinggi yang ditetapkan */}
              <div className="bg-gradient-primary flex-1 rounded-lg p-4 shadow-md">
                <div className="mb-3 flex items-center justify-between text-white">
                  <h3 className="font-medium">Bills</h3>
                  <ChevronRight className="h-6 w-6 font-medium" />
                </div>
                <button className="text-primary flex w-full items-center justify-center gap-1 rounded-lg bg-white p-2 text-center text-xs font-medium">
                  <PlusCircle className="h-4 w-4" /> New Bill
                </button>
              </div>

              {/* Offers card - dengan tinggi yang ditetapkan */}
              <div className="bg-gradient-primary flex-1 rounded-lg p-4 shadow-md">
                <div className="mb-3 flex items-center justify-between text-white">
                  <h3 className="font-medium">Offers</h3>
                  <ChevronRight className="h-6 w-6 font-medium" />
                </div>
                <button className="text-primary flex w-full items-center justify-center gap-1 rounded-lg bg-white p-2 text-center text-xs font-medium">
                  <PlusCircle className="h-4 w-4" /> New Offer
                </button>
              </div>
            </div>
          </div>

          {/* Row 2: Rewards (full width) */}
          <div className="bg-gradient-primary rounded-lg p-4 shadow-md">
            <div className="mb-4 flex items-center justify-between text-white">
              <h3 className="text-lg font-medium">My Rewards</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm opacity-80">Achieved</span>
                <div className="rounded-full bg-white/20 px-3 py-1">
                  5/6 Rewards
                </div>
              </div>
            </div>

            {/* Progress Summary */}
            <div className="mb-6 grid grid-cols-3 gap-4">
              <div className="rounded-lg bg-white/10 p-3 text-center">
                <div className="text-2xl font-bold text-yellow-400">1,420</div>
                <div className="text-xs text-white opacity-80">
                  Total Points
                </div>
              </div>

              <div className="rounded-lg bg-white/10 p-3 text-center">
                <div className="text-2xl font-bold text-blue-400">Gold</div>
                <div className="text-xs text-white opacity-80">
                  Current Tier
                </div>
              </div>

              <div className="rounded-lg bg-white/10 p-3 text-center">
                <div className="text-2xl font-bold text-green-400">580</div>
                <div className="text-xs text-white opacity-80">
                  To Next Tier
                </div>
              </div>
            </div>

            {/* Quick Preview */}
            <div className="mb-6 grid grid-cols-2 gap-2 md:grid-cols-3">
              <div className="flex items-center gap-2 rounded-md bg-white/10 p-2 transition">
                <Trophy className="h-5 w-5 text-yellow-400" />
                <span className="text-sm text-white">Elite Shopper</span>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-white/10 p-2 transition">
                <Star className="h-5 w-5 text-blue-400" />
                <span className="text-sm text-white">1000 Club</span>
              </div>
              <div className="flex items-center gap-2 rounded-md bg-white/10 p-2 transition">
                <Gift className="h-5 w-5 text-green-400" />
                <span className="text-sm text-white">Birthday</span>
              </div>
            </div>

            {/* View Details CTA */}
            <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 p-2 text-center text-sm font-medium text-white transition">
              <ArrowRight className="h-4 w-4" />
              View All Reward Details
            </button>
          </div>
        </div>
      </div>

      <div className="relative h-40 w-full p-4">
        <Image
          src={BannerImage}
          alt="Banner Promo"
          className="h-full w-full rounded-lg object-cover"
          priority
        />
        <div className="absolute inset-0 left-10 flex flex-col items-start justify-center text-white">
          <p className="mb-2 font-medium">
            Promotion
            <br />
            Banner Here
          </p>
          <button className="rounded-lg px-3 py-2 text-xs font-medium text-white outline-1 outline-white">
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

      <div className="bg-gradient-primary mx-4 my-2 flex items-center gap-2 rounded-lg px-3 py-2 text-white">
        <div className="flex-shrink-0">
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
                  className="h-[115px] w-full rounded-lg object-cover object-right"
                  priority
                />
                <div className="mt-3">
                  <h3 className="mb-1 text-sm font-medium">{item.title}</h3>
                  <p className="line-clamp-2 text-xs text-ellipsis text-gray-600">
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
