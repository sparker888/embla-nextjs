import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import EmblaCarousel from 'embla-carousel';
import '../styles/carousel.css';

const slides = [
  '/images/blue-slide.jpg',
  '/images/green-slide.jpg',
  '/images/orange-slide.jpg',
];

const ThumbnailCarousel = () => {
  const emblaRef = useRef(null);
  const [embla, setEmbla] = useState(null);

  useEffect(() => {
    const emblaInstance = EmblaCarousel(emblaRef.current, { loop: true });
    setEmbla(emblaInstance);
    return () => emblaInstance && emblaInstance.destroy();
  }, []);

  const scrollPrev = () => embla && embla.scrollPrev();
  const scrollNext = () => embla && embla.scrollNext();

  return (
    <div className="carousel-container relative flex flex-col items-center">
      <div className="carousel relative">  {/* Updated this line */}
        <button
          onClick={scrollPrev}
          className="prevButton p-2 bg-gray-500 rounded-full absolute top-1/2 left-4 transform -translate-y-1/2"
        >
          Prev
        </button>
        <div ref={emblaRef} className="embla">
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div key={index} className="embla__slide">
                <Image
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  width={800}
                  height={400}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollNext}
          className="nextButton p-2 bg-gray-500 rounded-full absolute top-1/2 right-4 transform -translate-y-1/2"
        >
          Next
        </button>
      </div>
      <div className="embla-thumbnail flex flex-row mt-4 justify-center w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="thumbnail cursor-pointer"
            onClick={() => embla && embla.scrollTo(index)}
          >
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              width={80}
              height={40}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThumbnailCarousel;
