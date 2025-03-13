"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

const BackNavigation = ({ title }) => {
  const searchParams = useSearchParams();

  const router = useRouter();
  const [navigationHistory, setNavigationHistory] = useState([]);

  const from = searchParams.get("from") || "/";

  const pathHistory = searchParams.get("pathHistory");

  useEffect(() => {
    if (pathHistory) {
      try {
        const decodedHistory = JSON.parse(decodeURIComponent(pathHistory));
        setNavigationHistory(decodedHistory);
      } catch (error) {
        console.error("Failed to parse path history:", error);
        setNavigationHistory([from]);
      }
    } else {
      setNavigationHistory([from]);
    }
  }, [from, pathHistory]);

  const handleBack = () => {
    if (navigationHistory.length > 1) {
      const previousPaths = [...navigationHistory];
      const previousPath = previousPaths[previousPaths.length - 1];

      const newPathHistory = encodeURIComponent(JSON.stringify(previousPaths));

      if (previousPath.includes("?")) {
        router.push(`${previousPath}&pathHistory=${newPathHistory}`);
      } else {
        router.push(`${previousPath}?pathHistory=${newPathHistory}`);
      }
    } else {
      router.push(from);
    }
  };

  return (
    <div className="flex items-center justify-between gap-2 p-4">
      <button onClick={handleBack} className="rounded-full p-1">
        <ArrowLeft className="h-6 w-6" />
      </button>
      <h1 className="text-lg font-semibold">{title}</h1>
      <div className="h-8 w-8"></div>
    </div>
  );
};

export default BackNavigation;
