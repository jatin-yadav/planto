import { styles } from "@/app/styles"
import { SmileIcon } from "lucide-react"
import Link from "next/link"

const ContactInfo = () => {
    return (
        <section className={`${styles.blureffect} ${styles.borderline} p-6 rounded-3xl`}>
            <div className="p-1 border rounded-md w-fit">
                <SmileIcon />
            </div>
            <div className="flex flex-col mt-10">
                <h3 className="text-xl font-semibold py-1">Chat to sales</h3>
                <p className="text-sm font-extralight"> Speak to our friendly team.</p>
                <Link href={"s"} className="pt-2 underline underline-offset-4">sales@planto.com</Link>
            </div>
        </section>
    )
}

export default ContactInfo