import { useLocation } from "react-router-dom";

const heroContent = {
  "/": {
    image: "/image.png",
    title: "Welcome to Tsitsing Primary School",
    subtitle: "Where young minds grow, explore, and shine! A nurturing environment for learning, creativity, and character-building."
  },
  "/about": {
    image: "/Hero Image 7.png",
    title: "About Us",
    subtitle: "Learn more about our mission, vision, and dedicated educators."
  },
  "/contact": {
    image: "/Hero Image 3.png",
    title: "Get in Touch",
    subtitle: "We'd love to hear from you! Reach out with your questions or feedback."
  },
  "/events": {
    image: "/Hero Image 5.png",
    title: "Events Calendar",
    subtitle: "Stay updated with our upcoming events and important dates."
  },
  "/resources": {
    image: "/Hero Image 4.png",
    title: "Resources",
    subtitle: "Access important documents, forms, and educational materials."
  },
};

function Hero() {
  const location = useLocation();
  const path = location.pathname;

  // fallback to home if route not in heroContent
  const { image, subtitle } = heroContent[path] || heroContent["/"];

 return (
   <section className="relative h-64 sm:h-80 md:h-[60vh] w-full overflow-hidden pt-1">
    <img
      src={image}
      alt="Hero"
      className="absolute top-0 left-0 w-full h-full object-cover object-top"
    />
     <div className="relative z-10 bg-black bg-opacity-50 px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 flex items-center justify-center h-full text-center">
        <h3 className="text-base sm:text-2xl md:text-2xl font-semibold text-white">{subtitle}</h3>
      {/* <p className="text-lg md:text-xl">Optional description here</p> */}
    </div>
  </section>
 )
}

export default Hero;
