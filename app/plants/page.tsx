'use client'

import React, { useState } from 'react'
import { styles } from '../styles';
import { Button } from '@/components/ui/button';
import { topSellingPlants } from '@/public/constants';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ChevronDown, ChevronRight, CircleChevronDown, CircleChevronRight } from "lucide-react"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Checkbox } from '@/components/ui/checkbox';
import ShopPlantDisplay from '@/components/ShopPlantDisplay';

const Plants = () => {
    const [isPriceOpen, setIsPriceOpen] = useState(false)
    const [isAllCategoriesOpen, setIsAllCategoriesOpen] = useState(true)
    const [isIncludesOpen, setIsIncludesOpen] = useState(false)
    const [isLightBasedOpen, setIsLightBasedOpen] = useState(false)
    const [isSortOpen, setIsSortOpen] = useState(false)

    const [isIndoorPlantOpen, setIsIndoorPlantOpen] = useState(true)
    const [isOutdoorPlantOpen, setIsOutdoorPlantOpen] = useState(false)
    const [isFloweringPlantOpen, setIsFloweringPlantOpen] = useState(false)
    return (
        <section className={`${styles.paddingX} py-8 `}>
            <div className='grid grid-cols-12 py-4 gap-4'>
                <div className="col-span-12 sm:col-span-4 lg:col-span-2">
                    {/* ----------------------------------  All Categories  -------------------------------------------- */}
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
                                <div className="pl-4 py-1 font-mono text-sm">
                                    {/* ====================================================== INDOOR PLANTS ==================================== */}
                                    <div>
                                        <Collapsible
                                            open={isIndoorPlantOpen}
                                            onOpenChange={setIsIndoorPlantOpen}
                                            className="w-full"
                                        >
                                            <div className='text-sm flex justify-between items-center'>
                                                <h6 className='flex items-center'><span>Indoor Plants</span></h6>
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
                                                            Hanging Plants
                                                        </label>
                                                    </div>
                                                    <div className='flex items-center space-x-2 py-1'>
                                                        <Checkbox id="foliageplants" className='border-white data-[state=checked]:bg-zinc-50 data-[state=checked]:text-zinc-900' />
                                                        <label
                                                            htmlFor="foliageplants"
                                                            className="text-sm leading-none cursor-pointer peer-disabled:opacity-70"
                                                        >
                                                            Foliage Plants
                                                        </label>
                                                    </div>
                                                    <div className='flex items-center space-x-2 py-1'>
                                                        <Checkbox id="airpurifyingplants" className='border-white data-[state=checked]:bg-zinc-50 data-[state=checked]:text-zinc-900' />
                                                        <label
                                                            htmlFor="airpurifyingplants"
                                                            className="text-sm leading-none cursor-pointer peer-disabled:opacity-70"
                                                        >
                                                            Air-Purifying Plants
                                                        </label>
                                                    </div>
                                                    <div className='flex items-center space-x-2 py-1'>
                                                        <Checkbox id="succulentsandcacti" className='border-white data-[state=checked]:bg-zinc-50 data-[state=checked]:text-zinc-900' />
                                                        <label
                                                            htmlFor="succulentsandcacti"
                                                            className="text-sm leading-none cursor-pointer peer-disabled:opacity-70"
                                                        >
                                                            Succulents & Cacti
                                                        </label>
                                                    </div>
                                                </div>
                                            </CollapsibleContent>
                                        </Collapsible>
                                    </div>
                                    {/* ========================================================================================================== */}
                                </div>
                                <div className="pl-4 py-1 font-mono text-sm">
                                    {/* ====================================================== Outdoor PLANTS ==================================== */}
                                    <div>
                                        <Collapsible
                                            open={isOutdoorPlantOpen}
                                            onOpenChange={setIsOutdoorPlantOpen}
                                            className="w-full"
                                        >
                                            <div className='text-sm flex justify-between items-center'>
                                                <h6 className='flex items-center'><span>Outdoor Plants</span></h6>
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
                                    {/* ====================================================== Flowering PLANTS ==================================== */}
                                    <div>
                                        <Collapsible
                                            open={isFloweringPlantOpen}
                                            onOpenChange={setIsFloweringPlantOpen}
                                            className="w-full"
                                        >
                                            <div className='text-sm flex justify-between items-center'>
                                                <h6 className='flex items-center'><span>Flowering Plants</span></h6>
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
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                    {/* ----------------------------------  Price  -------------------------------------------- */}
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
                                    <RadioGroup defaultValue="premium">
                                        <div className="flex items-center space-x-2 px-4 py-1">
                                            <RadioGroupItem value="bugetferindly" id="pr1" className='border-white' />
                                            <Label htmlFor="pr1" className='font-mono text-sm'>Buget-Ferindly</Label>
                                        </div>
                                        <div className="flex items-center space-x-2 px-4 py-1">
                                            <RadioGroupItem value="midrange" id="pr2" className='border-white' />
                                            <Label htmlFor="pr2" className='font-mono text-sm'>Mid-Range</Label>
                                        </div>
                                        <div className="flex items-center space-x-2 px-4 py-1">
                                            <RadioGroupItem value="premium" id="pr3" className='border-white' />
                                            <Label htmlFor="pr3" className='font-mono text-sm'>Premium</Label>
                                        </div>
                                        <div className="flex items-center space-x-2 px-4 py-1">
                                            <RadioGroupItem value="luxury" id="pr4" className='border-white' />
                                            <Label htmlFor="pr4" className='font-mono text-sm'>Luxury</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                    {/* ---------------------------------- Light Based  -------------------------------------------- */}
                    <div className="bg-[#304d40] shadow-[#558771] shadow-md mb-8 p-2 rounded-md">
                        <Collapsible
                            open={isLightBasedOpen}
                            onOpenChange={setIsLightBasedOpen}
                            className="w-full"
                        >
                            <div className='text-sm flex justify-between items-center'>
                                <h5 className='font-semibold'>Light Based</h5>
                                <CollapsibleTrigger asChild>
                                    <Button variant="ghost" size="sm" className="w-9 p-0 hover:bg-transparent hover:text-white">
                                        {isLightBasedOpen ? <CircleChevronDown className="h-4 w-4" /> : <CircleChevronRight className="h-4 w-4" />}
                                        <span className="sr-only">Toggle</span>
                                    </Button>
                                </CollapsibleTrigger>
                            </div>
                            <CollapsibleContent className="space-y-2">
                                <div className='py-1'>
                                    <RadioGroup defaultValue="lowlight">
                                        <div className="flex items-center space-x-2 px-4 py-1">
                                            <RadioGroupItem value="lowlight" id="lr1" className='border-white' />
                                            <Label htmlFor="lr1" className='font-mono text-sm'>Low Light</Label>
                                        </div>
                                        <div className="flex items-center space-x-2 px-4 py-1">
                                            <RadioGroupItem value="midlight" id="lr2" className='border-white' />
                                            <Label htmlFor="lr2" className='font-mono text-sm'>Medium Light</Label>
                                        </div>
                                        <div className="flex items-center space-x-2 px-4 py-1">
                                            <RadioGroupItem value="indirectlight" id="lr3" className='border-white' />
                                            <Label htmlFor="lr3" className='font-mono text-sm'>Indirect Light</Label>
                                        </div>
                                        <div className="flex items-center space-x-2 px-4 py-1">
                                            <RadioGroupItem value="fullsun" id="lr4" className='border-white' />
                                            <Label htmlFor="lr4" className='font-mono text-sm'>Full Sun</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                    {/* ----------------------------------  Includes  -------------------------------------------- */}
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
                                    <RadioGroup defaultValue="highmaintenance">
                                        <div className="flex items-center space-x-2 px-4 py-1">
                                            <RadioGroupItem value="lowmaintenance" id="ir1" className='border-white' />
                                            <Label htmlFor="ir1" className='font-mono text-sm'>Low Maintenance</Label>
                                        </div>
                                        <div className="flex items-center space-x-2 px-4 py-1">
                                            <RadioGroupItem value="highmaintenance" id="ir2" className='border-white' />
                                            <Label htmlFor="ir2" className='font-mono text-sm'>High Maintenance</Label>
                                        </div>
                                        <div className="flex items-center space-x-2 px-4 py-1">
                                            <RadioGroupItem value="airpurifying" id="ir3" className='border-white' />
                                            <Label htmlFor="ir3" className='font-mono text-sm'>Air-Purifying</Label>
                                        </div>
                                        <div className="flex items-center space-x-2 px-4 py-1">
                                            <RadioGroupItem value="maxo2" id="ir4" className='border-white' />
                                            <Label htmlFor="ir4" className='font-mono text-sm'>Max O<sub>2</sub></Label>
                                        </div>
                                        <div className="flex items-center space-x-2 px-4 py-1">
                                            <RadioGroupItem value="petfriendly" id="ir5" className='border-white' />
                                            <Label htmlFor="ir5" className='font-mono text-sm'>Pet-Friendly</Label>
                                        </div>
                                        <div className="flex items-center space-x-2 px-4 py-1">
                                            <RadioGroupItem value="fragrant" id="ir5" className='border-white' />
                                            <Label htmlFor="ir5" className='font-mono text-sm'>Fragrant</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-8 lg:col-span-10">
                    <div className="flex items-center justify-end relative">
                        <div className='flex justify-center items-center flex-col lg:w-fit  absolute top-0 right-0 z-10 w-full'>
                            {/* ----------------------------------  Sort By  -------------------------------------------- */}
                            <div className="bg-[#304d40] shadow-[#558771] shadow-md p-2 rounded-md w-full">
                                <Collapsible
                                    open={isSortOpen}
                                    onOpenChange={setIsSortOpen}
                                    className="min-w-52"
                                >
                                    <div className='text-sm flex justify-between items-center'>
                                        <h5 className='font-semibold'>Sort By</h5>
                                        <CollapsibleTrigger asChild>
                                            <Button variant="ghost" size="sm" className="w-9 p-0 hover:bg-transparent hover:text-white">
                                                {isSortOpen ? <CircleChevronDown className="h-4 w-4" /> : <CircleChevronRight className="h-4 w-4" />}
                                                <span className="sr-only">Toggle</span>
                                            </Button>
                                        </CollapsibleTrigger>
                                    </div>
                                    <CollapsibleContent className="space-y-2">
                                        <div className='py-1'>
                                            <RadioGroup defaultValue="comfortable">
                                                <div className="flex items-center space-x-2 px-4 py-1">
                                                    <RadioGroupItem value="popularity" id="sr1" className='border-white' />
                                                    <Label htmlFor="sr1" className='font-mono text-sm'>Popularity</Label>
                                                </div>
                                                <div className="flex items-center space-x-2 px-4 py-1">
                                                    <RadioGroupItem value="ascending" id="sr2" className='border-white' />
                                                    <Label htmlFor="sr2" className='font-mono text-sm'>Ascending</Label>
                                                </div>
                                                <div className="flex items-center space-x-2 px-4 py-1">
                                                    <RadioGroupItem value="descending" id="sr3" className='border-white' />
                                                    <Label htmlFor="sr3" className='font-mono text-sm'>Descending</Label>
                                                </div>
                                                <div className="flex items-center space-x-2 px-4 py-1">
                                                    <RadioGroupItem value="trending" id="sr4" className='border-white' />
                                                    <Label htmlFor="sr4" className='font-mono text-sm'>Trending</Label>
                                                </div>
                                                <div className="flex items-center space-x-2 px-4 py-1">
                                                    <RadioGroupItem value="lowtohigh" id="sr5" className='border-white' />
                                                    <Label htmlFor="sr5" className='font-mono text-sm'>Low to High</Label>
                                                </div>
                                                <div className="flex items-center space-x-2 px-4 py-1">
                                                    <RadioGroupItem value="hightolow" id="sr6" className='border-white' />
                                                    <Label htmlFor="sr6" className='font-mono text-sm'>High to Low</Label>
                                                </div>
                                            </RadioGroup>
                                        </div>
                                    </CollapsibleContent>
                                </Collapsible>
                            </div>
                            <div className='py-2'>
                                <span className='text-xs'>Showing 100 products</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 py-8 flex gap-4 justify-evenly items-center flex-wrap">
                        {topSellingPlants.map((plant, index) => {
                            return (
                                <ShopPlantDisplay key={index} plant={plant} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Plants;