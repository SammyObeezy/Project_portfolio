import React from "react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const MyFooter = () => {
  return (
    <Footer className="bg-gray-100  border-t-4 border-red-600 mt-10">
      {" "}
      {/* background */}
      <div className="w-full px-4 lg:px-24">
        <div className="grid w-full grid-cols-1 gap-8 px-6 py-8 md:grid-cols-3">
          {/* BookWave Section */}
          <div>
            <Footer.Title title="BookWave" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">About Us</Footer.Link>
              <Footer.Link href="#">Our Mission</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>

          {/* Help Center Section */}
          <div>
            <Footer.Title title="Help Center" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">FAQ</Footer.Link>
              <Footer.Link href="#">Support</Footer.Link>
              <Footer.Link href="#">Feedback</Footer.Link>
            </Footer.LinkGroup>
          </div>

          {/* Legal Section */}
          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms & Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>

        <div className="w-full bg-white-100  text-black px-4 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Copyright © BookWave" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
