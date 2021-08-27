import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../css/responsive.css"

import toddMobile from "../images/todd-wireless-outdoor-cinema.png"

function June25PressRelease() {
  return (
    <Layout>
      <SEO
        title="June 25 Bridgton News Article"
        description="Bring Movies and Gaming Outdoors By Wayne E. Rivet – Staff Writer for the Bridgton News"
      />
      <div className="gray-back pb-8">
        <div className="container mx-auto">
          <div className="container-insider">
            <div className="flex items-center text-sm flex-wrap change">
              <Link to="/" className="cursor-pointer">
                Home
              </Link>
              <span className="mx-2">&gt;</span>
              <Link to="/in-the-news">In the News</Link>
              <span className="mx-2">&gt;</span>
              <span to="#">June 25 Bridgton News Article</span>
            </div>
            <div className="md:hidden h-64 w-full full-bleed-mobile max-h-screen relative mt-6 mb-6">
              <img className="w-full h-full object-cover " src={toddMobile} />
            </div>
            <div className="mt-12 text-center">
              <h1 className="text-orange-500 text-5xl leading-none font-bold relative heading">
                <span className="text-black">In the </span>News
              </h1>
              <h2 className="text-2xl leading-tight mt-1 font-thin">
                Bridgton News Article
              </h2>
              <h2 className="text-2xl leading-tight">June 25, 2020</h2>
            </div>
            <div className="mt-4">
              <div className="text-left sm:text-center sm:font-bold text-2xl leading-tight sm:leading-normal text-center">
                <h3>Bring Movies and Gaming Outdoors. By Wayne E. Rivet – Staff Writer for the Bridgton News</h3>
                
              </div>
              <div className="news-article">
                <p className="mb-6">
                  <b className="font-bold">BRIDGTON NEWS – June 25, 2020</b> –
                  Todd Morton has had a diverse working career. He has done
                  construction, finish carpentry and built a couple of log
                  homes. And he worked 25 years as an Internet marketer and
                  website designer. Now he hopes to add the Wireless Outdoor
                  Cinema Company to his professional accomplishments.
                </p>
                <p className="mb-6">
                  “I want to create an outdoor experience that the entire family
                  will enjoy,” he said.
                </p>
                <p className="mb-6">
                  Todd has always had a great appreciation for the outdoors and
                  grew up in northern Vermont. His true passions have always
                  been working outdoors and nature. For years, Todd thought
                  about putting up a backyard movie screen for years and started
                  testing various outdoor set ups that turned out to be flimsy
                  or too cumbersome to setup and watch.
                </p>
                <p className="mb-6">
                  During the winter, Todd continued researching outdoor cinema
                  setups but found most failed to hold up due to uneven ground
                  conditions and wind. “I brainstormed for months how I could
                  set up a sturdy, rugged stationary movie screen frame, that I
                  wouldn’t have to inflate or deflate at the end of the movie
                  and make it look aesthetically clean on my property,” he said.
                </p>
                <p className="mb-6">
                  Todd built a pressure-treated movie screen frame, which can
                  easily be moved by two people. All hardware used on the
                  outdoor wooden frame is weather-resistant galvanized and
                  stainless steel. “This frame is built to last,” he said. The
                  cinematic polyester screens come in three sizes – 96”, 120”
                  and 150” and attach to the frame with grommet holes and
                  stainless steel hooks. To put the screen on the frame takes
                  less time than it does to pop a bag of popcorn in the
                  microwave, Todd said.{" "}
                </p>
                <p className="mb-6">
                  “You can set up the wireless outdoor cinema anywhere on your
                  property. After watching my first movie outside, I knew other
                  homeowners would love this experience. Being outside in the
                  fresh air seeing the galaxy of stars and moon is incredible,
                  nothing beats the experience,” he said. I envision people
                  watching movies outside with family and friends, having
                  Halloween parties in October, watching the Super Bowl, all you
                  need to stay warm in the cooler months is a good old fashion
                  campfire or a propane heat lamp. And with social distancing,
                  you can spread out lawn chairs and still safely watch a movie,
                  sporting event, play video games together with friends.”
                </p>
                <p className="mb-6">
                  The HD Wi-Fi projector (which is positioned six to seven feet
                  away from the screen) sets on either a projector stand or a
                  custom-build cedar projector stand with shelves. The off-grid
                  battery station powers the outdoor cinema where there’s no
                  need to run any extension cords out to the electronic
                  components. And the off-grid battery comes with a built-in
                  flashlight to help with finding your way back inside.{" "}
                </p>
                <p className="mb-6">
                  He offers three packages: 96” Jedi Bobcat, perfect for the
                  ultimate gaming experience, $2,499; the 120” Bella Bear, best
                  for watching movies and streaming your favorite shows, $2,399;
                  and 150” Big Moose, a great option for restaurants and bars
                  with outdoor seating, and other outdoor seating venues such as
                  summer camps, $2,899.
                </p>
                <p className="mb-6">
                  For more information, contact Todd Morton of the Wireless
                  Outdoor Cinema Company at 207-595-2960 or check out the
                  website at{" "}
                  <a
                    href="https://www.wirelessoutdoorcinema.com"
                    className="text-blue-600"
                  >
                    www.wirelessoutdoorcinema.com
                  </a>
                </p>
                <p className="mb-6">
                  The Wireless Outdoor Cinema packages will be available
                  starting June 15, 2020, with the 96” Jedi Bobcat Wireless
                  Outdoor Cinema base package starting at $2,399. For more
                  information on the complete line of cinema packages please
                  visit:{" "}
                  <a
                    href="https://www.wirelessoutdoorcinema.com"
                    className="text-blue-600"
                  >
                    www.wirelessoutdoorcinema.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default June25PressRelease
