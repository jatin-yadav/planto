import { styles } from "@/app/styles";
import { cart_bag, TrendyRose1, TrendyRose2 } from "@/public/assets";
import Image from "next/image";
import { Button } from "./ui/button";

const TrendyPlants = () => {
    return (
        <section className="bg-transparent py-12">
            <div className="flex justify-center">
                <p className="relative text-center text-2xl lg:text-4xl font-semibold py-2 px-4">
                    <span className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-green-500 rounded-tr-xl"></span>
                    <span className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-green-500 rounded-bl-xl"></span>
                    Our Trendy plants
                </p>
            </div>
            {/* Trendy 1 */}
            <div className={`${styles.blureffect} ${styles.borderline} flex flex-col lg:flex-row justify-center items-center rounded-3xl lg:rounded-[9rem] py-2 lg:py-4 px-2 lg:px-16 mt-10 lg:mt-24 h-full lg:h-[30rem]`}>
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <Image src={TrendyRose1} alt="TrendyRose1" className="lg:absolute -top-52" />
                </div>
                <div className="w-full lg:w-1/2 p-4">
                    <h3 className="text-3xl font-semibold py-4">For Small Decs Ai Plat</h3>
                    <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error cupiditate saepe nemo quam non blanditiis dolorem corporis, deleniti ipsam officia? Magni molestias hic laboriosam ea odio nesciunt ipsam natus veritatis!</p>
                    <h3 className="text-2xl font-semibold py-4">Rs 599/-</h3>
                    <div className="flex items-center gap-4">
                        <Button variant={"outline"} className="bg-transparent">Explore</Button>
                        <Button variant={"outline"} className="bg-transparent hover:bg-transparent">
                            <Image src={cart_bag} alt="cart_bag" className="h-5 w-5 object-contain" />
                        </Button>
                    </div>
                </div>
            </div>
            {/* Trendy 2 with revers */}
            <div className={`${styles.blureffect} ${styles.borderline} flex flex-col-reverse lg:flex-row justify-center items-center rounded-3xl lg:rounded-[9rem] py-2 lg:py-4 px-2 lg:px-16 mt-10 lg:mt-44 h-full lg:h-[30rem]`}>
                <div className="w-full lg:w-1/2 p-4">
                    <h3 className="text-3xl font-semibold py-4">For Small Decs Ai Plat</h3>
                    <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error cupiditate saepe nemo quam non blanditiis dolorem corporis, deleniti ipsam officia? Magni molestias hic laboriosam ea odio nesciunt ipsam natus veritatis!</p>
                    <h3 className="text-2xl font-semibold py-4">Rs 599/-</h3>
                    <div className="flex items-center gap-4">
                        <Button variant={"outline"} className="bg-transparent">Explore</Button>
                        <Button variant={"outline"} className="bg-transparent hover:bg-transparent">
                            <Image src={cart_bag} alt="cart_bag" className="h-5 w-5 object-contain" />
                        </Button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <Image src={TrendyRose2} alt="TrendyRose1" className="lg:absolute -top-52" />
                </div>
            </div>
        </section>
    )
}

export default TrendyPlants;