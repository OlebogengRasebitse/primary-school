import heroImage from '../assets/hero.jpg'; 

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage:`url(${heroImage})` }}>
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Tsitsing Primary School— 
</h1>
        <p className="text-lg md:text-xl">where young minds grow, explore, and shine! A nurturing environment for learning, creativity, and character-building. .</p>
      </div>
    </section>
  );
}

export default Hero;
