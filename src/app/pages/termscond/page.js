// pages/terms-condition.js
import React from 'react';
import Head from 'next/head';
import './termsstyle.css';
import Navbar from '@/app/components/navbar/page';
import Footer from '@/app/components/footer/page';

const TermsCondition = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions - Keeva</title> 
      </Head>
      <Navbar />
      <div className="termcondContainer container">
        <h1 className="termcondHeading">Terms and Conditions</h1>
        <p className="termcondText">Effective Date: 01/05/2024</p>

        <h2 className="termcondSubheading">Introduction</h2>
        <p className="termcondText">
          Welcome to Keeva. These Terms and Conditions ("Terms") govern your use of our website keeva.in and the purchase of furniture and related services ("Services") through our Site. By accessing or using our Site and Services, you agree to be bound by these Terms.
        </p>

        <h2 className="termcondSubheading">Use of the Site</h2>
        <h3 className="termcondSubSubheading">Eligibility</h3>
        <p className="termcondText">
          To use our Site and Services, you must be at least 18 years old or have reached the age of majority in your jurisdiction and have the legal capacity to enter into a binding agreement.
        </p>
        
        <h3 className="termcondSubSubheading">User Account</h3>
        <p className="termcondText">
          To access certain features of our Site, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your account password and for any activities or actions under your account.
        </p>

        <h3 className="termcondSubSubheading">Prohibited Activities</h3>
        <p className="termcondText">
          You agree not to engage in any of the following prohibited activities:
        </p>
        <ul className="termcondList">
          <li>Violating any applicable laws or regulations</li>
          <li>Infringing on any third party’s rights, including intellectual property rights</li>
          <li>Using the Site or Services for any fraudulent or unlawful purpose</li>
          <li>Interfering with or disrupting the Site or Services, servers, or networks</li>
          <li>Introducing any viruses, malware, or other harmful software</li>
        </ul>

        {/* Other sections omitted for brevity */}
        
        <h2 className="termcondSubheading">Contact Us</h2>
        <p className="termcondText">
          If you have any questions about these Terms, please contact us at:
        </p>
        <p className="termcondText">Email: keeva@gmail.com</p>
        <p className="termcondText">Address: Bela Pratapgarh, Uttar Pradesh, 230001</p>
        <p className="termcondText">Phone: 72757 59000</p>
      </div>
      <Footer />
    </>
  );
};

export default TermsCondition;
