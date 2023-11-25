import Banner from "@/components/Banner";
import SemiCircularBanner from "@/components/SemiCircularBanner";
import SemiCircularCarousel from "@/components/SemiCircularCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Banner />
      <SemiCircularCarousel />
    </main>
  );
}
