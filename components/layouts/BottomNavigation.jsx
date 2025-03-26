"use client";

import { useCallback, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import ManageIcon from "@/public/icons/manage.svg";
import MyBizIcon from "@/public/icons/mybiz.svg";
import IncomeIcon from "@/public/icons/income.svg";

const navigation = [
  { name: "Manage", href: "/manage", icon: ManageIcon },
  { name: "My Biz", href: "/", icon: MyBizIcon },
  { name: "Income", href: "/income", icon: IncomeIcon },
];

const BottomNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const pageRefs = useRef([]);

  const resetPageScroll = useCallback((pageIndex) => {
    if (pageRefs.current[pageIndex]) {
      pageRefs.current[pageIndex]?.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
  }, []);

  const handlePageChange = useCallback(
    (href) => {
      const newIndex = navigation.findIndex((item) => item.href === href);
      resetPageScroll(newIndex);
      router.push(href);
    },
    [resetPageScroll, router],
  );

  return (
    <nav className="fixed right-0 bottom-0 left-0 z-30 mx-auto w-full max-w-full bg-white">
      <div className="border-t border-slate-200 px-2 py-2">
        <div className="relative flex items-end justify-evenly">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <button
                key={item.name}
                onClick={() => handlePageChange(item.href)}
                className="relative flex flex-col items-center px-4 transition-all duration-75 ease-in-out"
              >
                {isActive && (
                  <div className="absolute -top-6 left-1/2 h-14 w-14 -translate-x-1/2">
                    <div className="border-primary absolute inset-0 rounded-full border-2 bg-white"></div>
                    <div className="absolute bottom-0 left-1/2 h-2 w-12 -translate-x-1/2 bg-white"></div>
                  </div>
                )}

                <div
                  className={`relative z-10 transition-transform duration-75 ${
                    isActive ? "-translate-y-2 scale-110 transform" : ""
                  }`}
                >
                  <Icon />
                </div>

                <span
                  className={`mt-1 transition-colors duration-75 ${
                    isActive
                      ? "text-primary text-[13px] font-semibold"
                      : "text-xs font-normal text-slate-600"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;
