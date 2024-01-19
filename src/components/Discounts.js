import React from 'react'
import { Typography, Image, Col, Row, Button } from 'antd'
import girl2 from "../images/girl2.png"
import girl3 from "../images/girl3.png"
import student from "../images/student.png"

const Discounts = () => {
    return (
        <>
            <Row style={{ marginTop: "250px" }}>
                <Col span={12} >

                    <div style={{ display: "felx", justifyContent: "center" }}>
                        <Typography style={{
                            fontSize: "20px", fontWeight: 500, fontFamily: "inter", color: '#1f2027'
                        }}>Get 20% off for student
                        </Typography>
                        <Typography style={{
                            fontSize: "40px",
                            color: '#1f2027',
                            fontWeight: 600
                        }}>Student discounts available.</Typography>
                        <Typography
                            style={{
                                fontSize: "30px",
                                fontWeight: 500,
                                fontFamily: "inter",
                                color: '#1f2027'
                            }}>
                            Get ready for some fun in the sun!
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
                <Col span={12}>
                    <Image src={student} preview={false} height={440} />
                </Col>
            </Row>
        </>
    )
}

export default Discounts
