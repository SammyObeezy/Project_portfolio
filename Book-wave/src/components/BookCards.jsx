import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const BookCards = ({ headline, books }) => {
  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-black my-5">
        {headline}
      </h2>
      {/* Books */}
      <div className="mt-12">
        <Swiper
          slidesPerView={2}
          spaceBetween={10} // Spacing between slides
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2, // Show 2 slides on mobile screens
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 5, // Show 3 slides on tablets
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 8, // Show 4 slides on larger screens
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 8, // Show 5 slides on extra-large screens
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id} className="flex justify-center">
              <Link to={`/book/${book._id}`} className="block p-0">
                {" "}
                {/* Removed padding around the link */}
                <div className="relative">
                  <img
                    src={book.imageURL}
                    alt={book.bookTitle}
                    className="w-full h-[300px] object-contain" // Ensures the image is larger and not cropped
                  />
                </div>
                <h3 className="text-lg font-semibold text-black mt-2 mb-1">
                  {book.bookTitle}
                </h3>
                <p className="text-gray-600 text-sm mb-1">{book.authorName}</p>
                <p className="text-xl font-bold text-red-600">${book.price}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;
