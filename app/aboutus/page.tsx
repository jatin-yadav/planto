import Image from 'next/image'
import { styles } from '../styles'
import { plant1 } from '@/public/assets'

const AboutUs = () => {
    return (
        <div className='bg-[#304d40] shadow-[#558771] shadow-md py-4'>
            <div className="flex justify-center items-center">
                <div className={` border-b border-b-white/40  py-2 flex flex-col justify-center items-center`}>
                    <h1 className={` text-2xl lg:text-3xl font-bold capitalize`}>About Planto: Breath Natural</h1>
                    <h4 className='text-md font-thin py-2'>Inspired by the harmony of nature</h4>
                </div>
            </div>

            <div className={`${styles.padding} flex flex-col-reverse lg:flex-row`}>
                <div className='w-full lg:w-1/2'>

                    <h1 className='text-2xl font-semibold py-4 underline underline-offset-8 decoration-green-500 '>From our hands to your home</h1>
                    <p className='pb-2'>
                        Every plant you welcome into your home is more than just greenery; it’s a piece of our heart. Grown with dedication on our serene farm in Talegaon, just outside Pune, each plant starts its journey as a tiny sapling, nurtured with care and patience. For years, we provide them with the perfect balance of sunlight, water, and nutrients, fostering their growth in harmony with nature.
                    </p>
                    <p className='pb-2'>
                        Our commitment goes beyond growing plants; it’s about creating a connection between you and the beauty of nature. Once a plant is ready to flourish in its new home, we handle it with the utmost care, meticulously packing and shipping it to ensure it reaches you in pristine condition.
                    </p>
                    <p className='pb-2'>
                        At the core of our work is a passion for sustainability, love for greenery, and a belief in the power of plants to transform spaces and lives. From our hands to your home, every plant is a labor of love, patience, and a deep respect for nature—because we believe that every home deserves a touch of green magic.
                    </p>
                    <p>contact : +91 12300456</p>
                </div>
                <div className=' w-full lg:w-1/2 flex justify-center items-center '>
                    <Image src={plant1} className='w-1/2' alt='plant' />
                </div>
            </div>
        </div>
    )
}

export default AboutUs