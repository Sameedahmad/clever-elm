import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import '../css/responsive.css'

import homeImage from '../images/june-8.png'

function June08PressRelease() {
  return (
    <Layout>
      <SEO
        title="Press Release Announcement. June 8 Press Release. Introducing the Wireless Outdoor Cinema Company. Turn Your Backyard into a Year-Round Drive-in"
        description="The Wireless Outdoor Cinema Company today announced the unveiling of their new line of Outdoor Cinema Packages for homeowners and businesses throughout Maine and New Hampshire. The Wireless Outdoor Cinema is a year-round, weather-resistant, pressure-treated wood movie screen frame that comes with a removable cinematic screen, an HD Wi-Fi Projector, Off-Grid Battery Pack and a Wireless Surround Bar Speaker. The Wireless Outdoor Cinema offers a new way for homeowners to enjoy their backyards, year-round, under the stars and moon watching their favorite movie, TV show, sporting event, or playing video games on a larger than life screen."
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
              <span to="#">June 8 Press Release</span>
            </div>
            <div className="md:hidden h-64 w-full full-bleed-mobile max-h-screen relative mb-6 mt-6 bg-center">
              <img
                className="w-full h-full absolute object-cover "
                src={homeImage}
              />
            </div>
            <div className="mt-12 text-center">
              <h1 className="text-orange-500 text-5xl leading-none font-bold relative heading">
              <span className="text-black">In the </span>News
              </h1>
              <h2 className="text-2xl leading-tight mt-1 font-thin">
                Press Release Announcement
              </h2>
              <h2 className="text-2xl leading-tight">June 8, 2020</h2>
            </div>
            <div className="mt-4">
              <div className="text-left sm:text-center sm:font-bold text-2xl leading-tight sm:leading-normal text-center">
                <h3>Introducing the Wireless Outdoor Cinema Company</h3>
              </div>
              <div className="news-article">
                <p className="mb-6">
                  <b className="font-bold">BRIDGTON, MAINE – June 8, 2020</b> –
                  The Wireless Outdoor Cinema Company today announced the
                  unveiling of their new line of Outdoor Cinema Packages for
                  homeowners and businesses throughout Maine and New Hampshire.
                  The Wireless Outdoor Cinema is a year-round,
                  weather-resistant, pressure-treated wood movie screen frame
                  that comes with a removable cinematic screen, an HD Wi-Fi
                  Projector, Off-Grid Battery Pack and a Wireless Surround Bar
                  Speaker. The Wireless Outdoor Cinema offers a new way for
                  homeowners to enjoy their backyards, year-round, under the
                  stars and moon watching their favorite movie, TV show,
                  sporting event, or playing video games on a larger than life
                  screen.
                </p>
                <p className="mb-6">
                  “After I built and set up my first Wireless Outdoor Cinema on
                  my property here in Bridgton, I knew immediately other
                  homeowners would love this outdoor experience as much as I do.
                  It’s a beautiful ‘rugged’ year-round, pressure-treated movie
                  frame with an easy setup to start watching your favorite
                  movie, show, or use your Xbox, PlayStation, or Wii.”
                </p>
                <p className="mb-6">
                  Features and benefits of the Wireless Outdoor Cinema include:
                </p>
                <ul className="mb-6 list-outside list-disc pl-12">
                  <li>
                    Enjoy outdoor evenings year-round watching movies with
                    nature and friends
                  </li>
                  <li>
                    Movie screen frames are built with pressure-treated wood,
                    galvanized and stainless-steel hardware and comes with a
                    solid15-year warranty
                  </li>
                  <li>
                    Wi-Fi HD Projector allows you to connect with your
                    smartphone, tablet, laptop, DVD Player, Roku, Amazon Fire TV
                    Stick, Google Chromecast Stick, Xbox, PlayStation, Wii, and
                    Speakers
                  </li>
                  <li>
                    Wireless with no dragging out extension cords and tripping
                    over them at night
                  </li>
                </ul>
                <p className="mb-6">
                  The Wireless Outdoor Cinema packages will be available
                  starting June 15, 2020, with the 96” Jedi Bobcat Wireless
                  Outdoor Cinema base package starting at $2,499. For more
                  information on the complete line of cinema packages please
                  visit:{" "}
                  <a
                    href="https://www.wirelessoutdoorcinema.com"
                    className="text-blue-600"
                  >
                    www.wirelessoutdoorcinema.com
                  </a>
                </p>
                <p className="mb-6">
                  About The Wireless Outdoor Cinema Company: The Wireless
                  Outdoor Cinema company provides year-round, weather-resistant
                  wooden movie screen frames and complete cinema packages for
                  homeowners, campgrounds, summer camps, town parks and beaches,
                  restaurants and bars with outdoor seating, miniature golf
                  courses, fun parks, assisted living homes, hotels and motels,
                  and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default June08PressRelease
