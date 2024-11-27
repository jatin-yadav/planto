import { styles } from "@/app/styles"
import { cart_bag } from "@/public/assets"
import Image, { StaticImageData } from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

const ShopPlantDisplay = ({ plant }: {
    plant: {
        plant_name: string,
        plant_desc: string,
        plant_img: StaticImageData,
        plant_price: number
    }
}) => {
    return (
        <div className={`bg-[#304d40] shadow-[#558771] shadow-md ${styles.borderline} w-[10rem] sm:w-[12rem] lg:w-[20rem] mt-2 p-4 rounded-3xl flex flex-col items-center`}>
            <div className="bg-[#558771] w-full rounded-3xl p-1 flex justify-center items-center">
                <Image src={plant.plant_img} alt={plant.plant_name} className="h-32 lg:h-44 w-32 lg:w-44" />
            </div>
            <div className="flex flex-col w-full items-center">
                <h3 className="text-md lg:text-2xl py-2 font-bold text-center">
                    {plant.plant_name}
                </h3>
                <p className="text-xs text-justify hidden lg:block ">{plant.plant_desc}</p>
                <div className="flex items-center w-full flex-col">
                    <div className="flex justify-between w-full items-center gap-1 lg:gap-4">
                        <h3 className="text-md lg:text-2xl font-semibold py-1 lg:py-4">Rs {plant.plant_price}/-</h3>
                        <Button variant={"ghost"} className="bg-transparent hover:bg-transparent">
                            <Image src={cart_bag} alt="cart_bag" className="h-5 w-5 object-contain" />
                        </Button>
                    </div>
                    <Link className="w-full" href='/buynow'>
                        <Button variant={"outline"} className="my-4 bg-transparent w-full">Buy Now</Button>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default ShopPlantDisplay