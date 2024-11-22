import { styles } from "@/app/styles"
import { starIcon } from "@/public/assets"
import Image, { StaticImageData } from "next/image"

const ReviewCard = ({ review }: {
    review: {
        customerName: string,
        customerImg: StaticImageData,
        review: string,
        rating: number,
        location: string
    }
}) => {
    return (
        <div className={`${styles.blureffect} ${styles.borderline} p-4 rounded-3xl flex flex-col items-start`}>
            <div className="flex items-center gap-6">
                <div className="flex justify-center items-center">
                    <Image src={review.customerImg} alt={review.customerName} className="border border-white rounded-full h-20 w-20" />
                </div>
                <div className="">
                    <h5>{review.customerName}</h5>
                    <div className="flex gap-1 py-1">
                        {Array.from({ length: review.rating }).map((_, index) => (
                            <Image key={index} src={starIcon} alt="rating" />
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <p className="text-xs text-gray-300 pt-2">{review.review}</p>
                <p className="font-bold text-xs text-end">📌 {review.location}</p>
            </div>
        </div>
    )
}

export default ReviewCard