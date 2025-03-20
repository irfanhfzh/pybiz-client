"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BadgePercent,
  Bell,
  BookText,
  ChartNoAxesColumn,
  Check,
  ChevronRight,
  CircleUserRound,
  FileText,
  Gem,
  PlusCircle,
  Receipt,
  Settings,
  ShoppingBag,
} from "lucide-react";
import LogoPYBIZSquare from "@/public/logos/logo-pybiz-square.svg";
import Badge from "@/public/icons/badge.svg";
import Smartphone from "@/public/icons/smartphone.svg";
import Wifi from "@/public/icons/wifi.svg";
import Voucher from "@/public/icons/voucher.svg";
import Electricity from "@/public/icons/electricity.svg";
import Dashboard from "@/public/icons/dashboard.svg";
import BannerImage from "@/public/images/banner.webp";
import LogoPYBIZWhiteTitleMini from "@/public/logos/logo-pybiz-white-title-mini.svg";
import ModalBottom from "@/components/commons/ModalBottom";
import { useRouter } from "next/navigation";

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

const features = [
  {
    id: 1,
    title: "Cashier",
    icon: <Receipt className="h-6 w-6" />,
    iconColor: "text-teal-500",
  },
  {
    id: 2,
    title: "Bills",
    icon: <FileText className="h-6 w-6" />,
    iconColor: "text-orange-500",
  },
  {
    id: 3,
    title: "Offers",
    icon: <BadgePercent className="h-6 w-6" />,
    iconColor: "text-blue-500",
  },
  {
    id: 4,
    title: "Digital Products",
    icon: <BookText className="h-6 w-6" />,
    iconColor: "text-lime-600",
  },
];

