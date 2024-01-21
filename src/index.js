import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Content, } from 'antd/es/layout/layout';
import { Layout } from 'antd';


import HeroSection from './components/HeroSection';
import Destinations from './components/Destinations';
import Discounts from './components/Discounts';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CustomHeader from './components/CustomHeader';

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
        <CustomHeader />
      </Header>

      <Layout style={{ width: "80%", margin: "0 auto" }}>
        <Content>
          <HeroSection />
          <Destinations />
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
