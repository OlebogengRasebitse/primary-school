import { useLocation } from "react-router-dom";

const heroContent = {
  "/": {
    image: "./public/image.png",
    title: "Welcome to Tsitsing Primary School",
    subtitle: "Where young minds grow, explore, and shine! A nurturing environment for learning, creativity, and character-building."
  },
  "/about": {
    image: "/public/Hero Image 7.png",
    title: "About Us",
    subtitle: "Learn more about our mission, vision, and dedicated educators."
  },
  "/contact": {
    image: "/public/Hero Image 3.png",
    title: "Get in Touch",
    subtitle: "We'd love to hear from you! Reach out with your questions or feedback."
  },
  "/events": {
    image: "/public/Hero Image 5.png",
    title: "Events Calendar",
    subtitle: "Stay updated with our upcoming events and important dates."
  },
  "/resources": {
    image: "/public/Hero Image 4.png",
    title: "Resources",
    subtitle: "Access important documents, forms, and educational materials."
  },
};

function Hero() {
  const location = useLocation();
  const path = location.pathname;

  // fallback to home if route not in heroContent
  const { image, title, subtitle } = heroContent[path] || heroContent["/"];

 return (
  <section className="relative h-96 w-full overflow-hidden">
    <img
      src={image}
      alt="Hero"
      className="absolute top-0 left-0 w-full h-full object-cover object-top"
    />
    <div className="relative z-10 bg-black bg-opacity-50 p-8 rounded-lg text-center text-white h-full flex items-center justify-center">
      <h1 className="text-4xl md:text-xl">{subtitle}</h1>
      {/* <p className="text-lg md:text-xl">Optional description here</p> */}
    </div>
  </section>
 )
}

export default Hero;
