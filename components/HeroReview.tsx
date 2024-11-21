import { styles } from "@/app/styles";
import { starIcon, user1 } from "@/public/assets";
import Image from "next/image";

const HeroReview = () => {
    return (
        <>
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
        </>
    )
}

export default HeroReview;