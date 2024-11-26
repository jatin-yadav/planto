import type { Metadata } from "next";
import { styles } from "../styles";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
    title: "Shop Plants: That You Like",
};

export default function ContactLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            <header className={`${styles.paddingX} py-8 bg-[#304d40] w-full`}>
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-baseline justify-center sm:justify-between">
                    <SectionHeader heading="Contact" />
                    <p className="text-sm underline decoration-green-500 underline-offset-4">Connect with us to find the perfect plant of your choice</p>
                </div>
            </header>
            {children}
        </section>
    );
}
