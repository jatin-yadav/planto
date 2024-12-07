import { styles } from '../styles'

const AboutUs = () => {
    return (
        <div className='bg-[#304d40] shadow-[#558771] shadow-md py-4'>
            <div className="flex justify-center items-center">
                <div className={` border-b border-b-white/40 ${styles.paddingX} py-2 flex flex-col justify-center items-center`}>
                    <h1 className={` text-2xl lg:text-3xl font-bold capitalize`}>About Planto: Breath Natural</h1>
                    <h4 className='text-md font-thin py-2'>Inspired by the harmony of nature</h4>
                </div>
            </div>
        </div>
    )
}

export default AboutUs