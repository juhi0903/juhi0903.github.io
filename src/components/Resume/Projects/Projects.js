import React from 'react';
import IconArray from '@components/IconArray';
import './style.scss';

const Projects = () => (
  <div>
    <div className="text-section">
      <div className="wrapper">
        <div className="title">MATRIX</div>
        <div className="content">
          Traffic Management Platform, which can handle approx 100M clicks/day.
          A platform for the business team to create campaigns for Advertisers
          with basic details of the product like Territory, operator, publisher,
          product URL and functionality to set bid rate. It has the feature to
          filters the traffic. Eg. IP range check, IP count check, Browser
          block, etc. It also has the feature to get the top 20 most effective
          products (by calculating its conversion rate) territory/operator wise
          and then distributes the traffic accordingly. This platform also has a
          reporting module where we can see live reports as well as hourly and
          weekly.
        </div>
      </div>
      <div className="content">
        <ul>
          <li>Development of new featuers.</li>
          <li>Deployment and monitoring.</li>
          <li>Managing database and access.</li>
        </ul>
      </div>
      <div className="icon-array">
        <IconArray
          iconList={['spring', 'angular', 'html5', 'java', 'sql', 'mybatis']}
        />
      </div>
    </div>

    <div className="text-section">
      <div className="wrapper">
        <div className="title">MTIX</div>
        <div className="content">
          MTIX is a ticket management platform developed with a vision to manage
          different change requests and the actions taken on them. It managed
          tickets for multiple platforms managed by the operations team of the
          organization. It possesses capabilities to generate report for
          progress of each tickets and ticket assignment to differnt team
          members. As a part of this project, ticket generation directly through
          email was also developed
        </div>
      </div>
      <div className="content">
        <ul>
          <li>Development of the complete module and manual testing.</li>
          <li>Developed the database architecture</li>
          <li>
            Developed REST based web services to fetch information from the
            databases
          </li>
          <li>
            Deployed the whole setup on a server and maintained change requests
            for this product.
          </li>
        </ul>
      </div>
      <div className="icon-array">
        <IconArray iconList={['nodejs', 'angular', 'html5', 'js', 'sql']} />
      </div>
    </div>

    <div className="text-section">
      <div className="wrapper">
        <div className="title">KYC VERFICATION APPLICATION</div>
        <div className="content">
          Contributed to multiple modules of KYC Verfication, which was used by
          Telecom Network Vendors during user-registration. This project
          involved modules for customer verification, recharge and other
          retailer utilities. Worked on Logout Module, MSISDN Verification
          Module and Report Generation Module.
        </div>
      </div>
      <div className="content">
        <ul>
          <li>Development of the complete module and manual testing.</li>
          <li>Developed a scheduler to maintain the load on the database.</li>
          <li>
            Developed REST based web services to identify the complete
            information of a given MSISDN Number
          </li>
        </ul>
      </div>
      <div className="icon-array">
        <IconArray iconList={['java', 'html5', 'spring', 'sql']} />
      </div>
    </div>

    <div className="text-section">
      <div className="wrapper">
        <div className="title">AMEX MEMBERSHIP REWARD</div>
        <div className="content">
          Membership Rewards is a loyalty scheme provided by Amex to its
          customers, which help them earn MR points based on their credit card
          transactions. Our team is responsible for end-to-end release
          management, design, code and test cases , build and review.
        </div>
      </div>
      <div className="content">
        <ul>
          <li>Development of the complete module and manual testing.</li>
          <li>Developed a scheduler to maintain the load on the database.</li>
          <li>
            Developed REST based web services to identify the complete
            information of a given MSISDN Number
          </li>
        </ul>
      </div>
      <div className="icon-array">
        <IconArray iconList={['java', 'spring', 'sql']} />
      </div>
    </div>
  </div>
);

export default Projects;
