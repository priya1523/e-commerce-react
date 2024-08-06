import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {mainCarouselData} from './MainCarouselData';

const items = mainCarouselData.map((item) => {
    return <img src={item.image} alt=''/> 
});

const MainCarousel = () => (
    <AliceCarousel
        items={items}
        autoPlay
        autoPlayInterval={1500}
        disableButtonsControls
        infinite
    />
)

export default MainCarousel