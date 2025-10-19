
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { PromoBanner } from './components/PromoBanner';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <PromoBanner />
      </main>
      <Footer />
    </div>
  );
};

export default App;
