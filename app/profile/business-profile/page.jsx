"use client";

import InformationText from "@/components/commons/InformationText";
import BackNavigation from "@/components/layouts/BackNavigation";
import { Camera, CircleAlert, SquarePen } from "lucide-react";
import Image from "next/image";

const BusinessProfile = () => {
  return (
    <>
      <BackNavigation title="Business Profile" />

      <div className="px-4 pb-4 pt-2 flex flex-col items-center justify-center gap-4">
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80"
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full border-2 border-primary"
            priority
          />
          <button className="absolute bottom-0 right-0 rounded-full bg-primary p-1.5 text-white">
            <Camera className="h-4 w-4" />
          </button>
        </div>
        <div className="text-white px-4 py-2 bg-primary flex gap-3 items-center rounded-lg">
          <CircleAlert className="h-6 w-6" />
          <p className="text-xs">
            Please update your logo and business information to display your
            merchant on PocketYou.
          </p>
        </div>
      </div>

      <div className="w-full h-1 bg-slate-200"></div>

      <div className="px-4 pb-4 pt-2">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-lg">Business Information</h1>
          <SquarePen className="h-4 w-4 text-primary" />
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

      <div className="w-full h-1 bg-slate-200"></div>

      <div className="px-4 pb-4 pt-2">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-lg">Business Address</h1>
          <SquarePen className="h-4 w-4 text-primary" />
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
