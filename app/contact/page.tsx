import React from 'react'
import { styles } from '../styles'
import ContactInfo from '@/components/ContactInfo'
import Image from 'next/image'
import { mapImg } from '@/public/assets'
import { Clock, Flower2, MapPin, MessagesSquare, Phone, SmileIcon } from 'lucide-react'

const contactDetails = [
    { contactIcon: <SmileIcon />, contactTeam: "Chat to sales", contactTagLine: "Speak to our friendly team.", contactMail: "sales@planto.com" },
    { contactIcon: <MessagesSquare />, contactTeam: "Chat to support", contactTagLine: "We're here to help.", contactMail: "support@planto.com" },
    { contactIcon: <Flower2 />, contactTeam: "Plant Care", contactTagLine: "Connect to get Care help.", contactMail: "plantcare@planto.com" },
    { contactIcon: <Phone />, contactTeam: "Call Us", contactTagLine: "Mon-Fri from 8am to 5pm", contactMail: "+91 9996663330" }
]

const Contact = () => {
    return (
        <div className='bg-[#304d40] shadow-[#558771] shadow-md py-4'>
            <div className="flex justify-center items-center">
                <div className={` border-b border-b-white/40 ${styles.paddingX} py-2 flex flex-col justify-center items-center`}>
                    <h1 className={` text-2xl lg:text-3xl font-bold capitalize`}>Contact our friendly team</h1>
                    <h4 className='text-md font-thin py-2'>Let us know how we can help.</h4>
                </div>
            </div>

            <div className={`${styles.padding} `}>
                <div className={`rounded-3xl w-full flex justify-evenly gap-4 flex-wrap`}>
                    {contactDetails.map((connect, index) => {
                        return (
                            <ContactInfo key={index} connect={connect} />
                        )
                    })}
                </div>
                <div className={`flex flex-col lg:flex-row ${styles.paddingY}`}>
                    <div className='w-full lg:w-1/2 py-6 flex flex-col justify-center items-center'>
                        <h4 className='text-2xl font-semibold underline decoration-green-500 underline-offset-4 text-center py-2'>Have a Question? Reach Us!</h4>
                        <Image src={mapImg} className='w-3/5' alt='mapImg' />
                        <div>

                            <p className='flex items-center gap-4 pt-4'>
                                <Clock className='' /> Opening Hours<br />
                                Mon - Sat: 7.00 am - 8.00 pm<br />
                                Sunday: 8.00 am — 6.00 pm
                            </p>
                            <p className='flex items-center gap-4 pt-4'>
                                <MapPin className='' /> Our Office<br />
                                Phase 1, Sector 28, Sushant Lok<br />
                                Gurugram, Haryana 122002
                            </p>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 p-4 '>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119784.56401601624!2d76.90997990091154!3d28.50938392749314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1940daf6a4d7%3A0x951cd6ca532055a3!2sPlants%20Cart%20%7C%20Online%20Plants%20Delivery%20in%20Delhi-NCR!5e0!3m2!1sen!2sin!4v1733142246648!5m2!1sen!2sin" className='w-full h-full min-h-96 rounded-xl' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact