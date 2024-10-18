import React from "react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom"; // Import Link from react-router-dom


const MyFooter = () => {
  return (
    <Footer className="bg-gray-100 border-t-4 border-red-600 mt-10">
      <div className="w-full px-4 lg:px-24">
        <div className="grid w-full grid-cols-1 gap-8 px-6 py-8 md:grid-cols-3">
          {/* BookWave Section */}
          <div>
            <Footer.Title title="BookWave" />
            <Footer.LinkGroup col>
              <Footer.Link as={Link} to="/about">
                About Us
              </Footer.Link>
              <Footer.Link as={Link} to="/about">
                Our Mission
              </Footer.Link>
              <Footer.Link as={Link} to="/blog">
                Blog
              </Footer.Link>
              <Footer.Link as={Link} to="/contact">
                Contact Us
              </Footer.Link>{" "}
              {/* Update link */}
            </Footer.LinkGroup>
          </div>

          {/* Help Center Section */}
          <div>
            <Footer.Title title="Help Center" />
            <Footer.LinkGroup col>
              <Footer.Link as={Link} to="/Faqs">
                FAQ
              </Footer.Link>
              <Footer.Link as={Link} to="/contact">
                Support
              </Footer.Link>
              <Footer.Link as={Link} to="/contact">
                Feedback
              </Footer.Link>{" "}
              {/* Update link */}
            </Footer.LinkGroup>
          </div>

          {/* Legal Section */}
          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link as={Link} to="/privacy">
                Privacy Policy
              </Footer.Link>
              <Footer.Link as={Link} to="/terms">
                Terms & Conditions
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>

        <div className="w-full bg-white-100 text-black px-4 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
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
