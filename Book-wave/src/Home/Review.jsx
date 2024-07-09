import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// react icons
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import proPic from "../assets/profile-3.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customers
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="space-y-6">
              <div className="text-amber-400 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/*text*/}
              <div className="mt-7">
                <p className="mb-5">
                  BookWave is the perfect platform for ebook enthusiasts. The
                  wide variety of books available at reasonable prices makes it
                  a great value. The user interface is sleek and easy to
                  navigate, ensuring a pleasant experience from start to finish.
                  Secure transactions and excellent support make BookWave a
                  reliable and enjoyable place to shop for ebooks.
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Allan Ping</h5>
                <p className="text-base">CEO, Safaricom Kenya</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="space-y-6">
              <div className="text-amber-400 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/*text*/}
              <div className="mt-7">
                <p className="mb-5">
                  BookWave is an excellent platform for discovering, purchasing,
                  and enjoying ebooks. The user-friendly interface makes it easy
                  to navigate through a wide selection of titles, ensuring an
                  enjoyable reading experience. Affordable prices and seamless
                  integration with secure payment systems like Stripe enhance
                  the overall experience. The intuitive categorization and
                  robust security measures make BookWave a standout choice for
                  ebook enthusiasts, providing a reliable and enjoyable service
                  for readers of all kinds.
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Allan Ping</h5>
                <p className="text-base">CEO, Safaricom Kenya</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="space-y-6">
              <div className="text-amber-400 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/*text*/}
              <div className="mt-7">
                <p className="mb-5">
                  BookWave is the perfect platform for ebook enthusiasts. The
                  wide variety of books available at reasonable prices makes it
                  a great value. The user interface is sleek and easy to
                  navigate, ensuring a pleasant experience from start to finish.
                  Secure transactions and excellent support make BookWave a
                  reliable and enjoyable place to shop for ebooks.
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Allan Ping</h5>
                <p className="text-base">CEO, Safaricom Kenya</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="space-y-6">
              <div className="text-amber-400 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/*text*/}
              <div className="mt-7">
                <p className="mb-5">
                  BookWave offers an incredible selection of ebooks at
                  affordable prices. The interface is clean and easy to use,
                  making it simple to find and purchase books. With secure
                  payment options and excellent customer support, BookWave
                  ensures a smooth and enjoyable experience for all readers.
                  It's a fantastic platform for anyone looking to expand their
                  digital library.
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Allan Ping</h5>
                <p className="text-base">CEO, Safaricom Kenya</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
