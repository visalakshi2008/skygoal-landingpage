import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout, Typography, Button } from 'antd';

import reportWebVitals from './reportWebVitals';
import { Content, } from 'antd/es/layout/layout';
import HeroSection from './components/HeroSection';
import Destinations from './components/Destinations';
import Discounts from './components/Discounts';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const { Header } = Layout;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{
        backgroundColor: "#ffffff", display: 'flex',
        justifyContent: 'space-between', alignItems: 'center',
        padding: '0 20px'
      }}>
        <div style={{ display: 'flex', gap: "40px", marginLeft: "119px" }}>

          <Typography style={{ color: '#000', fontWeight: 500, paddingLeft: "206px" }}>Home</Typography>
          <Typography style={{ color: '#000', fontWeight: 500 }}>About</Typography>
          <Typography style={{ color: '#000', fontWeight: 500 }}>Schedules</Typography>
          <Typography style={{ color: '#000', fontWeight: 500 }}>Membership</Typography>
          <Typography style={{ color: '#000', fontWeight: 500 }}>Pricing</Typography>
        </div>



        <div style={{ display: 'flex', gap: "20px", marginRight: "119px" }}   >
          <Button style={{
            backgroundColor: "none",
            border: "none", borderRadius: "30px",
            paddingBlock: "16px",
            paddingLeft: "32px",
            paddingRight: "32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center", color: "#7D7D7D", fontWeight: 500
          }}>
            Offers
          </Button>
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
          >Courses</Button>
        </div>
      </Header>
      <Layout style={{ paddingLeft: "119px", paddingRight: "119px" }}>
        <Content>
          <HeroSection />
          <Destinations style={{ paddingLeft: "0px", paddingRight: "0px" }} />
          <Discounts />
          <Booking />
          <Testimonials />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  </React.StrictMode>
);

reportWebVitals();