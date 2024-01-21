import React from 'react'
import { Row, Col, Image, Typography, Button } from 'antd'

import "../../src/styles/custom.module.css"
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
                    <Typography className="tropical-heading" style={{
                        fontSize: "4.3rem",
                        fontFamily: "Poppins",
                        fontWeight: 700,
                        lineHeight: "100px",
                    }}
                    >
                        Tropical Destinations <br />
                        <Typography style={{ fontWeight: 400, fontSize: "80px" }}>For Student</Typography>
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
                    >
                        SIGN UP
                    </Button>
                </Col>
                <Col sm={18} xs={24} md={10}>
                    <Image
                        alt="boy-image"
                        className="image"
                        src={boyImage}
                        preview={false}
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </Col>
            </Row >

            <Row style={{ paddingTop: "200px" }}>
                <Col lg={{ span: 12 }} sm={{ span: 24 }} >
                    <div style={{}} >
                        <div style={{

                            display: "flex",
                            alignItems: "center",
                            marginRight: '16px',
                            paddingBlock: "25px",
                            paddingLeft: "25px",
                            paddingRight: "25px",
                            marginTop: "50px"

                        }}>
                            <Image src={girlWithBag}
                                alt="girl-with-bag"
                                preview={false} width={80} />
                            <div>
                                <Typography style={{
                                    fontSize: "18px",
                                    fontWeight: 500,
                                    fontFamily: "roboto",
                                    paddingLeft: "10px"
                                }}>Jenny Wilson</Typography>
                                <Typography className='responsive-text' style={{ fontSize: "16px", lineHeight: "23px", paddingLeft: "10px" }}>Lorem ipsum dolor sit amet,<br />consectetur adipiscing...</Typography>
                            </div>
                        </div>

                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            marginRight: '16px',
                            paddingBlock: "25px",
                            paddingLeft: "25px",
                            paddingRight: "25px",
                            marginTop: "50px",
                        }}>
                            <Image src={girl2}
                                alt="girl-image"
                                preview={false} width={80} />
                            <div>
                                <Typography style={{
                                    fontSize: "18px", fontWeight
                                        : 500, fontFamily: "roboto", paddingLeft: "10px"
                                }}>Jenny Wilson</Typography>
                                <Typography className='responsive-text' style={{ fontSize: "16px", lineHeight: "23px", paddingLeft: "10px" }}>Lorem ipsum dolor sit amet,<br />consectetur adipiscing...</Typography>
                            </div>
                        </div>

                        <div style={{
                            display: "flex", alignItems: "center",
                            paddingBlock: "25px",
                            paddingLeft: "25px",
                            paddingRight: "25px",
                            marginTop: "50px",
                        }}>
                            <Image src={girl3} alt="girl-with-bag" preview={false} width={80} />
                            <div>
                                <Typography style={{
                                    fontSize: "18px", fontWeight: 500,
                                    fontFamily: "roboto", paddingLeft: "10px"
                                }}>Jenny Wilson</Typography>
                                <Typography className='responsive-text' style={{
                                    fontSize: "16px",
                                    lineHeight: "23px",
                                    paddingLeft: "10px"
                                }}>
                                    Lorem ipsum dolor sit amet,<br />consectetur adipiscing...
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Col>


                <Col xl={{ span: 12 }} lg={{ span: 12 }} md={{ span: 24 }} sm={{ span: 24 }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "77px 0",
                    }}>
                        <div style={{}} >
                            <Typography style={{ fontSize: "40px", fontWeight: 600, fontFamily: "inter" }}>
                                Tropical Adventure
                            </Typography>
                            <Typography style={{ fontSize: "30px" }}>
                                for Students.
                            </Typography>
                            <Typography
                                style={{
                                    fontSize: "20px",
                                    fontWeight: 500,
                                    fontFamily: "inter"
                                }}>
                                Student Tropical Vacation: Relax and Recharge
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
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default HeroSection
