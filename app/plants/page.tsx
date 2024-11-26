'use client'

import React, { useState } from 'react'
import { styles } from '../styles';
import { Button } from '@/components/ui/button';
import { topSellingPlants } from '@/public/constants';
import TopSellingPlantCard from '@/components/TopSellingPlantCard';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ChevronDown, ChevronRight, CircleChevronDown, CircleChevronRight } from "lucide-react"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

const Plants = () => {
    const [isPriceOpen, setIsPriceOpen] = useState(false)
    const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(true)
    const [isIncludesOpen, setIsIncludesOpen] = useState(false)
    return (
        <section className={`${styles.paddingX} py-8 `}>
            <div className='grid grid-cols-12 py-4 gap-4'>
                <div className="col-span-12 lg:col-span-2">
                    <div className="bg-[#304d40] shadow-[#558771] shadow-md mb-8 p-2 rounded-md">
                        <Collapsible
                            open={isAllCategoriesOpen}
                            onOpenChange={setIsAllCategoriesOpen}
                            className="w-full"
                        >
                            <div className='text-sm flex justify-between items-center'>
                                <h5 className='font-semibold'>All Categories</h5>
                                <CollapsibleTrigger asChild>
                                    <Button variant="ghost" size="sm" className="w-9 p-0 hover:bg-transparent hover:text-white">
                                        {isAllCategoriesOpen ? <CircleChevronDown className="h-4 w-4" /> : <CircleChevronRight className="h-4 w-4" />}
                                        <span className="sr-only">Toggle</span>
                                    </Button>
                                </CollapsibleTrigger>
                            </div>
                            <CollapsibleContent className="space-y-2">
                                <div className="px-4 py-1 font-mono text-sm">
                                    <h6 className='flex items-center'><ChevronRight className="h-4 w-4" /><span>Indoor Plants</span></h6>
                                </div>
                                <div className="px-4 py-1 font-mono text-sm">
                                    <h6 className='flex items-center'><ChevronRight className="h-4 w-4" /><span>Outdoor Plants</span></h6>
                                </div>
                                <div className="px-4 py-1 font-mono text-sm">
                                    <h6 className='flex items-center'><ChevronRight className="h-4 w-4" /><span>Sun Requirments</span></h6>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                    <div className="bg-[#304d40] shadow-[#558771] shadow-md mb-8 p-2 rounded-md">
                        <Collapsible
                            open={isPriceOpen}
                            onOpenChange={setIsPriceOpen}
                            className="w-full"
                        >
                            <div className='text-sm flex justify-between items-center'>
                                <h5 className='font-semibold'>Price</h5>
                                <CollapsibleTrigger asChild>
                                    <Button variant="ghost" size="sm" className="w-9 p-0 hover:bg-transparent hover:text-white">
                                        {isPriceOpen ? <CircleChevronDown className="h-4 w-4" /> : <CircleChevronRight className="h-4 w-4" />}
                                        <span className="sr-only">Toggle</span>
                                    </Button>
                                </CollapsibleTrigger>
                            </div>
                            <CollapsibleContent className="space-y-2">
                                <div className='py-1'>
                                    <RadioGroup defaultValue="comfortable">
                                        <div className="flex items-center space-x-2 px-4 py-1">
                                            <RadioGroupItem value="default" id="pr1" className='border-white' />
                                            <Label htmlFor="pr1" className='font-mono text-sm'>Low to High</Label>
                                        </div>
                                        <div className="flex items-center space-x-2 px-4 py-1">
                                            <RadioGroupItem value="comfortable" id="pr2" className='border-white' />
                                            <Label htmlFor="pr2" className='font-mono text-sm'>High to Low</Label>
                                        </div>
                                        <div className="flex items-center space-x-2 px-4 py-1">
                                            <RadioGroupItem value="compact" id="pr3" className='border-white' />
                                            <Label htmlFor="pr3" className='font-mono text-sm'>Expensive</Label>
                                        </div>
                                        <div className="flex items-center space-x-2 px-4 py-1">
                                            <RadioGroupItem value="compact" id="pr4" className='border-white' />
                                            <Label htmlFor="pr4" className='font-mono text-sm'>Buget Ferindly</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                    <div className="bg-[#304d40] shadow-[#558771] shadow-md mb-8 p-2 rounded-md">
                        <Collapsible
                            open={isIncludesOpen}
                            onOpenChange={setIsIncludesOpen}
                            className="w-full"
                        >
                            <div className='text-sm flex justify-between items-center'>
                                <h5 className='font-semibold'>Includes</h5>
                                <CollapsibleTrigger asChild>
                                    <Button variant="ghost" size="sm" className="w-9 p-0 hover:bg-transparent hover:text-white">
                                        {isPriceOpen ? <CircleChevronDown className="h-4 w-4" /> : <CircleChevronRight className="h-4 w-4" />}
                                        <span className="sr-only">Toggle</span>
                                    </Button>
                                </CollapsibleTrigger>
                            </div>
                            <CollapsibleContent className="space-y-2">
                                <div className='py-1'>
                                    <RadioGroup defaultValue="comfortable">
                                        <div className="flex items-center space-x-2 px-4 py-1">
                                            <RadioGroupItem value="default" id="r1" className='border-white' />
                                            <Label htmlFor="r1" className='font-mono text-sm'>Planter</Label>
                                        </div>
                                        <div className="flex items-center space-x-2 px-4 py-1">
                                            <RadioGroupItem value="comfortable" id="r2" className='border-white' />
                                            <Label htmlFor="r2" className='font-mono text-sm'>Care</Label>
                                        </div>
                                        <div className="flex items-center space-x-2 px-4 py-1">
                                            <RadioGroupItem value="compact" id="r3" className='border-white' />
                                            <Label htmlFor="r3" className='font-mono text-sm'>Flowers</Label>
                                        </div>
                                        <div className="flex items-center space-x-2 px-4 py-1">
                                            <RadioGroupItem value="compact" id="r4" className='border-white' />
                                            <Label htmlFor="r4" className='font-mono text-sm'>Max O<sub>2</sub></Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-10">

                    <div className="flex items-center justify-end">
                        <div className='flex justify-center items-center flex-col w-full lg:w-fit'>
                            <Button variant="ghost" className='bg-[#304d40] shadow-[#558771] shadow-md w-full p-2'>Short By <ChevronDown className="h-4 w-4" /></Button>
                            <div>
                                <span className='text-xs'>Showing 100 products</span>
                            </div>
                        </div>
                    </div>
                    <div className="py-8 flex gap-4 justify-around items-center flex-wrap">
                        {topSellingPlants.map((plant, index) => {
                            return (
                                <TopSellingPlantCard key={index} plant={plant} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Plants;