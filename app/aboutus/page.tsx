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

                    <h1 className='text-2xl font-semibold'>From our hands to your home</h1>
                    <p>
                        Every plant you receive from us has been grown with love on our farm in Talegaon, just outside Pune. We nurture them for years before carefully packing and shipping them to your doorstep.
                    </p>
                    <p>
                        {`It's`} truly a labour of love and patience.
                    </p>
                </div>
                <div className=' w-full lg:w-1/2 flex justify-center items-center '>
                    <Image src={plant1} className='w-1/2' alt='plant' />
                </div>
            </div>
        </div>
    )
}

export default AboutUs