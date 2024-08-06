import React, { useRef, useState } from "react";
import HomeSectionCard from "../../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import { KeyboardArrowLeft } from "@mui/icons-material";
import { Button } from "@mui/material";

const responsive = {
    0: { items: 1 },
    760: { items: 2 },
    1024: { items: 4 },
};



function HomeSectionCarousel(props) {

    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const slidePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.slidePrev();
        }
    };
    const slideNext = () => {
        if (carouselRef.current) {
            carouselRef.current.slideNext();
        }
    };

    const syncActiveIndex = ({item}) => setActiveIndex(item)

    const items = props.products.slice(0, 10).map((item) => <HomeSectionCard item={item} />)


    return <div className="border">
        <h2 className="text-2xl font-extrabold text-gray-800 py-5 text-left ml-5">{props.sectionName}</h2>
        <div className="relative p-5">
            <AliceCarousel
                items={items}
                ref={carouselRef}
                // autoPlay
                // autoPlayInterval={1500}
                disableButtonsControls
                disableDotsControls
                responsive={responsive}
                onSlideChanged={syncActiveIndex}
                activeIndex={activeIndex} />

                { activeIndex !== items.length-5 && < Button variant='contained' className='z-50 bg-white'
                        sx={{
                            position: 'absolute', top: '8rem', right: '0rem',
                            transform: 'translateX(50%) rotate(90deg)', bgcolor: "white",
                        }}
                        aria-label="next" onClick={slideNext}>
                        <KeyboardArrowLeft sx={{ transform: 'rotate(90deg)', color: "black" }} />
                    </Button>
                }

                { activeIndex !== 0 &&   <Button variant='contained' className='z-50 bg-white'
                        sx={{
                            position: 'absolute', top: '8rem', left: '0rem',
                            transform: 'translateX(-50%) rotate(-90deg)', bgcolor: "white",
                        }}
                        aria-label="previous" onClick={slidePrev}>
                        <KeyboardArrowLeft sx={{ transform: 'rotate(90deg)', color: "black" }} />
                    </Button>
                }
        </div>
    </div>
}

export default HomeSectionCarousel