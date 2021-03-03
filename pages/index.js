import Link from 'next/link';
import React from 'react';
//import './style/index.scss';
import Banner from '../components/sections/banner';
import { Button } from 'react-bootstrap';
import Portfolio from '../components/sections/portfolio';
import AreaSection from '../components/sections/area';
import Team from '../components/sections/team';
import FormSection from '../components/sections/form';

export default () => (
  <div>
    <div className="App">
      <Banner>
        <Button variant="testing-this"> This a button </Button>
      </Banner>
      <div className="padded-container">
        <Portfolio />
        <Team />

        {/* <About /> */}
        <AreaSection />
        <FormSection />
      </div>
    </div>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        padding-bottom: 12px;
        line-height: 1.15;
        font-size: 37px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 587px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
);
