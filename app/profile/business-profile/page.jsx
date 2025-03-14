"use client";

import InformationText from "@/components/commons/InformationText";
import BackNavigation from "@/components/layouts/BackNavigation";
import { Camera, CircleAlert, SquarePen } from "lucide-react";
import Image from "next/image";

const BusinessProfile = () => {
  return (
    <>
      <BackNavigation title="Business Profile" />

      <div className="flex flex-col items-center justify-center gap-4 px-4 pt-2 pb-4">
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80"
            alt="Profile"
            width={100}
            height={100}
            className="border-primary rounded-full border-2"
            priority
          />
          <button className="bg-primary absolute right-0 bottom-0 rounded-full p-1.5 text-white">
            <Camera className="h-4 w-4" />
          </button>
        </div>
        <div className="bg-primary flex items-center gap-3 rounded-xl px-4 py-2 text-white">
          <CircleAlert className="h-6 w-6" />
          <p className="text-xs">
            Please update your logo and business information to display your
            merchant on PocketYou.
          </p>
        </div>
      </div>

      <div className="h-1 w-full bg-slate-200"></div>

      <div className="px-4 pt-2 pb-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Business Information</h1>
          <SquarePen className="text-primary h-4 w-4" />
        </div>
        <InformationText
          title="Business Name"
          description="PocketYou Asia Indonesia Malaysia"
        />
        <InformationText
          title="Business Category"
          description="Health & Beauty"
        />
        <InformationText
          title="Business WhatsApp Number"
          description="089629933096"
        />
        <InformationText
          title="Business Email"
          description="irfanhafizh53@gmail.com"
        />
        <InformationText
          title="Business Description"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ab nulla tempora quae ex ipsum minus, temporibus hic nihil. Magni
            autem incidunt velit corporis architecto!"
        />
      </div>

      <div className="h-1 w-full bg-slate-200"></div>

      <div className="px-4 pt-2 pb-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Business Address</h1>
          <SquarePen className="text-primary h-4 w-4" />
        </div>
        <InformationText
          title="Business Address"
          description="Jl. Telaga Mas Blok G5 No.19 Rt16/Rw14, Harapan Baru - Bekasi Utara,
          17123, Jawa Barat, Indonesia."
        />
        <InformationText title="Business Timezone" description="Asia/Jakarta" />
      </div>
    </>
  );
};

export default BusinessProfile;
