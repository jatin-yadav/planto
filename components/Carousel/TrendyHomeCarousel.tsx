'use client'
import { styles } from "@/app/styles"
import { Button } from "../ui/button"
import Image from "next/image"
import { Rose1, Rose2, Rose3, Rose4, } from "@/public/assets"
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"



const TrendyHomeCarousel = () => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className={`${styles.blureffect} lg:ml-auto w-full lg:w-6/12 ${styles.borderline} rounded-3xl`
        }>
            <Carousel setApi={setApi} className="h-full" opts={{
                align: "start",
                loop: true,
            }}>
                <CarouselContent>
                    <CarouselItem className="flex flex-col items-center">
                        <div className="">
                            <Image src={Rose1} alt="Rose_Gold_Feminine" />
                        </div>
                        <p className="text-sm text-center">Trendy House Plant</p>
                        <h3 className="text-2xl py-2 font-bold text-center">
                            Calathea plant
                        </h3>
                        <Button variant={"outline"} className="my-4 bg-transparent">Buy Now</Button>
                    </CarouselItem>
                    <CarouselItem className="flex flex-col items-center">
                        <div className="">
                            <Image src={Rose2} alt="Rose_Gold_Feminine" />
                        </div>
                        <p className="text-sm text-center">Trendy House Plant</p>
                        <h3 className="text-2xl py-2 font-bold text-center">
                            Calathea plant
                        </h3>
                        <Button variant={"outline"} className="my-4 bg-transparent">Buy Now</Button>
                    </CarouselItem>
                    <CarouselItem className="flex flex-col items-center">
                        <div className="">
                            <Image src={Rose3} alt="Rose_Gold_Feminine" />
                        </div>
                        <p className="text-sm text-center">Trendy House Plant</p>
                        <h3 className="text-2xl py-2 font-bold text-center">
                            Calathea plant
                        </h3>
                        <Button variant={"outline"} className="my-4 bg-transparent">Buy Now</Button>
                    </CarouselItem>
                    <CarouselItem className="flex flex-col items-center">
                        <div className="">
                            <Image src={Rose4} alt="Rose_Gold_Feminine" />
                        </div>
                        <p className="text-sm text-center">Trendy House Plant</p>
                        <h3 className="text-2xl py-2 font-bold text-center">
                            Calathea plant
                        </h3>
                        <Button variant={"outline"} className="my-4 bg-transparent">Buy Now</Button>
                    </CarouselItem>
                </CarouselContent>
                {count > 1 ? <>
                    <CarouselPrevious className="bg-transparent hover:bg-transparent hover:text-white border-0 hidden lg:block" />
                    <CarouselNext className="bg-transparent hover:bg-transparent hover:text-white border-0 hidden lg:block" />
                </> : <></>
                }
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
                {count > 1 ?
                    <ul className="list-none flex justify-center">
                        {Array.from({ length: count }).map((_, index) => (
                            <li key={index} className={`rounded-full border-2 ${current === index + 1 ? "border-white" : "border-gray-400"} mx-1 p-1`}></li>
                        ))}
                    </ul> : <></>}
                {/* Slide {current} of {count} */}
            </div>
        </div >
    )
}

export default TrendyHomeCarousel