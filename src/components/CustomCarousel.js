import React from 'react'
import { Carousel, Image } from 'antd';
import slide1 from "../images/slide1.png"
import slide2 from "../images/slide2.png"
import slide3 from "../images/slide3.png"
import slide4 from "../images/slide4.png"
import Typography from 'antd/es/typography/Typography';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',

};
const carouselSettings = {
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
};
const CustomCarousel = () => {
    return (
        <>

            <Carousel autoplay  {...carouselSettings}>

                <div style={{ display: "flex" }}>

                    <Image src={slide2} alt="image1" preview={false} width="20%  " />
                    <Image src={slide3} alt="image2" preview={false} width="20%  " />
                    <Image src={slide4} alt="image3" preview={false} width="20%  " />
                    <Image src={slide2} alt="image4" preview={false} width="20%  " />
                    <Image src={slide3} alt="image5" preview={false} width="20%  " />
                    <Image src={slide4} alt="image6" preview={false} width="20%  " />
                    <Image src={slide1} alt="image7" preview={false} width="20%  " />
                    <Image src={slide2} alt="image8" preview={false} width="20%  " />
                    <Image src={slide3} alt="image9" preview={false} width="20%  " />
                    <Image src={slide4} alt="image10" preview={false} width="20%  " />
                </div>

            </Carousel>
        </>
    )
}

export default CustomCarousel

