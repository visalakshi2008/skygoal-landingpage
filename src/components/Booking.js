// import React from 'react'
// import { Image, Row, Col, Typography, Button, Input, Form, DatePicker } from "antd"
// import girlWithBag from "../images/girlWithBag.png"
// import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

// const Booking = () => {
//     const [form] = Form.useForm();
//     const onChange = (date, dateString) => {
//         console.log(date, dateString);
//     };
//     return (
//         <>
//             <Row style={{ marginTop: "250px" }}>
//                 <Col span={12}>
//                     <Image src={girlWithBag} preview={false}
//                         height={440} />
//                 </Col>
//                 <Col span={12} style={{}} >
//                     <div style={{ width: "70%", }}>
//                         <div style={{
//                             display: "felx", justifyContent: "center",
//                             boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
//                             width: "100%",
//                             borderRadius: "8px"
//                         }}>
//                             <div style={{
//                                 paddingBlock: "29px",
//                                 paddingLeft: "20px",
//                                 paddingRight: "20px",
//                                 width: "70%"
//                             }}>
//                                 <Typography style={{
//                                     fontSize: "32px", fontWeight: 900,
//                                     fontFamily: "inter", color: '#000'
//                                 }}>
//                                     Book now
//                                 </Typography>
//                                 <Typography style={{
//                                     fontSize: "18px",
//                                     color: '#1f2027',
//                                     // fontWeight: 600
//                                 }}>
//                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit
//                                 </Typography>
//                             </div>
//                             <div style={{
//                                 paddingBlock: "29px",
//                                 paddingLeft: "20px",
//                                 paddingRight: "20px"
//                             }}>
//                                 <Form form={form}
//                                     layout="vertical">
//                                     <Form.Item style={{ width: '60%', fontWeight: 500, fontSize: "12px" }} label="CITY" >

//                                         <Input placeholder="Placeholder" style={{ paddingBlock: '10px' }} />
//                                     </Form.Item>
//                                     <div style={{ display: "flex", gap: "30px" }}>
//                                         <Form.Item label="ARRIVAl" style={{ fontWeight: 500, fontSize: "12px" }} >
//                                             <DatePicker onChange={onChange} placeholder="10 October" style={{ width: "100%", paddingBlock: "10px" }} />
//                                         </Form.Item>
//                                         <Form.Item label="DEPARTURE" style={{ fontWeight: 500, fontSize: "12px" }}>
//                                             <DatePicker onChange={onChange} placeholder='11 October' style={{ width: "100%", paddingBlock: "10px" }} />
//                                         </Form.Item>
//                                     </div>
//                                     <div style={{ display: "flex", gap: "20px" }}>
//                                         <Form.Item label="STAR" style={{ fontWeight: 500, fontSize: "12px" }}>
//                                             <Button.Group style={{}}>
//                                                 <Button style={{
//                                                     backgroundColor: "#EBEBEB",
//                                                     fontWeight: 900,
//                                                     fontSize: "20px",
//                                                     color: "#000",
//                                                     justifyContent: "center",
//                                                     textAlign: "center",
//                                                     alignItems: "center",
//                                                     display: "flex",
//                                                     paddingBlock: "20px"

//                                                 }}><MinusOutlined /></Button>
//                                                 <Button style={{
//                                                     backgroundColor: "#F3F3F3",
//                                                     color: "#78858F", fontSize: "20px",
//                                                     fontWeight: 500,
//                                                     display: "flex",
//                                                     justifyContent: "center",
//                                                     alignItems: "center",
//                                                     textAlign: "center", paddingBlock: "20px"
//                                                 }}>
//                                                     4
//                                                 </Button>
//                                                 <Button style={{
//                                                     backgroundColor: "#EBEBEB",
//                                                     fontWeight: 900,
//                                                     fontSize: "20px",
//                                                     color: "#000",
//                                                     justifyContent: "center",
//                                                     textAlign: "center",
//                                                     alignItems: "center",
//                                                     display: "flex", paddingBlock: "20px"
//                                                 }}><PlusOutlined /></Button>
//                                             </Button.Group>
//                                         </Form.Item>
//                                         <Form.Item label="ROOMS" style={{ fontWeight: 500, fontSize: "12px" }}>
//                                             <Button.Group style={{}}>
//                                                 <Button style={{
//                                                     backgroundColor: "#EBEBEB",
//                                                     fontWeight: 900,
//                                                     fontSize: "20px",
//                                                     color: "#000",
//                                                     justifyContent: "center",
//                                                     textAlign: "center",
//                                                     alignItems: "center",
//                                                     display: "flex", paddingBlock: "20px"

