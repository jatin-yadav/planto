import ReviewCarousel from "./Carousel/ReviewCarousel"
import SectionHeader from "./SectionHeader"

const CustomerReview = () => {
    return (
        <section className="bg-transparent pt-12">
            <SectionHeader heading="Customer Review" />
            <div className="py-8">
                <ReviewCarousel />
            </div>
        </section>
    )
}

export default CustomerReview