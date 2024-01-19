import React from 'react'
import { Carousel, Image } from 'antd';
import slide1 from "../images/slide1.png"
import slide2 from "../images/slide2.png"
import slide3 from "../images/slide3.png"
import slide4 from "../images/slide4.png"
import slide5 from "../images/slide5.png"
import slide6 from "../images/slide6.png"
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    // background: '#364d79',
};
const carouselSettings = {
    autoplay: true,
    slidesToShow: 4, // Display 4 images at a time
    slidesToScroll: 1,
    infinite: true,
};
const CustomCarousel = () => {
    return (
        <>
            <Carousel autoplay  {...carouselSettings}>
                <div style={{ display: "flex" }}>
                    {/* <h3 style={contentStyle}>1</h3> */}
                    <Image src={slide2} preview={false} width="20%  " />
                    <Image src={slide3} preview={false} width="20%  " />
                    <Image src={slide4} preview={false} width="20%  " />
                    <Image src={slide2} preview={false} width="20%  " />
                    <Image src={slide3} preview={false} width="20%  " />
                    <Image src={slide4} preview={false} width="20%  " />
                    <Image src={slide1} preview={false} width="20%  " />
                    <Image src={slide2} preview={false} width="20%  " />
                    <Image src={slide3} preview={false} width="20%  " />
                    <Image src={slide4} preview={false} width="20%  " />
                </div>

            </Carousel>
        </>
    )
}

export default CustomCarousel
// import React from 'react';
// import { Carousel, Image } from 'antd';
// import slide1 from "../images/slide1.png";
// import slide2 from "../images/slide2.png";
// import slide3 from "../images/slide3.png";
// import slide4 from "../images/slide4.png";

// const CustomCarousel = () => {
//     return (
//         <Carousel autoplay>
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//                 <Image src={slide1} preview={false} width="20%" />
//                 <Image src={slide2} preview={false} width="20%" />
//                 <Image src={slide3} preview={false} width="20%" />
//                 <Image src={slide4} preview={false} width="20%" />
//                 <Image src={slide1} preview={false} width="20%" />
//                 <Image src={slide2} preview={false} width="20%" />
//                 <Image src={slide3} preview={false} width="20%" />
//             </div>
//         </Carousel>
//     );
// };

// export default CustomCarousel;
