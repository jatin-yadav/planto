import type { Metadata } from "next";
import { styles } from "../styles";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
    title: "Planto. Breath Natural",
    description: "Create Jatin Rao",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            <header className={`${styles.paddingX} py-8 bg-[#304d40] w-full`}>
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-baseline justify-center sm:justify-between">
                    <SectionHeader heading="Shop" />
                    <p className="text-sm underline decoration-green-500 underline-offset-4">Find the perfect plant for your space</p>
                </div>
            </header>
            {children}
        </section>
    );
}
