import React from 'react';
import { Typography, Image, Col, Row, Button } from 'antd';
import student from '../images/student.png';

const Discounts = () => {
  return (
    <>
      <Row style={{ marginTop: '250px' }}>
        <Col xs={24} sm={24} md={12} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Typography style={{ fontSize: '20px', fontWeight: 500, fontFamily: 'inter', color: '#1f2027' }}>
            Get 20% off for students
          </Typography>
          <Typography style={{ fontSize: '40px', color: '#1f2027', fontWeight: 600 }}>Student discounts available.</Typography>
          <Typography style={{ fontSize: '30px', fontWeight: 500, fontFamily: 'inter', color: '#1f2027' }}>
            Get ready for some fun in the sun!
          </Typography>
          <ul style={{ paddingTop: '20px' }}>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Massa quis natoque sit quam</li>
            <li>Eros non pellentesque elit </li>
            <li>tortor id euismod habitant</li>
            <li>Sed suspendisse id in ultrices</li>
          </ul>
          <div>
            <Button
              style={{
                backgroundColor: '#F27A44',
                border: 'none',
                borderRadius: '30px',
                paddingBlock: '16px',
                paddingLeft: '50px',
                paddingRight: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                marginTop: '60px',
                textAlign: 'center',
              }}
            >
              Explore More
            </Button>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image src={student} alt="student" preview={false} height={440} />
        </Col>
      </Row>
    </>
  );
};

export default Discounts;
