import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// react icons
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import proPic1 from "../assets/profile-2.png"; 
import proPic2 from "../assets/profile-3.png"; 
import proPic3 from "../assets/profile-4.png"; 
import proPic4 from "../assets/profile-5.png"; 

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Book Lovers.
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
            <div className="p-5 bg-amber-100  rounded shadow-lg">
              <div className="text-amber-400 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  "BookWave transformed my reading experience! The vast
                  collection of African literature is commendable, and the
                  platform is incredibly user-friendly. I particularly
                  appreciate the focus on local authors."
                </p>
                <Avatar
                  img={proPic1}
                  alt="avatar of Amina"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Amina Mwende</h5>
                <p className="text-base">Author, Nairobi, Kenya</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-5 bg-amber-100 rounded shadow-lg">
              <div className="text-amber-400 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  "As an avid reader, I highly recommend BookWave! The prices
                  are unbeatable, and the selection is vast. The customer
                  service team is always there to assist, making every purchase
                  smooth and hassle-free."
                </p>
                <Avatar
                  img={proPic2}
                  alt="avatar of Kwame"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Kwame Nkrumah</h5>
                <p className="text-base">Publisher, Accra, Ghana</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-5 bg-amber-100  rounded shadow-lg">
              <div className="text-amber-400 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  "BookWave is a game-changer! The accessibility of ebooks has
                  made it easy for me to discover new authors and genres. I love
                  how the platform highlights local talent. It's an essential
                  tool for any reader."
                </p>
                <Avatar
                  img={proPic3}
                  alt="avatar of Zuri"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Zuri Nyong'o</h5>
                <p className="text-base">Educator, Kisumu, Kenya</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-5 bg-amber-100  rounded shadow-lg">
              <div className="text-amber-400 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="mt-7">
                <p className="mb-5">
                  "I am thrilled with my experience on BookWave. The wide array
                  of books is impressive, and the layout is sleek. I especially
                  appreciate the community features that allow for discussions
                  on my favorite reads."
                </p>
                <Avatar
                  img={proPic4}
                  alt="avatar of Thabo"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Thabo Mbeki</h5>
                <p className="text-base">
                  Book Club Organizer, Pretoria, South Africa
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
