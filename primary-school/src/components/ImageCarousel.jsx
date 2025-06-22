import Slider from "react-slick";

const images = [
  { src: "primary-school/src/assets/Khuli Chana at Tsitsing Primary.jpg", alt: "Team Celebration" },
  { src: "/src/assets/Soccer team.jpeg" , alt: "Best Midfielder - Tselapedi" },

  // { src: "/images/tsitsing3.jpg", alt: "Bronze Medal Moment" },
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
              className="w-full h-[300px] object-cover rounded-xl shadow-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
