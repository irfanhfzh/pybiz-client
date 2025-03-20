"use client";

import Image from "next/image";
import InformationText from "@/components/commons/InformationText";
import BackNavigation from "@/components/layouts/BackNavigation";
import { Camera, CircleAlert, SquarePen } from "lucide-react";
import BlankProfilePicture from "@/public/images/blank-profile-picture.png";

const BusinessProfile = () => {
  return (
    <>
      <BackNavigation title="Business Profile" />

      <div className="flex flex-col items-center justify-center gap-4 px-4 pt-2 pb-4">
        <div className="relative">
          <div className="bg-gradient-border-primary shrink-0 rounded-full p-[3px]">
            <Image
              src={BlankProfilePicture}
              alt="Profile Picture"
              className="mobile-md:w-28 mobile-md:h-28 h-20 w-20 shrink-0 rounded-full object-cover"
              priority
            />
          </div>
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
