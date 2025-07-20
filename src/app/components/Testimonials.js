"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const stories = [
    {
      pic: "/couple1.jpg",
      name: "Rahul & Priya",
      story:
        "I can't forget the day I found my match here. Now I am married and all credits goes to MatrimonyHub.",
    },
    {
      pic: "/couple2.jpg",
      name: "Sagar & Riya",
      story:
        "Thank you MatrimonyHub.com for helping me find love of my life. I totally recommend this portal to all.",
    },
    {
      pic: "/couple3.jpg",
      name: "Amit & Neha",
      story:
        "We met on MatrimonyHub.com, took time to understand each other and then made our parents meet.",
    },
    {
      pic: "/couple4.jpg",
      name: "Vikas & Meera",
      story:
        "An amazing platform that connected us across cities. Beautiful experience. Thank you MatrimonyHub!",
    },
    {
      pic: "/couple5.jpg",
      name: "Deepak & Pooja",
      story:
        "Very genuine platform. We matched and clicked instantly. Forever grateful to MatrimonyHub.",
    },
    {
      pic: "/couple6.jpg",
      name: "Karan & Simran",
      story:
        "We never thought an online platform would connect us so deeply. Now happily married!",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1.1, spacing: 15 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [instanceRef]);

  return (
    <section className="py-14 px-4 bg-pink-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-10">
        MatrimonyHub Success Stories
      </h2>

      <div className="relative">
        <div
          ref={sliderRef}
          className="keen-slider max-w-7xl mx-auto overflow-visible px-2"
        >
          {stories.map((s, i) => (
            <div
              key={i}
              className="keen-slider__slide p-4"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm mx-auto flex flex-col items-center transition hover:shadow-xl">
                <img
                  src={s.pic}
                  alt={s.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-pink-200 mb-4"
                />
                <h4 className="text-lg font-semibold text-pink-700">{s.name}</h4>
                <p className="text-gray-600 text-sm mt-2 italic">{s.story}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: stories.length }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full transition ${
                currentSlide === idx ? "bg-pink-700" : "bg-pink-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
