import { useState, useEffect } from 'react';
import becomeac from './becomeac.jpg';
import becomeas from './becomeas.jpg';
import collobarateasc from './collaboratewithc.jpg'
import freelanceasd from './freelanceasd.jpg'
function App() {
  const slides = [
    becomeac,
    becomeas,
    collobarateasc,
    freelanceasd
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[100%] m-auto overflow-hidden">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              className="w-full sm:h-[100px] md:h-[250px] lg:h-screen"
              src={slide}
              alt={`Slide ${index + 1}`}
            />
            
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-white font-bold p-2"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.293 16.293a1 1 0 0 0 0-1.414L11.414 12l3.879-3.879a1 1 0 0 0-1.414-1.414l-4.5 4.5a1 1 0 0 0 0 1.414l4.5 4.5a1 1 0 0 0 1.414 0z"
            fill="currentColor"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-2"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.707 16.293a1 1 0 0 1 0-1.414L12.586 12 8.707 8.707a1 1 0 0 1 1.414-1.414l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414 0z"
            fill="currentColor"
          />
        </svg>
      </button>
      <div className="w-[100%] absolute rounded bottom-0 py-4 flex justify-center items-center gap-5 text-white px-10 text-3xl">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`rounded-full w-3 h-3 ${
              i === currentSlide ? 'bg-white' : 'bg-gray-600'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;