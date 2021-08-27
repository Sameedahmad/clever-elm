import React from "react";
import { Link } from "gatsby";

function Footer() {
  return (
    <div className="bg-black pt-8 lg:pt-12 lg:py-12 text-white">
      <div className="container mx-auto lg:flex">
        <div className="block lg:hidden text-sm">
          <div className="mb-3">
            <h5 className="text-orange-500 uppercase mb-2">
              The Wireless Outdoor Cinema Company
            </h5>
            <p className="sm:leading-none">
              PO Box 752
              <br />
              Bridgton, ME 04009
            </p>
          </div>
          <div className="mb-4">
            <h5 className="text-orange-500 uppercase mb-2">Connect</h5>
            <div className="flex items-center mb-1">
              <a
                href="https://www.facebook.com/The-Wireless-Outdoor-Cinema-Company-112773330512496"
                target="_blank"
                className="cursor-pointer"
              >
                <img src={`/facebook.svg`} className="h-4 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/todd-morton-7851b1b"
                target="_blank"
                className="cursor-pointer"
              >
                <img
                  src={`/linkedinwhite.png`}
                  className="ml-4 h-4 text-white"
                />
              </a>
            </div>
            <a
              href="tel:2075952960"
              className="cursor-pointer flex items-center mb-3 mt-4"
            >
              <img src={`/cell.png`} className="h-5" />
              <span className="ml-1">(207) 595-2960</span>
            </a>
            <a
              href="mailto:todd@wirelessoutdoorcinema.com"
              className="cursor-pointer flex items-center"
            >
              <img src={`/emailwhite.png`} className="h-3" />
              <span className="ml-1">todd@wirelessoutdoorcinema.com</span>
            </a>
          </div>
          <div className="mb-4">
            <h5 className="text-orange-500 uppercase">Links</h5>
            <div className="flex flex-col">
              <Link to="/about" className="flex items-center py-2">
                <span className="text-orange-600 mr-2">&gt;</span>
                About
              </Link>
              <Link to="/#cinema-packages" className="flex items-center py-2">
                <span className="text-orange-500 mr-2">&gt;</span>
                Cinema Packages
              </Link>
              <Link to="/accessory" className="flex items-center py-2">
                <span className="text-orange-500 mr-2">&gt;</span>
                Outdoor Cinema Accessories
              </Link>
              <Link to="/in-the-news" className="flex items-center py-2">
                <span className="text-orange-500 mr-2">&gt;</span>
                In the News
              </Link>
              <Link to="/faq" className="flex items-center py-2">
                <span className="text-orange-500 mr-2">&gt;</span>
                FAQ
              </Link>
              <Link to="/connect" className="flex items-center py-2">
                <span className="text-orange-500 mr-2">&gt;</span>
                Connect
              </Link>
              <Link to="/terms" className="flex items-center py-2">
                <span className="text-orange-500 mr-2">&gt;</span>
                Terms Of Use
              </Link>
              <Link to="/privacy" className="flex items-center py-2">
                <span className="text-orange-500 mr-2">&gt;</span>
                Privacy Policy
              </Link>
              <Link to="/sitemap" className="flex items-center py-2">
                <span className="text-orange-500 mr-2">&gt;</span>
                Sitemap
              </Link>
            </div>
          </div>
          <div className="mb-4">
            <Link
              to="/connect"
              className="text-orange-500 uppercase flex items-center"
            >
              Media Inquires
              <span className=" ml-2">&gt;</span>
            </Link>
            <p className="sm:leading-none">
              The Wireless Outdoor Cinema Company, LLC. welcomes members of the
              press...
            </p>
          </div>
          <div className="mb-4">
            <Link
              to="/connect"
              className="text-orange-500 uppercase flex items-center"
            >
              Customer Support
              <span className=" ml-2">&gt;</span>
            </Link>
            <p className="sm:leading-none">
              Please get in touch with any questions you may have with your
              wireless cinema...
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <Link to="/" className="cursor-pointer">
            <img src={`/cinemalogo.png`} className="h-12" />
          </Link>
          <p className="mt-3 pl-6">
            Create unforgettable memories "year-round" with a Wireless Outdoor
            Cinema. Watch your favorite shows by connecting your Smartphone,
            Tablet, Laptop, DVD Player, Gaming console, Roku, Fire TV Stick,
            Google Chromecast, and more to the HD Projector. A unique Drive-in
            movie experience in the privacy of your backyard.
          </p>
        </div>
        <div className="flex items-end pb-6 sm:pb-0">
          <video autoPlay loop muted playsInline className="w-4/5 mx-auto">
            <source src="/campfire.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="pt-12 hidden lg:block">
          <h5 className="text-orange-500 font-bold uppercase mt-1">
            Quick Links
          </h5>
          <div className="flex flex-col">
            <Link to="/#about" className="flex items-center">
              <img src="/arrowright.png" className="h-3 mr-3" />
              About
            </Link>
            <Link to="/#cinema-packages" className="flex items-center">
              <img src="/arrowright.png" className="h-3 mr-3" />
              Cinema Packages
            </Link>
            <Link to="/accessory" className="flex items-center">
              <img src="/arrowright.png" className="h-3 mr-3" />
              Outdoor Cinema Accessories
            </Link>
            <Link to="/in-the-news" className="flex items-center">
              <img src="/arrowright.png" className="h-3 mr-3" />
              In the News
            </Link>
            <Link to="/faq" className="flex items-center">
              <img src="/arrowright.png" className="h-3 mr-3" />
              FAQ
            </Link>
            <Link to="/connect" className="flex items-center">
              <img src="/arrowright.png" className="h-3 mr-3" />
              Connect
            </Link>
            <div className="my-1 flex items-center">
              <a
                href="tel:2075952960"
                className="cursor-pointer flex items-center"
              >
                <img src={`/cell.png`} className="h-5" />
                <span className="ml-2">(207) 595-2960</span>
              </a>
              <div className="mx-6 bg-orange-500 w-px h-5"></div>
              <div className="flex items-center">
                <a
                  href="https://www.facebook.com/The-Wireless-Outdoor-Cinema-Company-112773330512496"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <img src={`/facebook.svg`} className="h-5 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/todd-morton-7851b1b"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <img
                    src={`/linkedinwhite.png`}
                    className="ml-6 h-5 text-white"
                  />
                </a>
              </div>
            </div>
            <div className="mt-1 flex items-center">
              <a
                href="mailto:todd@wirelessoutdoorcinema.com"
                className="cursor-pointer flex items-center"
              >
                <img src={`/emailwhite.png`} className="h-3" />
                <span className="ml-2">todd@wirelessoutdoorcinema.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-left lg:text-center text-sm mt-2 lg:mt-6 py-3 px-6 lg:px-0 lg:py-0 border-t border-gray-800 lg:border-none">
        <div className="flex items-center lg:justify-center lg:mb-2">
          &copy;2021 The Wireless Outdoor Cinema Company. All Rights Reserved.{" "}
          <span className="hidden lg:inline">
            <Link className="ml-1" to="/terms">
              Terms of Use
            </Link>{" "}
            <span className="mx-1">|</span> <Link to="/privacy">Privacy</Link>{" "}
            <span className="mx-1">|</span> <Link to="/sitemap">Sitemap</Link>
          </span>
        </div>
        <div className="flex items-center justify-center hidden lg:hidden">
          Website designed with <img src="/heart.png" className="h-4 mx-1" />{" "}
          from Maine.
        </div>
      </div>
    </div>
  );
}

export default Footer;
