import React from 'react'
import { styles } from '../styles'
import ContactInfo from '@/components/ContactInfo'

const Contact = () => {
    return (
        <div className='bg-[#304d40] shadow-[#558771] shadow-md py-4'>
            <div className="flex justify-center items-center">
                <div className={`${styles.blureffect} ${styles.borderline} ${styles.paddingX} py-2 rounded-2xl flex flex-col justify-center items-center`}>
                    <h1 className={` text-2xl lg:text-3xl font-bold capitalize`}>Contact our friendly team</h1>
                    <h4 className='text-md font-thin py-2'>Let us know how we can help.</h4>
                </div>
            </div>

            <div className={`${styles.padding} `}>
                <div className={`rounded-3xl w-full flex justify-evenly gap-4 flex-wrap`}>
                    <ContactInfo />
                    <ContactInfo />
                    <ContactInfo />
                    <ContactInfo />
                </div>
            </div>
        </div>
    )
}

export default Contact