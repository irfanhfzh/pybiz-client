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
import { useRouter } from "next/navigation";
import BackNavigation from "@/components/layouts/BackNavigation";
import BlankProfilePicture from "@/public/images/blank-profile-picture.png";

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

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <>
      <BackNavigation title="Account" />

      <div className="bg-gradient-primary mx-4 mt-2 mb-4 rounded-2xl p-6">
        <div className="flex h-full flex-col justify-between gap-2">
          <div className="flex items-start justify-between gap-2">
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
            </div>
            <div className="bg-gradient-border-primary shrink-0 rounded-full p-[3px]">
              <Image
                src={BlankProfilePicture}
                alt="Profile Picture"
                className="mobile-md:w-20 mobile-md:h-20 h-16 w-16 shrink-0 rounded-full object-cover"
                priority
              />
            </div>
          </div>
          <button className="text-primary mobile-md:w-fit flex w-full items-center justify-between rounded-xl bg-white px-3 py-2 text-xs">
            <Gem className="mr-2 h-4 w-4" />
            <span className="font-semibold">Learn about Membership</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="px-4">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isLastItem = index === menuItems.length - 1;

          return (
            <button
              key={index}
              onClick={() => router.push(item.path)}
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
