import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import FilterBar from '../components/FilterBar/FilterBar';
import PropertiesGrid from '../components/Properties/PropertiesGrid';
import Footer from '../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FilterBar />
      <PropertiesGrid />
      <Footer />
    </div>
  );
};

export default Home;