import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import ReviewCard from "../ReviewCard"
import { user1, user2, user3, user4 } from "@/public/assets"


const reviewList = [
    {
        customerName: "venely k",
        customerImg: user1,
        review: "Planto: Breath Natureal transformed my space! The plants arrived healthy, beautifully packaged, and with easy care instructions. They’ve added a calming vibe to my home. Highly recommend!",
        rating: 5,
        location: "Delhi"
    },
    {
        customerName: "Lii thakur",
        customerImg: user2,
        review: "Planto: Breath Natureal transformed my space! The plants arrived healthy, beautifully packaged, and with easy care instructions. They’ve added a calming vibe to my home. Highly recommend!",
        rating: 3,
        location: "Gurugram"
    },
    {
        customerName: "Alena Patel",
        customerImg: user3,
        review: "Planto: Breath Natureal transformed my space! The plants arrived healthy, beautifully packaged, and with easy care instructions. They’ve added a calming vibe to my home. Highly recommend!",
        rating: 2,
        location: "Noida"
    },
    {
        customerName: "Maxn Raval",
        customerImg: user4,
        review: "Planto: Breath Natureal transformed my space! The plants arrived healthy, beautifully packaged, and with easy care instructions. They’ve added a calming vibe to my home. Highly recommend!",
        rating: 4,
        location: "Banglore"
    },
]

const ReviewCarousel = () => {
    return (
        <Carousel className="w-full"
         opts={{
            align: "start",
            loop: true,
        }}
        >
            <CarouselContent className="-ml-1">
                {reviewList.map((review, index) => {
                    return (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <ReviewCard review={review} />
                            </div>
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
            <CarouselPrevious className="bg-transparent hidden md:flex justify-center" />
            <CarouselNext className="bg-transparent hidden md:flex justify-center" />
        </Carousel>
    )
}

export default ReviewCarousel