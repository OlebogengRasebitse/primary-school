import Slider from "react-slick";

const images = [
  { src: "/Tsitsing-Primary.jpg", alt: "Tsitsing Primary Schol" },
  { src: "/Khuli-Chana.jpg" , alt: "Khuli Chana at Tsitsing Primary" },
];

export default function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-6">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[500px] object-cover rounded-xl shadow-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
