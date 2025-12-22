"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Ramya",
      location: "Erode",
      rating: 5,
      review:
        "Aloe vera shampoo is suitable for anyone, especially beneficial for those with dry or damaged hair, an itchy or sensitive scalp, or those looking to promote healthy hair growth. Its enzymes, vitamins, and minerals can soothe, nourish, and hydrate the scalp and hair.",
      imagePath: "/images/review.png",
    },
    {
      id: 2,
      name: "Ramya",
      location: "Erode",
      rating: 5,
      review:
        "Milk protein shampoo is gentle and nourishing; regular use leaves hair soft and manageable. Great for daily use and suitable for most hair types.",
      imagePath: "/images/review.png",
    },
    {
      id: 3,
      name: "Ramya",
      location: "Erode",
      rating: 5,
      review:
        "Aloe vera shampoo helps maintain a healthy scalp and promotes shine and strength in hair when used consistently.",
      imagePath: "/images/review.png",
    },
    {
      id: 4,
      name: "Priya",
      location: "Chennai",
      rating: 5,
      review:
        "Amazing natural products! The organic detergent works wonderfully and is gentle on clothes. The tea varieties are refreshing and healthy. Highly recommend Kavi's Naturals for quality natural products.",
      imagePath: "/images/review.png",
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={`${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Reviews</h2>
          <p className="section-subtitle subtitle-underline">Happy Clients Saying</p>
        </div>

        {/* Reviews Swiper */}
        <div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            navigation={false}
            pagination={false}
            className="py-4"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="bg-[rgba(233,249,217,1)] rounded-2xl shadow-sm transition-all duration-300 p-6 relative h-[360px] md:h-[320px] lg:h-[360px]">
                  <div className="flex items-start space-x-6">
                    <div className="">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-[129px] h-[129px] rounded-full overflow-hidden shadow-lg border-4 border-white bg-white  flex-shrink-0">
                          <Image
                            src={review.imagePath}
                            alt={review.name}
                            width={129}
                            height={129}
                           
                          />
                        </div>
                        <div className="">
                          <h4 className="font-bold text-2xl text-gray-800">
                            {review.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {review.location}
                          </p>
                          <div className="flex items-center my-3">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                      </div>

                      {/* Rating */}

                      {/* Review Text - stretch to fill */}
                      <div className="flex-1">
                        <p className="text-sm text-gray-700 leading-relaxed text-justify h-full">
                          {review.review}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

       
      </div>
    </section>
  );
};

export default Reviews;