//                                                 }}><MinusOutlined />
//                                                 </Button>
//                                                 <Button style={{
//                                                     backgroundColor: "#F3F3F3",
//                                                     color: "#78858F", fontSize: "20px",
//                                                     fontWeight: 500,
//                                                     display: "flex",
//                                                     justifyContent: "center",
//                                                     alignItems: "center",
//                                                     textAlign: "center", paddingBlock: "20px"
//                                                 }}>
//                                                     1
//                                                 </Button>
//                                                 <Button style={{
//                                                     backgroundColor: "#EBEBEB",
//                                                     fontWeight: 900,
//                                                     fontSize: "20px",
//                                                     color: "#000",
//                                                     justifyContent: "center",
//                                                     textAlign: "center",
//                                                     alignItems: "center",
//                                                     display: "flex", paddingBlock: "20px"
//                                                 }}>
//                                                     <PlusOutlined />
//                                                 </Button>
//                                             </Button.Group>
//                                         </Form.Item>
//                                     </div>
//                                     <Form.Item>
//                                         <Button style={{
//                                             color: "#fff",
//                                             backgroundColor: "black",
//                                             border: "none",
//                                             paddingBlock: "20px",
//                                             justifyContent: "center",
//                                             display: "flex",
//                                             textAlign: "center",
//                                             alignItems: "center"
//                                         }}>
//                                             BOOK NOW
//                                         </Button>
//                                     </Form.Item>
//                                 </Form>
//                             </div>

//                         </div>
//                     </div>
//                 </Col>
//             </Row >
//         </>
//     )
// }

// export default Booking

import React from 'react';
import { Image, Row, Col, Typography, Button, Input, Form, DatePicker } from 'antd';
import girlWithBag from '../images/girlWithBag.png';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const Booking = () => {
    const [form] = Form.useForm();

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <>
            <Row style={{ marginTop: '20px' }}>
                <Col xs={{ span: 24 }} md={{ span: 24 }} xl={{ span: 12 }} lg={{ span: 12 }}>
                    <Image src={girlWithBag} preview={false} height={440} />
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 24 }} xl={{ span: 12 }} lg={{ span: 12 }}>
                    <div style={{ width: '100%' }}>
                        <div
                            style={{
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                width: '100%',
                                borderRadius: '8px',
                            }}
                        >
                            <div
                                style={{
                                    padding: '20px',
                                }}
                            >
                                <Typography
                                    style={{
                                        fontSize: '24px',
                                        fontWeight: 900,
                                        fontFamily: 'inter',
                                        color: '#000',
                                    }}
                                >
                                    Book now
                                </Typography>
                                <Typography
                                    style={{
                                        fontSize: '16px',
                                        color: '#1f2027',
                                    }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </Typography>
                            </div>
                            <div
                                style={{
                                    padding: '20px',
                                }}
                            >
                                <Form form={form} layout="vertical">
                                    <Form.Item style={{ fontWeight: 500, fontSize: '12px' }} label="CITY">
                                        <Input placeholder="Placeholder" style={{ paddingBlock: '10px' }} />
                                    </Form.Item>
                                    <div style={{ display: 'flex', gap: '30px' }}>
                                        <Form.Item label="ARRIVAL" style={{ fontWeight: 500, fontSize: '12px' }}>
                                            <DatePicker onChange={onChange} placeholder="10 October" style={{ width: '100%', paddingBlock: '10px' }} />
                                        </Form.Item>
                                        <Form.Item label="DEPARTURE" style={{ fontWeight: 500, fontSize: '12px' }}>
                                            <DatePicker onChange={onChange} placeholder="11 October" style={{ width: '100%', paddingBlock: '10px' }} />
                                        </Form.Item>
                                    </div>
                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <Form.Item label="STAR" style={{ fontWeight: 500, fontSize: '12px' }}>
                                            <Button.Group>
                                                <Button style={{ backgroundColor: '#EBEBEB', fontWeight: 900, fontSize: '20px', color: '#000', justifyContent: 'center', textAlign: 'center', alignItems: 'center', display: 'flex', paddingBlock: '20px' }}>
                                                    <MinusOutlined />
                                                </Button>
                                                <Button style={{ backgroundColor: '#F3F3F3', color: '#78858F', fontSize: '20px', fontWeight: 500, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingBlock: '20px' }}>
                                                    4
                                                </Button>
                                                <Button style={{ backgroundColor: '#EBEBEB', fontWeight: 900, fontSize: '20px', color: '#000', justifyContent: 'center', textAlign: 'center', alignItems: 'center', display: 'flex', paddingBlock: '20px' }}>
                                                    <PlusOutlined />
                                                </Button>
                                            </Button.Group>
                                        </Form.Item>
                                        <Form.Item label="ROOMS" style={{ fontWeight: 500, fontSize: '12px' }}>
                                            <Button.Group>
                                                <Button style={{ backgroundColor: '#EBEBEB', fontWeight: 900, fontSize: '20px', color: '#000', justifyContent: 'center', textAlign: 'center', alignItems: 'center', display: 'flex', paddingBlock: '20px' }}>
                                                    <MinusOutlined />
                                                </Button>
                                                <Button style={{ backgroundColor: '#F3F3F3', color: '#78858F', fontSize: '20px', fontWeight: 500, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingBlock: '20px' }}>
                                                    1
                                                </Button>
                                                <Button style={{ backgroundColor: '#EBEBEB', fontWeight: 900, fontSize: '20px', color: '#000', justifyContent: 'center', textAlign: 'center', alignItems: 'center', display: 'flex', paddingBlock: '20px' }}>
                                                    <PlusOutlined />
                                                </Button>
                                            </Button.Group>
                                        </Form.Item>
                                    </div>
                                    <Form.Item>
                                        <Button style={{ color: '#fff', backgroundColor: 'black', border: 'none', paddingBlock: '20px', justifyContent: 'center', display: 'flex', textAlign: 'center', alignItems: 'center' }}>
                                            BOOK NOW
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Booking;

