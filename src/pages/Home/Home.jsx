import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Hero from '../../sections/Hero/Hero';
import Services from '../../sections/Services/Services';
import HowWeDeliver from '../../sections/HowWeDeliver/HowWeDeliver';
import Contact from '../../sections/Contact/Contact';
import Footer from '../../sections/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowWeDeliver />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
