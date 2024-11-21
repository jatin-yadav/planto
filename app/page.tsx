import Navbar from "@/components/NavBar/NavBar";
import { styles } from "./styles";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { playicon, starIcon, user1 } from "@/public/assets";
import TrendyHomeCarousel from "@/components/Carousel/TrendyHomeCarousel";

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
      <div className="w-full lg:w-1/2">
        <div className={`${styles.blureffect} ${styles.borderline} rounded-3xl w-full lg:w-96 px-3 lg:px-6 py-4 lg:py-8`}>
          <div className="flex items-center gap-6">
            <div className="flex justify-center items-center border border-white rounded-full h-20 w-20">
              <Image src={user1} alt="user" className="h-full w-full" />
            </div>
            <div className="">
              <h5>Alena Patel</h5>
              <div className="flex gap-1 py-1">
                <Image src={starIcon} alt="rating" />
                <Image src={starIcon} alt="rating" />
                <Image src={starIcon} alt="rating" />
                <Image src={starIcon} alt="rating" />
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-300 pt-2">Planto: Breath Natureal transformed my space! The plants arrived healthy, beautifully packaged, and with easy care instructions. They’ve added a calming vibe to my home. Highly recommend!</p>
            <p className="font-bold text-xs text-end">📌Gurugram</p>
          </div>
        </div>
      </div>
      <div className="h-screen bg-transparent pt-12">
        <div className="flex justify-center">
          <p className="relative text-center text-2xl lg:text-4xl font-semibold py-2 px-4">
            <span className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-green-500 rounded-tr-xl"></span>
            <span className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-green-500 rounded-bl-xl"></span>
            Our Trendy plants
          </p>
        </div>
      </div>
      <div className="h-screen bg-transparent pt-12">
        <div className="flex justify-center">
          <p className="relative text-center text-2xl lg:text-4xl font-semibold py-2 px-4">
            <span className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-green-500 rounded-tr-xl"></span>
            <span className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-green-500 rounded-bl-xl"></span>
            Our Top Selling
          </p>
        </div>
      </div>
      <div className="h-screen bg-transparent pt-12">
        <div className="flex justify-center">
          <p className="relative text-center text-2xl lg:text-4xl font-semibold py-2 px-4">
            <span className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-green-500 rounded-tr-xl"></span>
            <span className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-green-500 rounded-bl-xl"></span>
            Customer Review
          </p>
        </div>
      </div>
      <div className="h-screen bg-transparent pt-12">
        <div className="flex justify-center">
          <p className="relative text-center text-2xl lg:text-4xl font-semibold py-2 px-4">
            <span className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-green-500 rounded-tr-xl"></span>
            <span className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-green-500 rounded-bl-xl"></span>
            Our Best
          </p>
        </div>
      </div>
    </section>
  );
}