export default function Home() {
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showTrxFeaturesModal, setShowTrxFeaturesModal] = useState(false);
  const [showDigitalProductsModal, setShowDigitalProductsModal] =
    useState(false);

  const router = useRouter();

  const toggleFeature = (featureId) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId],
    );
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product.name);

    // Tindakan sesuai dengan produk yang dipilih
    switch (product.name) {
      case "Mobile Prepaid":
        console.log("Navigating to Mobile Prepaid page");
        // Tambahkan kode navigasi atau tindakan lain di sini
        // Contoh: navigate('/mobile-prepaid');
        break;
      case "Internet":
        console.log("Navigating to Internet page");
        // Contoh: navigate('/internet');
        break;
      case "Mobile PIN":
        console.log("Navigating to Mobile PIN page");
        // Contoh: navigate('/mobile-pin');
        break;
      case "Electricity":
        console.log("Navigating to Electricity page");
        // Contoh: navigate('/electricity');
        break;
      case "View All":
        console.log("Viewing all digital products");
        // Contoh: navigate('/digital-products');
        setShowDigitalProductsModal(true);
        break;
      default:
        console.log("Unknown product");
    }
  };

  return (
    <>
      <div className="bg-gradient-primary mb-2 flex flex-col gap-4 rounded-br-xl rounded-bl-xl px-4 py-6">
        <div className="flex items-center justify-between">
          <LogoPYBIZWhiteTitleMini className="mt-2" />
          <div className="flex gap-2 text-white">
            <Link href="/notifications" className="rounded-full p-1">
              <Bell className="h-6 w-6" />
            </Link>
            <Link href="/profile" className="rounded-full p-1">
              <CircleUserRound className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <div className="flex items-center rounded-xl bg-white py-4 pr-4 shadow-md">
          <div className="shrink-0">
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

      <div className="mobile-md:p-4 p-2">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-primary font-semibold">Transaction Features</h2>
          <Settings
            className="h-6 w-6"
            onClick={() => setShowTrxFeaturesModal(true)}
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="mobile-md:flex-row flex flex-col gap-4">
            {/* Row 1: Cashier (larger) with added content */}
            <div
              className="mobile-md:w-1/2 bg-gradient-primary flex h-auto flex-col rounded-xl p-4 shadow-md"
              onClick={() => router.push("/cashier")}
            >
              <div className="mb-3 flex items-center justify-between text-white">
                <h3 className="font-medium">Cashier</h3>
                <ChevronRight className="h-6 w-6 font-medium" />
              </div>

              {/* Added stats summary */}
              <div className="mb-4 text-white">
                <div className="mb-1 text-xs opacity-80">
                  Today's transactions
                </div>
                <div className="text-lg font-semibold">24</div>
              </div>

              {/* Added quick actions */}
              <div className="mb-4 flex gap-2">
                <Link
                  href="/cashier/plus1"
                  className="z-10 flex flex-1 items-center justify-center rounded-xl bg-white/20 p-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <PlusCircle className="h-4 w-4 text-white" />
                </Link>
                <Link
                  href="/cashier/plus2"
                  className="z-10 flex flex-1 items-center justify-center rounded-xl bg-white/20 p-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <PlusCircle className="h-4 w-4 text-white" />
                </Link>
                <Link
                  href="/cashier/plus3"
                  className="z-10 flex flex-1 items-center justify-center rounded-xl bg-white/20 p-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <PlusCircle className="h-4 w-4 text-white" />
                </Link>
              </div>

              {/* Auto margin untuk mendorong button ke bawah */}
              <div className="mt-auto">
                <Link
                  href="/cashier/new"
                  className="text-primary z-10 flex w-full items-center justify-center gap-1 rounded-xl bg-white p-2 text-center text-xs font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  <PlusCircle className="h-4 w-4" /> New Transaction
                </Link>
              </div>
            </div>

            <div className="mobile-md:w-1/2 flex flex-col justify-between gap-4">
              {/* Bills card - dengan tinggi yang ditetapkan */}
              <div
                className="bg-gradient-primary flex flex-col gap-4 rounded-xl p-4 shadow-md"
                onClick={() => router.push("/bills")}
              >
                <div className="flex items-center justify-between text-white">
                  <h3 className="font-medium">Bills</h3>
                  <ChevronRight className="h-6 w-6 font-medium" />
                </div>
                <Link
                  href="/bills/new"
                  className="text-primary z-10 flex w-full items-center justify-center gap-1 rounded-xl bg-white p-2 text-center text-xs font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  <PlusCircle className="h-4 w-4" /> New Bill
                </Link>
              </div>

              {/* Offers card - dengan tinggi yang ditetapkan */}
              <div
                className="bg-gradient-primary flex cursor-pointer flex-col gap-4 rounded-xl p-4 shadow-md"
                onClick={() => router.push("/offers")}
              >
                <div className="flex items-center justify-between text-white">
                  <h3 className="font-medium">Offers</h3>
                  <ChevronRight className="h-6 w-6 font-medium" />
                </div>
                <Link
                  href="/offers/new"
                  className="text-primary z-10 flex w-full items-center justify-center gap-1 rounded-xl bg-white p-2 text-center text-xs font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  <PlusCircle className="h-4 w-4" /> New Offer
                </Link>
              </div>
            </div>
          </div>

          {/* Row 2: Rewards (full width) */}
          <div className="bg-gradient-primary mobile-md:p-4 rounded-xl p-2 shadow-md">
            <div className="mobile-md:flex-row mobile-md:gap-0 mb-6 flex flex-col items-center justify-between gap-2 text-white">
              <h3 className="text-lg font-medium">My Rewards</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm">Achieved</span>
                <div className="text-primary rounded-full bg-white px-3 py-1 text-xs whitespace-nowrap">
                  1/3 Rewards
                </div>
              </div>
            </div>

            {/* Progress Summary */}
            <div className="flex flex-col gap-4 text-white">
              <Link href="/income/sales-claim">
                <div className="flex items-center justify-between rounded-xl bg-white/20 p-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1 text-sm font-semibold">
                      <ShoppingBag className="h-4 w-4 font-medium" />
                      Sales Claim
                    </div>
                    <div className="flex items-start gap-1 text-lg font-bold">
                      <span className="text-xs font-light">Rp</span>
                      <span>1.145.500.000,00</span>
                    </div>
                  </div>
                  <ChevronRight className="h-6 w-6 font-medium" />
                </div>
              </Link>

              <Link href="/income/incentive-reward">
                <div className="flex items-center justify-between rounded-xl bg-white/20 p-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1 text-sm font-semibold">
                      <ChartNoAxesColumn className="h-4 w-4 font-medium" />
                      Incentive Reward
                    </div>
                    <div className="flex items-start gap-1 text-lg font-bold">
                      <span className="text-xs font-light">Rp</span>
                      <span>1.324.000</span>
                      <span className="-ms-1 mb-1 self-end text-xs font-light">
                        ,0000000000
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="h-6 w-6 font-medium" />
                </div>
              </Link>

              <Link href="/income/gold-bar">
                <div className="flex items-center justify-between rounded-xl bg-white/20 p-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1 text-sm font-semibold">
                      <Gem className="h-4 w-4 font-medium" />
                      Gold Bar
                    </div>
                    <div className="flex items-center gap-1 text-lg font-bold">
                      1000.00 <span className="text-xs font-light">Gram</span>
                    </div>
                  </div>
                  <ChevronRight className="h-6 w-6 font-medium" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-md:px-4 relative h-40 w-full px-2 py-2">
        <Image
          src={BannerImage}
          alt="Banner Promo"
          className="h-full w-full rounded-xl object-cover"
          priority
        />
        <div className="absolute inset-0 left-10 flex flex-col items-start justify-center text-white">
          <p className="mb-2 font-medium">
            Promotion
            <br />
            Banner Here
          </p>
          <button className="rounded-xl px-3 py-2 text-xs font-medium text-white outline-1 outline-white">
            Claim Promos
          </button>
        </div>
      </div>

      <div className="mobile-md:p-4 p-2">
        <h2 className="text-primary mb-4 font-semibold">
          Sell Digital Products Now
        </h2>
        <div className="no-scrollbar flex gap-6 overflow-x-auto px-2">
          {digitalProducts.map((product) => {
            const Icon = product.icon;
            return (
              <button
                key={product.name}
                className="flex max-w-[64px] flex-col items-center"
                onClick={() => handleProductClick(product)}
              >
                <div
                  className={`my-2 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-purple-100 ${selectedProduct === product.name ? "ring-primary ring-2" : ""}`}
                >
                  <Icon />
                </div>
                <span className="text-xs">{product.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-gradient-primary mobile-md:mx-4 mx-2 my-2 flex items-center gap-2 rounded-xl px-3 py-2 text-white">
        <div className="shrink-0">
          <Badge />
        </div>
        <p className="text-xs">
          Make your customers loyal with rewards for every product you sell
        </p>
      </div>

      <div className="mobile-md:p-4 p-2">
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
                  className="h-[115px] w-full rounded-xl object-cover object-right"
                  priority
                />
                <div className="mt-3">
                  <h3 className="mb-1 text-sm font-medium">{item.title}</h3>
                  <p className="line-clamp-2 text-xs text-ellipsis text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ModalBottom
        isOpen={showTrxFeaturesModal}
        onClose={() => setShowTrxFeaturesModal(false)}
        title="Choose your transaction features"
        description="At least one feature must be displayed on your homepage."
        buttonText="Save Settings"
      >
        <div className="my-4 space-y-4 overflow-y-auto py-2">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`relative rounded-xl border-2 p-4 transition-colors ${
                selectedFeatures.includes(feature.id)
                  ? "border-primary"
                  : "border-muted"
              }`}
              onClick={() => toggleFeature(feature.id)}
            >
              <div className="flex w-full items-center justify-between gap-4">
                <div
                  className={`${feature.iconColor} bg-background flex items-center gap-2 rounded-xl p-2`}
                >
                  {feature.icon}
                  <h3 className="font-medium">{feature.title}</h3>
                </div>
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                    selectedFeatures.includes(feature.id)
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted"
                  }`}
                >
                  {selectedFeatures.includes(feature.id) && (
                    <Check className="h-4 w-4" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ModalBottom>

      <ModalBottom
        isOpen={showDigitalProductsModal}
        onClose={() => setShowDigitalProductsModal(false)}
        title="Let's sell digital products!"
        description="Enjoy the benefits of selling digital products without a deposit."
        buttonText="Upgrade Your Plan"
      ></ModalBottom>
    </>
  );
}
