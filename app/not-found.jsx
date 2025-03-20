"use client";

import BackNavigation from "@/components/layouts/BackNavigation";
import { StickyNote } from "lucide-react";

export default function NotFound() {
  return (
    <div className="overflow-y-hidden">
      <BackNavigation title="404 - Page Not Found" />

      <div className="flex h-[calc(100dvh-150px)] w-full items-center justify-center">
        <div className="flex flex-col items-center px-6">
          <div className="rounded-full bg-slate-400 p-8">
            <StickyNote className="h-16 w-16 text-white" />
          </div>
          <p className="mx-4 mt-4 text-center text-slate-600">
            Sorry, the page you're looking for does not exist.
          </p>
        </div>
      </div>
    </div>
  );
}
