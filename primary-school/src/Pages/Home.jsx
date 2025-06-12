import React from 'react';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

function Home() {
  return (
    <section className="p-6">
      <Navbar />
      <Hero />
      <h1 className="text-2xl font-bold">Home Page</h1>
      <p>Welcome to Tsitsing Primary School's about page.</p>
    </section>
  );
}

export default Home