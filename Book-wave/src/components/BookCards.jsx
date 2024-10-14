import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const BookCards = ({ headline, books }) => {
  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-black my-5">
        {headline}
      </h2>
      {/* Books Display */}
      <div className="mt-12">
        <Swiper
          slidesPerView={2}
          spaceBetween={10} // Spacing between books
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2, // Show 2 books on mobile screens
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3, // Show 3 books on tablets
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4, // Show 4 books on larger screens
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 7, // Show 7 books on extra-large screens
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <Link to={`/book/${book._id}`} className="block">
                <img
                  src={book.imageURL}
                  alt={book.bookTitle}
                  className="w-full h-[250px] object-cover" // Adjusted height for full display
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-black">
                    {book.bookTitle}
                  </h3>
                  <p className="text-gray-600 text-sm">{book.authorName}</p>
                  <p className="text-xl font-bold text-red-600">
                    ${book.price}
                  </p>
                </div>
                <div className="flex justify-end p-4">
                  <div className="bg-red-600 p-2 rounded-full hover:bg-black transition-all duration-200">
                    <FaCartShopping className="w-5 h-5 text-white" />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;
