import { styles } from "@/app/styles";
import { planto_logo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className={`${styles.paddingX} sm:pt-16 pt-10 pb-4 bg-[#222c1d]`}>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 sm:col-span-4 flex flex-col justify-between">
          <Link
            href="/"
            className="flex items-end gap-2"
          >
            <Image
              src={planto_logo}
              alt="planto_logo"
              className="w-9 h-9 object-contain"
            />
            <span className="text-2xl text-content tracking-wider font-bold cursor-pointer">
              Planto.
            </span>
          </Link>
          <p className="text-xs py-4">Planto is an e-commerce business offering a curated range of natural and herbal wellness products. It focuses on delivering sustainable, plant-based solutions to promote healthier lifestyles.</p>
        </div>
        <div className="col-span-12 sm:col-span-4 flex flex-col items-start sm:items-center">
          <div className="w-full">
            <h3 className="text-xl font-semibold w-full">Quick Links</h3>
            <ul className="list-none text-sm py-4 w-full">
              <li className="py-1">
                <Link href='/'>Home</Link>
              </li>
              <li className="py-1">
                <Link href='/plants'>{`Type's of Plant's`}</Link>
              </li>
              <li className="py-1">
                <Link href='/contact'>Contact</Link>
              </li>
              <li className="py-1">Privacy</li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-4 flex flex-col items-start sm:items-center">
          <div>
            <h3 className="text-xl font-semibold pb-4">For Every Update.</h3>
            <div className="flex w-full max-w-sm items-center space-x-2 p-1 border border-white rounded-lg">
              <Input type="email" placeholder="Email" className="outline-none border-none focus-visible:ring-0" />
              <Button variant={"secondary"} type="submit">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-4">
        <div className="w-1/2 flex items-center">
          <h3 className="text-xl font-semibold mr-4">FB</h3>
          <h3 className="text-xl font-semibold mr-4">TW</h3>
          <h3 className="text-xl font-semibold mr-4">LI</h3>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <p className="text-sm">
            planto © all right reserve
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer