import React from "react";
import { Col, Row, Typography } from "antd";

const Footer = () => {
    return (
        <>
            <Row>
                <Col span={24} style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                }}>

                    <Typography style={{
                        fontWeight: 400,
                        fontSize: "40px",
                        fontFamily: "inter"
                    }}>
                        Student Special: Discounted
                        rates <br />on tropical getaways!
                    </Typography>

                    <Typography style={{
                        paddingTop: "32px", fontFamile: "inter", fontSize: "16px", fontWeight: 400, lineHeight
                            : "22px",
                        fontFamily: "inter"
                    }}>
                        Let’s embody your beautiful ideas together,
                        simplify the <br />way you visualize your next big things.
                    </Typography>
                </Col>
                <Col span={24} style={{ paddingTop: "52px", paddingBottom: "144px" }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "38px"

                    }}>

                        <Row gutter={[16, 16]}>
                            <Col
                                xs={12}
                                sm={24}
                                md={12}
                                lg={8}
                                xl={6}>
                                <Typography style={{
                                    fontFamily: 'inter',
                                    fontSize: '16px', fontWeight: 400
                                }}>Privacy Policy</Typography>
                            </Col>
                            <Col
                                xs={12}
                                sm={24}
                                md={12}
                                lg={8}
                                xl={6}
                            >
                                <Typography style={{
                                    fontFamily: 'inter',
                                    fontSize: '16px', fontWeight: 400
                                }}>Terms Of Use</Typography>
                            </Col>
                            <Col
                                xs={12}
                                sm={24}
                                md={12}
                                lg={8}
                                xl={6}
                            >
                                <Typography style={{
                                    fontFamily: 'inter',
                                    fontSize: '16px', fontWeight: 400
                                }}>Sales and Refunds</Typography>
                            </Col>
                            <Col
                                xs={12}
                                sm={24}
                                md={12}
                                lg={8}
                                xl={6}
                            >
                                <Typography style={{
                                    fontFamily: 'inter',
                                    fontSize: '16px', fontWeight: 400
                                }}>Legal</Typography>
                            </Col>
                            <Col
                                xs={12}
                                sm={12}
                                md={12}
                                lg={8}
                                xl={6}
                            >
                                <Typography style={{
                                    fontFamily: 'inter',
                                    fontSize: '16px', fontWeight: 700
                                }}>
                                    About
                                </Typography>
                            </Col>
                            <Col
                                xs={12}
                                sm={12}
                                md={12}
                                lg={8}
                                xl={6}
                            >
                                <Typography style={{
                                    fontFamily: 'inter',
                                    fontSize: '16px', fontWeight: 700
                                }}>
                                    Schedules
                                </Typography>
                            </Col>
                            <Col
                                xs={12}
                                sm={12}
                                md={12}
                                lg={8}
                                xl={6}
                            >
                                <Typography style={{
                                    fontFamily: 'inter',
                                    fontSize: '16px', fontWeight: 700
                                }}>
                                    Pricing
                                </Typography>
                            </Col>
                            <Col
                                xs={12}
                                sm={12}
                                md={12}
                                lg={8}
                                xl={6}
                            >
                                <Typography style={{
                                    fontFamily: 'inter',
                                    fontSize: '16px', fontWeight: 700
                                }}>
                                    Membership
                                </Typography>
                            </Col>
                            <Col
                                xs={12}
                                sm={12}
                                md={12}
                                lg={8}
                                xl={6}
                            >
                                <Typography style={{
                                    fontFamily: 'inter',
                                    fontSize: '16px', fontWeight: 700
                                }}>
                                    Joins
                                </Typography>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Footer;
