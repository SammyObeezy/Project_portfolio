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
      {/* Cards */}
      <div className="mt-12">
        <Swiper
          slidesPerView={2}
          spaceBetween={10} // Spacing between cards
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2, // Show 2 cards on mobile screens
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3, // Show 3 cards on tablets
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4, // Show 4 cards on larger screens
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 7, // Show 5 cards on extra-large screens
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <Link
                to={`/book/${book._id}`}
                className="block bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 overflow-hidden h-[350px] w-[250px]" // Increased height and width
              >
                <div className="relative">
                  <img
                    src={book.imageURL}
                    alt={book.bookTitle}
                    className="w-full h-[200px] object-cover" // Adjusted height for full display
                  />
                  <div className="absolute top-3 right-3 bg-red-600 hover:bg-black p-2 rounded-full shadow-lg transition-all duration-200">
                    <FaCartShopping className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-black truncate">
                    {book.bookTitle}
                  </h3>
                  <p className="text-gray-600 text-sm">{book.authorName}</p>
                </div>
                <div className="border-t border-gray-200 py-2 px-4">
                  <p className="text-xl font-bold text-red-600">
                    ${book.price}
                  </p>
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
