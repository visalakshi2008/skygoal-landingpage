
import React, { useState, useEffect } from 'react';
import {
    HomeOutlined,
    InfoCircleOutlined,
    DollarOutlined,
    MenuOutlined,
    UserOutlined,
    PhoneOutlined
} from '@ant-design/icons';
import { Button, Drawer, Typography, Row, Col } from 'antd';

const CustomHeader = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 931);
    const [drawerVisible, setDrawerVisible] = useState(false);

    const toggleDrawer = () => {
        setDrawerVisible(!drawerVisible);
    };

    const updateIsMobile = () => {
        setIsMobile(window.innerWidth <= 930);
    };

    useEffect(() => {
        window.addEventListener('resize', updateIsMobile);

        return () => {
            window.removeEventListener('resize', updateIsMobile);
        };
    }, []);

    const menuItems = [
        {
            label: 'Home', key: 'Home',
            icon: <HomeOutlined style={{ color: "#F27A44", paddingRight: "10px" }} />
        },
        {
            label: 'About', key: 'About',
            icon: <InfoCircleOutlined style={{ color: "#F27A44", paddingRight: "10px" }} />
        },
        {
            label: 'Schedules', key: 'Schedules',
            icon: <PhoneOutlined style={{ color: "#F27A44", paddingRight: "10px" }} />
        },
        {
            label: 'Membership', key: 'Pricing',
            icon: <UserOutlined style={{ color: "#F27A44", paddingRight: "10px" }} />
        },
        {
            label: 'Pricing', key: 'Membership',
            icon: <DollarOutlined style={{ color: "#F27A44", paddingRight: "10px" }} />
        },
    ];

    const DrawerFooter = () => (
        <div style={{ display: 'flex', justifyContent: 'left', gap: "20px" }}>
            <Button type="primary" style={{ backgroundColor: "#F27A44" }}>
                Courses
            </Button>
            <Button type="default" style={{ color: "#7d7d7d", border: '1px solid #F27A44', }}>
                Offers
            </Button>
        </div>
    );

    return (
        <>
            {isMobile ? (
                <Button
                    type="link"
                    onClick={toggleDrawer}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        paddingTop: '20px',
                    }}
                    className="menu-button"
                >
                    <MenuOutlined style={{ fontSize: "20px", fontWeight: 700, color: "#F27A44" }} />
                </Button>
            ) : (
                <Row style={{ margin: "auto", }}>
                    <Col span={24} >
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0 20px'
                        }}>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <Typography
                                    style=
                                    {{
                                        color: '#000',
                                        fontWeight: 500
                                    }}>
                                    Home
                                </Typography>
                                <Typography
                                    style=
                                    {{
                                        color: '#000',
                                        fontWeight: 500
                                    }}>
                                    About
                                </Typography>
                                <Typography
                                    style=
                                    {{
                                        color: '#000',
                                        fontWeight: 500
                                    }}>
                                    Schedules
                                </Typography>
                                <Typography
                                    style=
                                    {{
                                        color: '#000',
                                        fontWeight: 500
                                    }}>
                                    Membership
                                </Typography>
                                <Typography
                                    style=
                                    {{
                                        color: '#000',
                                        fontWeight: 500
                                    }}>
                                    Pricing

                                </Typography>
                            </div>
                            <div style={{
                                display: 'flex', gap: '20px', paddingLeft: "300px"
                            }}>
                                <Button
                                    type='default'
                                    style={{
                                        // backgroundColor: 'none',
                                        border: '1px solid #F27A44',
                                        borderRadius: '30px',
                                        paddingBlock: '16px',
                                        paddingLeft: '20px',
                                        paddingRight: '20px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: '#7D7D7D',
                                        fontWeight: 500,
                                    }}
                                >
                                    Offers
                                </Button>
                                <Button
                                    style={{
                                        backgroundColor: '#F27A44',
                                        border: 'none',
                                        borderRadius: '30px',
                                        paddingBlock: '16px',
                                        paddingLeft: '20px',
                                        paddingRight: '20px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: '#fff',
                                    }}
                                >
                                    Courses
                                </Button>
                            </div>
                        </div>
                    </Col >
                </Row >
            )}

            <Drawer
                title="Menu"
                placement="left"
                width={isMobile ? "55%" : "15%"}
                closable={false}
                onClose={toggleDrawer}
                visible={drawerVisible}
                footer={<DrawerFooter />}
                style={{ height: '100vh', }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', }}>
                    {menuItems.map((item) => (
                        <Typography key={item.key} style={{
                            color: '#F27A44',
                            fontWeight: 500,
                            marginBottom: '16px',
                            fontFamily: "inter"
                        }}>
                            {item.icon} {item.label}
                        </Typography>
                    ))}
                </div>
            </Drawer>
        </>
    );
};

export default CustomHeader;
