import { Rose1, Rose2, Rose3, Rose4, TrendyRose1, TrendyRose2 } from "@/public/assets"
import SectionHeader from "./SectionHeader"
import TopSellingPlantCard from "./TopSellingPlantCard"

const topSellingPlants = [
    {
        plant_name: "Calathea plant",
        plant_desc: 'The Calathea plant is a popular indoor plant known for its strikingly patterned, vibrant leaves. It belongs to the Marantaceae family and is sometimes called a "prayer plant" due to its unique habit of folding its leaves upward at night, resembling hands in prayer. ',
        plant_img: Rose1,
        plant_price: 499
    },
    {
        plant_name: "Calathea plant",
        plant_desc: 'The Calathea plant is a popular indoor plant known for its strikingly patterned, vibrant leaves. It belongs to the Marantaceae family and is sometimes called a "prayer plant" due to its unique habit of folding its leaves upward at night, resembling hands in prayer. ',
        plant_img: Rose2,
        plant_price: 899
    },
    {
        plant_name: "Calathea plant",
        plant_desc: 'The Calathea plant is a popular indoor plant known for its strikingly patterned, vibrant leaves. It belongs to the Marantaceae family and is sometimes called a "prayer plant" due to its unique habit of folding its leaves upward at night, resembling hands in prayer. ',
        plant_img: Rose3,
        plant_price: 699
    },
    {
        plant_name: "Calathea plant",
        plant_desc: 'The Calathea plant is a popular indoor plant known for its strikingly patterned, vibrant leaves. It belongs to the Marantaceae family and is sometimes called a "prayer plant" due to its unique habit of folding its leaves upward at night, resembling hands in prayer. ',
        plant_img: Rose4,
        plant_price: 299
    },
    {
        plant_name: "Calathea plant",
        plant_desc: 'The Calathea plant is a popular indoor plant known for its strikingly patterned, vibrant leaves. It belongs to the Marantaceae family and is sometimes called a "prayer plant" due to its unique habit of folding its leaves upward at night, resembling hands in prayer. ',
        plant_img: TrendyRose1,
        plant_price: 999
    },
    {
        plant_name: "Calathea plant",
        plant_desc: 'The Calathea plant is a popular indoor plant known for its strikingly patterned, vibrant leaves. It belongs to the Marantaceae family and is sometimes called a "prayer plant" due to its unique habit of folding its leaves upward at night, resembling hands in prayer. ',
        plant_img: TrendyRose2,
        plant_price: 599
    },
]

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