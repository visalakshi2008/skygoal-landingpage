import React from 'react';
import { Col, Row, Typography, Image } from 'antd';
import test1 from '../images/test1.png';
import test2 from '../images/test2.png';
import test3 from '../images/test3.png';

const testimonialData = [
    { image: test1, name: 'Jakob Aminoff', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
    { image: test2, name: 'Carla Press', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
    { image: test3, name: 'Corey Korsgaard', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
];

const Testimonials = () => {
    return (
        <>
            <Row>
                <Col span={24} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography style={{ paddingTop: '150px', fontSize: '40px', fontWeight: 500, paddingBottom: '70px' }}>
                        Testimonials
                    </Typography>
                </Col>

                {testimonialData.map((testimonial, index) => (
                    <Col
                        key={index}
                        span={8}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <Image src={testimonial.image} width={100} />
                        <div style={{ marginTop: '12px', textAlign: 'center' }}>
                            <Typography style={{ fontSize: "16px" }}>{testimonial.name}</Typography>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <hr style={{ width: '100%', margin: '12px 0px' }} />
                            </div>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                textAlign: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '60%',
                                fontSize: "16px",
                                fontWeight: 400,
                                color: "black",
                                paddingBottom: "246px"
                            }}
                        >
                            {testimonial.text}
                        </div>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Testimonials;
