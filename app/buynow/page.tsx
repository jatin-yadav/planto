'use client'

import { useState } from 'react'
import { styles } from '../styles'
import Image from 'next/image'
import { Rose1, Rose2, Rose3, Rose4 } from '@/public/assets'
import { Button } from '@/components/ui/button'
import { topLikedPlants } from '@/public/constants'
import ShopPlantDisplay from '@/components/ShopPlantDisplay'
import { ChevronDown, ChevronRight } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { Checkbox } from '@radix-ui/react-checkbox'


const BuyNow = () => {
    const [isIndoorPlantOpen, setIsIndoorPlantOpen] = useState(true)
    const [isOutdoorPlantOpen, setIsOutdoorPlantOpen] = useState(false)
    const [isFloweringPlantOpen, setIsFloweringPlantOpen] = useState(false)

    return (
        <>
            <section className={`${styles.paddingX} py-6`}>
                <div className="bg-[#304d40] p-6 grid grid-cols-12 gap-4">
                    <div className="col-span-12 lg:col-span-6">
                        <div className='flex flex-wrap gap-1 justify-center'>
                            <div className="bg-[#558771] w-[calc(50%-20px)] p-1 flex justify-center items-center">
                                <Image src={Rose1} alt='rose1' className="h-32 lg:h-60 w-32 lg:w-60" />
                            </div>
                            <div className="bg-[#558771] w-[calc(50%-20px)] p-1 flex justify-center items-center">
                                <Image src={Rose2} alt='rose2' className="h-32 lg:h-60 w-32 lg:w-60" />
                            </div>
                            <div className="bg-[#558771] w-[calc(50%-20px)] p-1 flex justify-center items-center">
                                <Image src={Rose3} alt='rose3' className="h-32 lg:h-60 w-32 lg:w-60" />
                            </div>
                            <div className="bg-[#558771] w-[calc(50%-20px)] p-1 flex justify-center items-center">
                                <Image src={Rose4} alt='rose4' className="h-32 lg:h-60 w-32 lg:w-60" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 flex flex-col justify-center items-start   pr-0  lg:pr-20">
                        <h3 className="text-xl lg:text-3xl">Marble Queen Pothos</h3>
                        <h3 className="text-md lg:text-xl py-1">Rs {350}/-</h3>
                        <p className="text-sm text-justify">Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners.Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners.</p>
                        <div className='py-4'>
                            <h6 className='font-mono text-white/60'>Size</h6>
                            <ul className='list-none flex gap-2 py-2 font-mono'>
                                <li className="border p-2 h-10 w-10 flex justify-center items-center font-semibold bg-white text-black">S</li>
                                <li className="border p-2 h-10 w-10 flex justify-center items-center font-semibold">M</li>
                                <li className="border p-2 h-10 w-10 flex justify-center items-center font-semibold">L</li>
                                <li className="border p-2 h-10 w-10 flex justify-center items-center font-semibold">XL</li>
                            </ul>
                        </div>
                        <div className='flex gap-2 w-full items-end'>
                            <Button variant={'default'} className='bg-[#558771] w-full'>Add to Cart</Button>
                            <div className='flex flex-col items-center'>
                                <span className='text-xs text-white/60'>Quantity</span>
                                <Button variant={'outline'} className='bg-transparent '>- <span className='px-2'>1</span> +</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className={`${styles.paddingX} bg-[#304d40] mt-10`}>
                <div className="grid grid-cols-12 px-0 lg:px-28">
                    <div className="col-span-12 lg:col-span-2 border-b-2 lg:border-b-0 lg:border-r-2 border-b-[#558771] lg:border-r-[#558771] py-2 lg:py-6">
                        <div className="pl-4 py-1 font-mono text-sm">
                            {/* ====================================================== PLANT CARE ==================================== */}
                            <div>
                                <Collapsible
                                    open={isIndoorPlantOpen}
                                    onOpenChange={setIsIndoorPlantOpen}
                                    className="w-full"
                                >
                                    <div className='text-sm flex justify-between items-center'>
                                        <h6 className='flex items-center'><span>Plant Care</span></h6>
                                        <CollapsibleTrigger asChild>
                                            <Button variant="ghost" size="sm" className="w-9 p-0 hover:bg-transparent hover:text-white">
                                                {isIndoorPlantOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                                <span className="sr-only">Toggle</span>
                                            </Button>
                                        </CollapsibleTrigger>
                                    </div>
                                    <CollapsibleContent className="space-y-2">
                                        <div className="fpl-4 font-mono text-sm">
                                            <div className='flex items-center space-x-2 py-1'>
                                                <Checkbox id="hangingplants" className='border-white data-[state=checked]:bg-zinc-50 data-[state=checked]:text-zinc-900' />
                                                <label
                                                    htmlFor="hangingplants"
                                                    className="text-sm leading-none cursor-pointer peer-disabled:opacity-70"
                                                >
                                                    Watering
                                                </label>
                                            </div>
                                            <div className='flex items-center space-x-2 py-1'>
                                                <Checkbox id="foliageplants" className='border-white data-[state=checked]:bg-zinc-50 data-[state=checked]:text-zinc-900' />
                                                <label
                                                    htmlFor="foliageplants"
                                                    className="text-sm leading-none cursor-pointer peer-disabled:opacity-70"
                                                >
                                                    Sun Light
                                                </label>
                                            </div>
                                            <div className='flex items-center space-x-2 py-1'>
                                                <Checkbox id="airpurifyingplants" className='border-white data-[state=checked]:bg-zinc-50 data-[state=checked]:text-zinc-900' />
                                                <label
                                                    htmlFor="airpurifyingplants"
                                                    className="text-sm leading-none cursor-pointer peer-disabled:opacity-70"
                                                >
                                                    Soil & Fertilizing
                                                </label>
                                            </div>
                                            <div className='flex items-center space-x-2 py-1'>
                                                <Checkbox id="succulentsandcacti" className='border-white data-[state=checked]:bg-zinc-50 data-[state=checked]:text-zinc-900' />
                                                <label
                                                    htmlFor="succulentsandcacti"
                                                    className="text-sm leading-none cursor-pointer peer-disabled:opacity-70"
                                                >
                                                    Humidity
                                                </label>
                                            </div>
                                        </div>
                                    </CollapsibleContent>
                                </Collapsible>
                            </div>
                            {/* ========================================================================================================== */}
                        </div>
                        <div className="pl-4 py-1 font-mono text-sm">
                            {/* ====================================================== Origin story ==================================== */}
                            <div>
                                <Collapsible
                                    open={isOutdoorPlantOpen}
                                    onOpenChange={setIsOutdoorPlantOpen}
                                    className="w-full"
                                >
                                    <div className='text-sm flex justify-between items-center'>
                                        <h6 className='flex items-center'><span>Origin Story</span></h6>
                                        <CollapsibleTrigger asChild>
                                            <Button variant="ghost" size="sm" className="w-9 p-0 hover:bg-transparent hover:text-white">
                                                {isOutdoorPlantOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                                <span className="sr-only">Toggle</span>
                                            </Button>
                                        </CollapsibleTrigger>
                                    </div>
                                    <CollapsibleContent className="space-y-2">
                                        <div className="fpl-4 font-mono text-sm">
                                            <div className='flex items-center space-x-2 py-1'>
                                                <Checkbox id="groundcovers" className='border-white data-[state=checked]:bg-zinc-50 data-[state=checked]:text-zinc-900' />
                                                <label
                                                    htmlFor="groundcovers"
                                                    className="text-sm leading-none cursor-pointer peer-disabled:opacity-70"
                                                >
                                                    Groundcovers
                                                </label>
                                            </div>
                                            <div className='flex items-center space-x-2 py-1'>
                                                <Checkbox id="climbersandvines" className='border-white data-[state=checked]:bg-zinc-50 data-[state=checked]:text-zinc-900' />
                                                <label
                                                    htmlFor="climbersandvines"
                                                    className="text-sm leading-none cursor-pointer peer-disabled:opacity-70"
                                                >
                                                    Climbers & Vines
                                                </label>
                                            </div>
                                            <div className='flex items-center space-x-2 py-1'>
                                                <Checkbox id="trees" className='border-white data-[state=checked]:bg-zinc-50 data-[state=checked]:text-zinc-900' />
                                                <label
                                                    htmlFor="trees"
                                                    className="text-sm leading-none cursor-pointer peer-disabled:opacity-70"
                                                >
                                                    Trees
                                                </label>
                                            </div>
                                            <div className='flex items-center space-x-2 py-1'>
                                                <Checkbox id="shrubsandbushes" className='border-white data-[state=checked]:bg-zinc-50 data-[state=checked]:text-zinc-900' />
                                                <label
                                                    htmlFor="shrubsandbushes"
                                                    className="text-sm leading-none cursor-pointer peer-disabled:opacity-70"
                                                >
                                                    Shrubs & Bushes
                                                </label>
                                            </div>
                                        </div>
                                    </CollapsibleContent>
                                </Collapsible>
                            </div>
                            {/* ========================================================================================================== */}
                        </div>
                        <div className="pl-4 py-1 font-mono text-sm">
                            {/* ====================================================== Scientific Data ==================================== */}
                            <div>
                                <Collapsible
                                    open={isFloweringPlantOpen}
                                    onOpenChange={setIsFloweringPlantOpen}
                                    className="w-full"
                                >
                                    <div className='text-sm flex justify-between items-center'>
                                        <h6 className='flex items-center'><span>Scientific Data</span></h6>
                                        <CollapsibleTrigger asChild>
                                            <Button variant="ghost" size="sm" className="w-9 p-0 hover:bg-transparent hover:text-white">
                                                {isFloweringPlantOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                                <span className="sr-only">Toggle</span>
                                            </Button>
                                        </CollapsibleTrigger>
                                    </div>
                                    <CollapsibleContent className="space-y-2">
                                        <div className="fpl-4 font-mono text-sm">
                                            <div className='flex items-center space-x-2 py-1'>
                                                <Checkbox id="seasonalbloomers" className='border-white data-[state=checked]:bg-zinc-50 data-[state=checked]:text-zinc-900' />
                                                <label
                                                    htmlFor="seasonalbloomers"
                                                    className="text-sm leading-none cursor-pointer peer-disabled:opacity-70"
                                                >
                                                    Seasonal Bloomers
                                                </label>
                                            </div>
                                            <div className='flex items-center space-x-2 py-1'>
                                                <Checkbox id="singlecolorbloom" className='border-white data-[state=checked]:bg-zinc-50 data-[state=checked]:text-zinc-900' />
                                                <label
                                                    htmlFor="singlecolorbloom"
                                                    className="text-sm leading-none cursor-pointer peer-disabled:opacity-70"
                                                >
                                                    Single Color Bloom
                                                </label>
                                            </div>
                                            <div className='flex items-center space-x-2 py-1'>
                                                <Checkbox id="fragrantflowers" className='border-white data-[state=checked]:bg-zinc-50 data-[state=checked]:text-zinc-900' />
                                                <label
                                                    htmlFor="fragrantflowers"
                                                    className="text-sm leading-none cursor-pointer peer-disabled:opacity-70"
                                                >
                                                    Fragrant Flowers
                                                </label>
                                            </div>
                                            <div className='flex items-center space-x-2 py-1'>
                                                <Checkbox id="nightblooming" className='border-white data-[state=checked]:bg-zinc-50 data-[state=checked]:text-zinc-900' />
                                                <label
                                                    htmlFor="nightblooming"
                                                    className="text-sm leading-none cursor-pointer peer-disabled:opacity-70"
                                                >
                                                    Night-Blooming
                                                </label>
                                            </div>
                                        </div>
                                    </CollapsibleContent>
                                </Collapsible>
                            </div>
                            {/* ========================================================================================================== */}
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-10 px-0 lg:px-10 py-10">
                        <h4 className='text-2xl font-semibold'>
                            Watering
                        </h4>
                        <div className='text-sm text-white/90 font-extralight py-4'>
                            <p className='py-1'>Marble queen pothos is a relatively drought-tolerant plant, so it is important to avoid overwatering. If you overwater your plant, the leaves will start to yellow and fall off. If you underwater your plant, the leaves will start to wilt.</p>
                            <p className='py-1'>The best way to determine when to water your marble queen pothos is to stick your finger into the soil. If the top inch of soil is dry, it is time to water your plant.</p>
                            <p className='py-1'>When you water your marble queen pothos, water deeply until the water runs out of the drainage holes. This will ensure that the roots are getting enough water.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${styles.padding}`}>
                <div className={`backdrop-blur-md bg-white/5 lg:bg-transparent text-center lg:text-start border-b-2 p-2 lg:p-4`}>
                    <h2 className='text-2xl lg:text-5xl font-bold font-mono'><span className='text-[#558771]'>You’ll love</span> these too...</h2>
                </div>
                <div className="mt-10 py-4 flex gap-4 justify-evenly items-center flex-wrap">
                    {topLikedPlants.map((plant, index) => {
                        return (
                            <ShopPlantDisplay key={index} plant={plant} />
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default BuyNow