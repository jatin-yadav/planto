import { cart_bag, O2plant3 } from "@/public/assets"
import SectionHeader from "./SectionHeader"
import Image from "next/image";
import { Button } from "./ui/button";
import { styles } from "@/app/styles";

const BestO2Plants = () => {
    return (
        <section className="bg-transparent py-12">
            <SectionHeader heading="Our Best O2" />
            <div className={`${styles.blureffect} ${styles.borderline} flex flex-col lg:flex-row justify-center items-center rounded-3xl lg:rounded-[9rem] py-2 lg:py-4 px-2 lg:px-16 mt-10 lg:mt-24 h-full lg:h-[30rem]`}>
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <Image src={O2plant3} alt="TrendyRose1" className="lg:absolute -top-52" />
                </div>
                <div className="w-full lg:w-1/2 p-4">
                    <h3 className="text-2xl font-semibold py-4">We Have Small And Best O2 Plants Collection’s</h3>
                    <p className="text-sm py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error cupiditate saepe nemo quam non blanditiis dolorem corporis, deleniti ipsam officia? Magni molestias hic laboriosam ea odio nesciunt ipsam natus veritatis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ex, labore, dolorem distinctio laborum unde atque at corporis assumenda id cumque nostrum animi voluptate? Totam quod unde soluta ratione itaque.</p>
                    <p className="text-sm py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error cupiditate saepe nemo quam non blanditiis dolorem corporis, deleniti ipsam officia? Magni molestias hic laboriosam ea odio nesciunt ipsam natus veritatis!</p>
                    <div className="flex justify-between items-center gap-4">
                        <h3 className="text-2xl font-semibold py-4">Rs 599/-</h3>
                        <div className="flex items-center gap-4">
                            <Button variant={"outline"} className="bg-transparent">Explore All</Button>
                            <Button variant={"outline"} className="bg-transparent hover:bg-transparent">
                                <Image src={cart_bag} alt="cart_bag" className="h-5 w-5 object-contain" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestO2Plants