import { topSellingPlants } from "@/public/constants";
import SectionHeader from "./SectionHeader"
import TopSellingPlantCard from "./TopSellingPlantCard"


const TopSellingPlants = () => {
    return (
        <section className="bg-transparent pt-12">
            <SectionHeader heading="Our Top Selling" />
            <div className="py-8 flex gap-4 justify-around items-center flex-wrap">
                {topSellingPlants.map((plant, index) => {
                    return (
                        <TopSellingPlantCard key={index} plant={plant} />
                    )
                })}
            </div>
        </section>
    )
}

export default TopSellingPlants