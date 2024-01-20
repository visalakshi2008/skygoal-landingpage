// import { MenuOutlined } from '@ant-design/icons';
// import { Button, Drawer, Typography, Row, Col } from 'antd';
// import React, { useState, useEffect } from 'react';

// const CustomHeader = () => {
//     const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);
//     const [drawerVisible, setDrawerVisible] = useState(false);

//     const toggleDrawer = () => {
//         setDrawerVisible(!drawerVisible);
//     };

//     const updateIsMobile = () => {
//         setIsMobile(window.innerWidth <= 750);
//     };

//     useEffect(() => {
//         window.addEventListener('resize', updateIsMobile);

//         return () => {
//             window.removeEventListener('resize', updateIsMobile);
//         };
//     }, []);

//     const menuItems = [
//         { label: 'Home', key: 'Home' },
//         { label: 'About', key: 'About' },
//         { label: 'Contact', key: 'Schedules' },
//         { label: 'Signup', key: 'Membership' },
//         { label: 'Signup', key: 'Pricing' },
//     ];






//     const DrawerFooter = () => (
//         <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
//             <Button type="primary" style={{ backgroundColor: "#F27A44" }}>
//                 Courses
//             </Button>
//             <Button type="default" >
//                 Offers
//             </Button>
//         </div>
//     );

//     return (
//         <>
//             {isMobile ? (
//                 <Button
//                     type="link"
//                     onClick={toggleDrawer}
//                     style={{
//                         position: 'fixed',
//                         top: 0,
//                         left: 0,
//                         zIndex: 1,
//                         paddingTop: '20px',
//                     }}
//                     className="menu-button"
//                 >
//                     <MenuOutlined style={{ fontSize: "20px", fontWeight: 700, color: "#F27A44" }} />
//                 </Button>
//             ) : (
//                 <Row>
//                     <Col span={24}>
//                         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
//                             <div style={{ display: 'flex', gap: '40px', marginLeft: '119px' }}>
//                                 <Typography style={{ color: '#000', fontWeight: 500, paddingLeft: '206px' }}>Home</Typography>
//                                 <Typography style={{ color: '#000', fontWeight: 500 }}>About</Typography>
//                                 <Typography style={{ color: '#000', fontWeight: 500 }}>Schedules</Typography>
//                                 <Typography style={{ color: '#000', fontWeight: 500 }}>Membership</Typography>
//                                 <Typography style={{ color: '#000', fontWeight: 500, marginRight: "20px" }}>Pricing</Typography>
//                             </div>
//                             <div style={{ display: 'flex', gap: '20px', marginRight: '119px' }}>
//                                 <Button
//                                     style={{
//                                         backgroundColor: 'none',
//                                         border: 'none',
//                                         borderRadius: '30px',
//                                         paddingBlock: '16px',
//                                         paddingLeft: '32px',
//                                         paddingRight: '32px',
//                                         display: 'flex',
//                                         justifyContent: 'center',
//                                         alignItems: 'center',
//                                         color: '#7D7D7D',
//                                         fontWeight: 500,
//                                     }}
//                                 >
//                                     Offers
//                                 </Button>
//                                 <Button
//                                     style={{
//                                         backgroundColor: '#F27A44',
//                                         border: 'none',
//                                         borderRadius: '30px',
//                                         paddingBlock: '16px',
//                                         paddingLeft: '32px',
//                                         paddingRight: '32px',
//                                         display: 'flex',
//                                         justifyContent: 'center',
//                                         alignItems: 'center',
//                                         color: '#fff',
//                                     }}
//                                 >
//                                     Courses
//                                 </Button>
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>
//             )}

//             <Drawer
//                 title="Menu"
//                 placement="left"
//                 width="32%"
//                 closable={false}
//                 onClose={toggleDrawer}
//                 visible={drawerVisible}
//                 footer={<DrawerFooter />}
//                 style={{ height: '100vh' }}
//             >
//                 <div style={{ display: 'flex', flexDirection: 'column' }}>
//                     {menuItems.map((item) => (
//                         <Typography key={item.key} style={{ color: '#000', fontWeight: 500, marginBottom: '16px', }}>
//                             {item.label}
//                         </Typography>
//                     ))}
//                 </div>
//             </Drawer>
//         </>
//     );
// };

// export default CustomHeader;
import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Typography, Row, Col } from 'antd';
import React, { useState, useEffect } from 'react';

const CustomHeader = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);
    const [drawerVisible, setDrawerVisible] = useState(false);

    const toggleDrawer = () => {
        setDrawerVisible(!drawerVisible);
    };

    const updateIsMobile = () => {
        setIsMobile(window.innerWidth <= 750);
    };

    useEffect(() => {
        window.addEventListener('resize', updateIsMobile);

        return () => {
            window.removeEventListener('resize', updateIsMobile);
        };
    }, []);

    const menuItems = [
        { label: 'Home', key: 'Home' },
        { label: 'About', key: 'About' },
        { label: 'Contact', key: 'Schedules' },
        { label: 'Signup', key: 'Membership' },
        { label: 'Signup', key: 'Pricing' },
    ];

    const DrawerFooter = () => (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
            <Button type="primary" style={{ backgroundColor: "#F27A44" }}>
                Courses
            </Button>
            <Button type="default">
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
                <Row>
                    <Col span={24}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <Typography style={{ color: '#000', fontWeight: 500 }}>Home</Typography>
                                <Typography style={{ color: '#000', fontWeight: 500 }}>About</Typography>
                                <Typography style={{ color: '#000', fontWeight: 500 }}>Schedules</Typography>
                                <Typography style={{ color: '#000', fontWeight: 500 }}>Membership</Typography>
                                <Typography style={{ color: '#000', fontWeight: 500 }}>Pricing</Typography>
                            </div>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <Button
                                    style={{
                                        backgroundColor: 'none',
                                        border: 'none',
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
                    </Col>
                </Row>
            )}

            <Drawer
                title="Menu"
                placement="left"
                width={isMobile ? "80%" : "32%"}
                closable={false}
                onClose={toggleDrawer}
                visible={drawerVisible}
                footer={<DrawerFooter />}
                style={{ height: '100vh' }}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {menuItems.map((item) => (
                        <Typography key={item.key} style={{ color: '#000', fontWeight: 500, marginBottom: '16px', }}>
                            {item.label}
                        </Typography>
                    ))}
                </div>
            </Drawer>
        </>
    );
};

export default CustomHeader;
