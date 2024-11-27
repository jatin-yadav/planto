import type { Metadata } from "next";
import { styles } from "../styles";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
    title: "Shop Plants: That You Like",
};

export default function BuyNowLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            <header className={`${styles.paddingX} py-8 bg-[#304d40] w-full`}>
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-baseline justify-center sm:justify-between">
                    <SectionHeader heading="Marble Queen Pothos" />
                    <p className="text-sm underline decoration-green-500 underline-offset-4 text-center">A popular houseplant that is known for its beautiful foliage.</p>
                </div>
            </header>
            {children}
        </section>
    );
}
