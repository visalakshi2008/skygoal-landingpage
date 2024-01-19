import { Col, Row, Typography } from "antd";
import React from "react";

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
                        fontWeight: 600,
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

                    }}><Typography style={{ fontFamile: "inter", fontSize: "16px" }}>Privacy Policy</Typography>
                        <Typography style={{ fontFamile: "inter", fontSize: "16px" }}>Terms Of Use</Typography>
                        <Typography style={{ fontFamile: "inter", fontSize: "16px" }}>Sales and Refunds</Typography>
                        <Typography style={{ fontFamile: "inter", fontSize: "16px" }}>Legal</Typography>
                        <Typography style={{ fontFamile: "inter", fontSize: "16px", fontWeight: 600 }}>About</Typography>
                        <Typography style={{ fontFamile: "inter", fontSize: "16px", fontWeight: 600 }}>Schedules</Typography>
                        <Typography style={{ fontFamile: "inter", fontSize: "16px", fontWeight: 600 }}>Pricing</Typography>
                        <Typography style={{ fontFamile: "inter", fontSize: "16px", fontWeight: 600 }}>Membership</Typography>
                        <Typography style={{ fontFamile: "inter", fontSize: "16px", fontWeight: 600 }}>Joins</Typography></div>


                </Col>
            </Row>
        </>
    );
};

export default Footer;
