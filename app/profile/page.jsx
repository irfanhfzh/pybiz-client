"use client";

import Image from "next/image";
import {
  LogOut,
  HelpCircle,
  Building2,
  Landmark,
  ChevronRight,
  Gem,
} from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import BackNavigation from "@/components/layouts/BackNavigation";

// Modify menuItems to support history tracking
const menuItems = [
  {
    icon: Building2,
    label: "Business Profile",
    path: "/profile/business-profile",
  },
  {
    icon: Landmark,
    label: "Bank Account",
    path: "/profile/bank",
  },
  {
    icon: HelpCircle,
    label: "Help & Center",
    path: "https://pocketyouasia.tawk.help/",
  },
];

export default function Profile() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleLogout = () => {
    router.push("/login");
  };

  const handleMenuItemClick = (item) => {
    // Create history array starting with current location
    let currentHistory = [];

    // Get current URL with any existing params except pathHistory
    let currentUrl = pathname;
    const params = new URLSearchParams(searchParams);
    params.delete("pathHistory");
    if (params.toString()) {
      currentUrl += `?${params.toString()}`;
    }

    // Add current page to history
    currentHistory.push(currentUrl);

    // Add destination to history
    currentHistory.push(item.path);

    // Encode history for URL
    const encodedHistory = encodeURIComponent(JSON.stringify(currentHistory));

    // Navigate to the page with history parameter
    router.push(`${item.path}?pathHistory=${encodedHistory}`);
  };

  return (
    <>
      <BackNavigation title="Account" />

      <div className="bg-gradient-primary mx-4 mt-2 mb-4 rounded-2xl p-6">
        <div className="flex h-full justify-between gap-2">
          <div className="flex flex-col justify-between">
            <h1 className="text-lg font-semibold text-white">
              PocketYou Asia Indonesia Malaysia Singapore
            </h1>
            <p className="mt-1 mb-6 text-sm text-white">
              Retail Store{" "}
              <span className="bg text-primary ml-[2px] rounded-xl bg-white px-2 py-[2px] text-xs font-semibold">
                Premium
              </span>
            </p>
            <button className="text-primary flex w-fit items-center rounded-xl bg-white px-3 py-2 text-xs">
              <Gem className="mr-2 h-4 w-4" />
              <span className="font-semibold">Learn about Membership</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div>
            <Image
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80"
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full border-2 border-white"
              priority
            />
          </div>
        </div>
      </div>

      <div className="px-4">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isLastItem = index === menuItems.length - 1;

          return (
            <button
              key={index}
              onClick={() => handleMenuItemClick(item)}
              className={`flex w-full items-center justify-between ${isLastItem ? "" : "border-b"} p-4`}
            >
              <div className="flex items-center gap-4">
                <Icon className="h-6 w-6 text-slate-600" />
                <span>{item.label}</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </button>
          );
        })}

        <button
          onClick={handleLogout}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-red-50 p-4 text-red-600"
        >
          <LogOut className="h-6 w-6" />
          <span>Logout</span>
        </button>
      </div>
    </>
  );
}
