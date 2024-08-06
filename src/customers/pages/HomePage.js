import { mens_kurta } from "../../Data/Mens/MensKurta"
import HomeSectionCarousel from "../components/Carousel/HomeSectionCarousel/HomeSectionCarousel"
import MainCarousel from "../components/Carousel/MainCarousel/MainCarousel"

function HomePage(){
    return <div>
        <div>
            <MainCarousel />
        </div>
        <div className="space-y-10 py-20 flex  flex-col justify-center px-5 lg:px-10">
            <HomeSectionCarousel products={mens_kurta} sectionName={`Men's Kurta`}/>
            <HomeSectionCarousel products={mens_kurta} sectionName={`Men's Shirt`}/>
            <HomeSectionCarousel products={mens_kurta} sectionName={`Men's Jeans`}/>
        </div>
    </div>
}

export default HomePage