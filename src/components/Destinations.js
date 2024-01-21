
import React, { useRef, useState } from 'react';
import { Row, Col, Typography, Image, Carousel, Button } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import slide1 from '../images/slide1.png';
import slide3 from '../images/slide3.png';
import slide4 from '../images/slide4.png';
import leftArrow from '../images/leftArrow.png';
import rightArrow from '../images/rightArrow.png';

const destinationsData = [
  {
    image: slide1,
    title: 'Harvard University',
    location: 'Cambridge, Massachusetts, UK',
  },
  {
    image: slide4,
    title: 'Oxford, England',
    location: 'Oxford University',
  },
  {
    image: slide3,
    title: 'Stanford, California',
    location: 'Stanford University',
  },
  {
    image: slide4,
    title: 'Nanyang Ave, Singapura',
    location: 'Nanyang Technological University',
  },
  {
    image: slide1,
    title: 'Oxford, England',
    location: 'Oxford University',
  },
  {
    image: slide3,
    title: 'Stanford, California',
    location: 'Stanford University',
  },
  {
    image: slide4,
    title: 'Harvard University',
    location: 'Cambridge, Massachusetts, UK',
  },
  {
    image: slide3,
    title: 'Oxford, England',
    location: 'Oxford University',
  },
];

const Destinations = () => {
  const carouselRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleNext = () => {
    carouselRef.current.next();
  };

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleAfterChange = (current) => {
    setCurrentSlide(current + 1);
  };

  return (
    <>
      <Row gutter={[16, 16]} style={{ marginTop: '50px' }}>
        <Col span={24}>
          <Carousel
            autoplay
            slidesToShow={4}
            responsive={[
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 550,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
            nextArrow={<Image src={rightArrow} alt="right-arrow" onClick={handleNext} />}
            prevArrow={<Image src={leftArrow} alt="left-arrow" onClick={handlePrev} />}
            ref={carouselRef}
            afterChange={handleAfterChange}
          >
            {destinationsData.map((destination, index) => (
              <div key={index} style={{ width: '100%' }}>
                <div style={{ backgroundColor: '#F2F2F2', padding: '16px', width: '100%' }}>
                  <Image src={destination.image} alt="destination-image" preview={false} width="100%" height="100%" />
                  <Typography style={{ fontSize: '20px', fontWeight: 700, paddingBlock: '12px' }}>
                    {destination.title}
                  </Typography>
                  <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#fff' }}>
                    <Typography style={{ fontSize: '14px', fontWeight: 500 }}>{destination.location}</Typography>
                    <MoreOutlined />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              textAlign: 'center',
              alignItems: 'center',
              overflowX: 'auto',
              maxWidth: '100%',
            }}
          >
            <Button
              style={{
                backgroundColor: "none",
                border: "none",
                justifyContent: "center",
                alignItems: "center",
                display: "flex"
              }}
            >
              <Image src={leftArrow} alt="left-arrow" onClick={handlePrev} preview={false} />
            </Button>

            <Typography>{`${currentSlide}/${destinationsData.length}`}</Typography>

            <Button
              style={{
                backgroundColor: "none",
                border: "none",
                justifyContent: "center",
                alignItems: "center",
                display: "flex"
              }}
            >
              <Image src={rightArrow} alt="right-arrow" onClick={handleNext} preview={false} />
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Destinations;
