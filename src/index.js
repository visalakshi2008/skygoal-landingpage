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
import CustomHeader from './components/CustomHeader';

const { Header } = Layout;
// const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{
        backgroundColor: "#ffffff", display: 'flex',
        justifyContent: 'space-between', alignItems: 'center',
        padding: '0 20px'
      }}>
        <CustomHeader />
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