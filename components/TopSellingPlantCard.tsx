import { styles } from "@/app/styles"
import { cart_bag } from "@/public/assets"
import Image, { StaticImageData } from "next/image"
import { Button } from "./ui/button"

const TopSellingPlantCard = ({ plant }: {
    plant: {
        plant_name: string,
        plant_desc: string,
        plant_img: StaticImageData,
        plant_price: number
    }
}) => {
    return (
        <div className={`${styles.blureffect} ${styles.borderline} w-[28rem] mt-28 p-4 rounded-3xl flex flex-col items-center`}>
            <Image src={plant.plant_img} alt={plant.plant_name} className="h-96 w-96 absolute -top-32" />
            <div className="flex flex-col items-center mt-64">
                <h3 className="text-2xl py-2 font-bold">
                    {plant.plant_name}
                </h3>
                <p className="text-xs text-center">{plant.plant_desc}</p>
                <div className="my-4 flex justify-between items-center w-full">
                    <h3 className="text-2xl font-semibold py-4">Rs {plant.plant_price}/-</h3>
                    <div className="flex justify-center items-center gap-4">
                        <Button variant={"outline"} className="bg-transparent hover:bg-transparent">
                            <Image src={cart_bag} alt="cart_bag" className="h-5 w-5 object-contain" />
                        </Button>
                        <Button variant={"outline"} className="my-4 bg-transparent">Buy Now</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopSellingPlantCard