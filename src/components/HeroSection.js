import React from 'react'
import { Row, Col, Image, Typography, Button } from 'antd'
import boyImage from "../images/boyWithBooks.png"
import girlWithBag from "../images/girlWithBag.png"
import girl2 from "../images/girl2.png"
import girl3 from "../images/girl3.png"
const HeroSection = () => {
    return (
        <>

            <Row style={{
                paddingTop: "56px",
                display: "flex",
                alignItems: "center"
            }}>

                <Col xl={12}>

                    <Typography style={{ color: "black", fontSize: "20px", fontWeight: 700, fontFamily: "Poppins" }}>
                        Discover the beauty of the tropics
                    </Typography>
                    <Typography style={{
                        fontSize: "80px",
                        fontFamily: "Poppins", fontWeight: 700,
                        lineHeight: "100px",
                    }}>
                        Tropical Destinations <br />
                        <span>For Student</span>
                    </Typography>
                    <Typography style={{ paddingBlock: "50px" }}>
                        Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer<br /> rutrum nisi. A nec nisl vitae
                    </Typography>

                    <Button style={{
                        backgroundColor: "#F27A44",
                        border: "none", borderRadius: "30px",
                        paddingBlock: "16px",
                        paddingLeft: "32px",
                        paddingRight: "32px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff"
                    }}
                    >SIGN UP</Button>
                </Col>
                <Col span={12}>
                    <Image src={boyImage}
                        width={581} preview={false}
                    />
                </Col>
            </Row >



            <Row style={{ paddingTop: "448px", }}>
                <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 8 }} sm={{ span: 24 }} >

                    <div style={{ paddingLeft: "147px" }} >
                        <div style={{
                            width: "100%",
                            display: "flex", alignItems: "center",
                            marginRight: '16px',
                            // backgroundColor: "red",
                            paddingBlock: "25px",
                            paddingLeft: "25px",
                            paddingRight: "25px",

                        }}>
                            <Image src={girlWithBag} preview={false} width={80} />
                            <div>
                                <Typography style={{
                                    fontSize: "18px",
                                    fontWeight: 500,
                                    fontFamily: "roboto",
                                    paddingLeft: "10px"
                                }}>Jenny Wilson</Typography>
                                <Typography style={{ fontSize: "16px", lineHeight: "23px", paddingLeft: "10px" }}>Lorem ipsum dolor sit amet,<br />consectetur adipiscing...</Typography>
                            </div>
                        </div>

                        <div style={{
                            display: "flex", alignItems: "center",
                            marginRight: '16px',
                            // backgroundColor: "red",
                            paddingBlock: "25px",
                            paddingLeft: "25px",
                            paddingRight: "25px",
                            marginTop: "50px", width: "75%",
                        }}>
                            <Image src={girl2} preview={false} width={80} />
                            <div>
                                <Typography style={{
                                    fontSize: "18px", fontWeight
                                        : 500, fontFamily: "roboto", paddingLeft: "10px"
                                }}>Jenny Wilson</Typography>
                                <Typography style={{ fontSize: "16px", lineHeight: "23px", paddingLeft: "10px" }}>Lorem ipsum dolor sit amet,<br />consectetur adipiscing...</Typography>
                            </div>
                        </div>

                        <div style={{
                            display: "flex", alignItems: "center",
                            // backgroundColor: "red",
                            paddingBlock: "25px",
                            paddingLeft: "25px",
                            paddingRight: "25px",
                            marginTop: "50px", width: "75%",
                        }}>
                            <Image src={girl3} alt="girl-with-bag" preview={false} width={80} />
                            <div>
                                <Typography style={{
                                    fontSize: "18px", fontWeight: 500,
                                    fontFamily: "roboto", paddingLeft: "10px"
                                }}>Jenny Wilson</Typography>
                                <Typography style={{ fontSize: "16px", lineHeight: "23px", paddingLeft: "10px" }}>Lorem ipsum dolor sit amet,<br />consectetur adipiscing...</Typography>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 24 }} sm={{ span: 24 }}>

                    <div style={{ float: "right" }} >
                        <Typography style={{ fontSize: "40px", fontWeight: 600, fontFamily: "inter" }}>Tropical Adventure
                        </Typography>
                        <Typography style={{ fontSize: "30px" }}>for Students.</Typography>
                        <Typography
                            style={{ fontSize: "20px", fontWeight: 500, fontFamily: "inter" }}>Student Tropical Vacation: Relax and Recharge
                        </Typography>
                        <ul style={{ paddingTop: "20px" }}>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Massa quis natoque sit quam</li>
                            <li>Eros non pellentesque elit </li>
                            <li>tortor id euismod habitant</li>
                            <li>Sed suspendisse id in ultrices</li>
                        </ul>
                        <Button style={{
                            backgroundColor: "#F27A44",
                            border: "none", borderRadius: "30px",
                            paddingBlock: "16px",
                            paddingLeft: "50px",
                            paddingRight: "50px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "#fff",
                            marginTop: "60px",
                            textAlign: "center"
                        }}
                        >Explore More</Button>
                    </div>
                </Col>
            </Row>

        </>
    )
}

export default HeroSection
