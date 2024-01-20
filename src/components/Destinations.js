import React from 'react';
import { Row, Col, Typography, Image } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import slide1 from '../images/slide1.png';
import slide2 from '../images/slide2.png';
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
        image: slide3,
        title: 'Oxford, England',
        location: 'Oxford University',
    },
    {
        image: slide4,
        title: 'Stanford, California',
        location: 'Stanford University',
    },
    {
        image: slide2,
        title: 'Nanyang Ave, Singapura',
        location: 'Nanyang Technological University',
    },
];

const Destinations = () => {
    return (
        <>
            <Row>
                <Col span={24} style={{ paddingTop: '271px' }}>
                    <Typography>Our Destinations</Typography>
                </Col>
                <Col span={24} style={{ display: 'flex', gap: '20px' }}>
                    {destinationsData.map((destination, index) => (
                        <div key={index} style={{ backgroundColor: '#F2F2F2' }}>
                            <Image src={destination.image} preview={false} width="100%" />
                            <Typography style={{ fontSize: '25px', fontWeight: 900, paddingBlock: '25px' }}>
                                {destination.title}
                            </Typography>
                            <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#fff' }}>
                                <Typography style={{ fontSize: '14px', fontWeight: 500 }}>{destination.location}</Typography>
                                <MoreOutlined />
                            </div>
                        </div>
                    ))}
                </Col>
                <Col span={24}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '20px',
                            textAlign: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image src={leftArrow} />
                        <Typography>2</Typography>
                        <Image src={rightArrow} />
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Destinations;
