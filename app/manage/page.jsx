"use client";

import Link from "next/link";
import {
  CircleUserRound,
  FileText,
  DollarSign,
  PlusCircle,
} from "lucide-react";

export default function Manage() {
  return (
    <div className="p-4">
      <div className="mb-6 flex items-start gap-4">
        <CircleUserRound width={50} height={50} />
        <div className="leading-3 my-auto">
          <h2 className="font-semibold text-lg">John Doe</h2>
          <Link
            href="/profile?from=/manage"
            className="text-xs text-primary whitespace-nowrap underline"
          >
            View Profile &gt;
          </Link>
        </div>
      </div>

      <div className="mb-6">
        <div className="rounded-lg border p-4">
          <h3 className="mb-2 font-medium">Outlets</h3>
          <button className="text-sm text-primary flex items-center gap-2">
            <PlusCircle className="h-4 w-4" /> New Outlet
          </button>
        </div>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-4">
        <div className="rounded-lg border p-4">
          <h3 className="mb-2 font-medium">Products</h3>
          <button className="text-sm text-primary flex items-center gap-2">
            <PlusCircle className="h-4 w-4" /> New Product
          </button>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="mb-2 font-medium">Customers</h3>
          <button className="text-sm text-primary flex items-center gap-2">
            <PlusCircle className="h-4 w-4" /> New Customer
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <button className="flex w-full items-center gap-3 rounded-lg border p-4">
          <DollarSign className="h-6 w-6 text-primary" />
          <span className="text-primary">Purchase Amount</span>
        </button>
        <button className="flex w-full items-center gap-3 rounded-lg border p-4">
          <FileText className="h-6 w-6 text-primary" />
          <span className="text-primary">View Reports</span>
        </button>
      </div>
    </div>
  );
}
