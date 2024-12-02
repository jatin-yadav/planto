import { styles } from "@/app/styles"
import Link from "next/link"

const ContactInfo = ({ connect }: {
    connect: {
        contactIcon: React.JSX.Element,
        contactTeam: string,
        contactTagLine: string,
        contactMail: string,
    }
}) => {
    return (
        <section className={`${styles.blureffect} ${styles.borderline} p-6 rounded-3xl`}>
            <div className="p-1 border rounded-md w-fit">
                {connect.contactIcon}
            </div>
            <div className="flex flex-col mt-10">
                <h3 className="text-xl font-semibold py-1">{connect.contactTeam}</h3>
                <p className="text-sm font-extralight">{connect.contactTagLine}</p>
                <Link href={"s"} className="pt-2 underline underline-offset-4">{connect.contactMail}</Link>
            </div>
        </section>
    )
}

export default ContactInfo