import React from 'react'
import { Row, Col, Typography, Image, Card } from "antd"
// import CustomCarousel from './CustomCarousel'
import slide1 from "../images/slide1.png"
import slide2 from "../images/slide2.png"
import slide3 from "../images/slide3.png"
import slide4 from "../images/slide4.png"
import { LeftOutlined, MoreOutlined } from '@ant-design/icons'


const Destinations = () => {
    return (
        <>
            <Row>
                <Col span={24} style={{ paddingTop: "271px" }}>
                    <Typography>Our Destinations</Typography>

                </Col>
                <Col span={24} style={{ display: "flex", gap: "20px" }}>

                    <div style={{ backgroundColor: "#F2F2F2" }}>
                        <Image src={slide1} preview={false} width="100%" />
                        <Typography style={{
                            fontSize: "25px",
                            fontWeight: 900,
                            paddingBlock: "25px",
                        }}>Harvard University</Typography>


                        <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#fff" }}>
                            <Typography style={{ fontSize: "14px", fontWeight: 500 }}>Cambridge, Massachusetts, UK</Typography>
                            <MoreOutlined />
                        </div>
                    </div>



                    <div style={{ backgroundColor: "#F2F2F2" }}>
                        <Image src={slide3} preview={false} width="100%" />
                        <Typography style={{
                            fontSize: "25px",
                            fontWeight: 900,
                            paddingBlock: "25px",
                        }}>Oxford, England</Typography>


                        <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#fff" }}>
                            <Typography style={{ fontSize: "14px", fontWeight: 500 }}>Oxford University</Typography>
                            <MoreOutlined />
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#F2F2F2" }}>
                        <Image src={slide4} preview={false} width="100%" />
                        <Typography style={{
                            fontSize: "25px",
                            fontWeight: 900,
                            paddingBlock: "25px",
                        }}>Stanford, California</Typography>


                        <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#fff" }}>
                            <Typography style={{ fontSize: "14px", fontWeight: 500 }}>Stanford University</Typography>
                            <MoreOutlined />
                        </div>
                    </div>
                    <div style={{ backgroundColor: "#F2F2F2" }}>
                        <Image src={slide2} preview={false} width="100%" />
                        <Typography style={{
                            fontSize: "20px",
                            fontWeight: 900,
                            paddingBlock: "25px",
                        }}>Nanyang Ave, Singapura</Typography>


                        <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#fff" }}>
                            <Typography style={{ fontSize: "14px", fontWeight: 500 }}>Nanyang Technological University</Typography>
                            <MoreOutlined />
                        </div>
                    </div>

                    <div style={{ paddingTop: "70px" }}><LeftOutlined /></div>
                </Col>
            </Row >
        </>
    )
}

export default Destinations
