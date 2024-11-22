import Navbar from "@/components/NavBar/NavBar";
import { styles } from "./styles";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { playicon } from "@/public/assets";
import TrendyHomeCarousel from "@/components/Carousel/TrendyHomeCarousel";
import TrendyPlants from "@/components/TrendyPlants";
import HeroReview from "@/components/HeroReview";
import TopSellingPlants from "@/components/TopSellingPlants";
import CustomerReview from "@/components/CustomerReview";
import BestO2Plants from "@/components/BestO2Plants";

export default function Home() {
  return (
    <section className={`${styles.paddingX} relative bg-hero-pattern bg-fixed sm:bg-local sm:bg-auto bg-top bg-no-repeat bg-cover h-screen sm:h-full`}>
      <Navbar />
      <div className="py-4 h-full lg:h-96 sm:py-10 sm:grid sm:grid-cols-12">
        <div className="w-full col-span-12 lg:col-span-6">
          <h1 className="text-4xl font-bold sm:text-7xl py-2 px-0">Breath Natural</h1>
          <p className="text-sm py-4">Planto is an e-commerce business offering a curated range of natural and herbal wellness products. It focuses on delivering sustainable, plant-based solutions to promote healthier lifestyles.</p>
          <div className="flex gap-4">
            <Button variant={"outline"} className="bg-transparent text-xs">Explore</Button>
            <Button className="bg-transparent hover:bg-transparent shadow-none hover:underline text-xs">
              <Image src={playicon} alt="play" className="h-8 w-8" />Live Demo...
            </Button>
          </div>
        </div>
        <div className="w-full col-span-12 lg:col-span-6 mt-4">
          <TrendyHomeCarousel />
        </div>
      </div>
      <HeroReview />
      <TrendyPlants />
      <TopSellingPlants />
      <CustomerReview />
      <BestO2Plants />
    </section>
  );
}
