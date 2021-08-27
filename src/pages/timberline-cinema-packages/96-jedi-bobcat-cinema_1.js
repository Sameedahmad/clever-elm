import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProductSection from "../../components/ProductSection"
import Gallery from "../../components/Gallery"
// import Gallery1 from "../../components/Gallery1"
import ProductDivider from "../../components/ProductDivider"

import jediLg from "../../images/jedidesktop.png"
import assassinscreed from "../../images/assassinscreed.png"
import spiderMan from "../../images/spiderMan.png"
import roadHouse from "../../images/roadHouse.png"
import holloween from "../../images/holloween.png"
import avengers from "../../images/avengers.png"

import screenAndFrame from "../../images/screenAndFrame.png"
import lgBattery from "../../images/lg_battery.png"
import lgProjector from "../../images/lg_projector.png"
import lgSpeaker from "../../images/lg_speaker.png"
import roku from "../../images/roku.png"
import projectorStand from "../../images/projectStand.png"

import wiredMain from "../../images/wiredMain.png"
import digitalTransmitter from "../../images/digitalTransmitter.png"
import rockvilleSpeakers from "../../images/rockvilleSpeakers.png"
import loin from "../../images/1.png"
import deer from "../../images/2.png"
import bear from "../../images/3.png"

import "../../css/responsive.css"

import screenSetup from "../../images/screenSetup.png"

function JediBobcat() {
  const picturesArray = [
    {
      src: jediLg,
      alt: "bobcat jedi",
    },
    {
      src: assassinscreed,
      alt: "assassins creed",
    },
    {
      src: spiderMan,
      alt: "spider man",
    },
    {
      src: roadHouse,
      alt: "road house",
    },
    {
      src: holloween,
      alt: "holloween",
    },
    {
      src: avengers,
      alt: "avengers",
    },
  ]

  const includedPicturesArray = [
    {
      src: wiredMain,
      alt: "wired main",
    },
    {
      src: lgProjector,
      alt: "projector",
    },
    {
      src: digitalTransmitter,
      alt: "digital transmitter",
    },
    {
      src: rockvilleSpeakers,
      alt: "rockville speakers",
    },
    {
      src: roku,
      alt: "roku",
    },
    {
      src: projectorStand,
      alt: "projector stand",
    },
  ]

  // const picturesArray = [
  //   {
  //     src: loin,
  //     alt: "loin",
  //   },
  //   {
  //     src: deer,
  //     alt: "deer",
  //   },
  //   {
  //     src: bear,
  //     alt: "bear",
  //   },
  // ]

  return (
    <Layout>
      <SEO
        title={`96" Jedi Bobcat`}
        description={`The ultimate outdoor gaming experience. Use your PlayStation\u00AE, Xbox One\u00AE, Wii\u00AE, and more to connect to the HD1080p Wi-fi Projector and game away under the stars and moon.`}
      />
      <div className="wrapper desktop">
        <div className="container mx-auto">
          <div className="py-6">
            <div className="flex flex-wrap items-center text-sm">
              <Link
                to="/"
                className="text-orange-500 sm:text-black cursor-pointer"
              >
                Home
              </Link>
              <span className="mx-2">&gt;</span>
              <span to="#">Timberline Cinema Packages</span>
              <span className="mx-2">&gt;</span>
              <span>96” Jedi Bobcat</span>
            </div>
            <div className="mt-12 flex flex-col-reverse md:flex-row">
              <div className="flex-1 mt-6 md:mt-0 pr-0 md:pr-12">
                <h1 className="text-orange-500 text-3xl sm:text-5xl leading-none font-bold uppercase relative">
                  96” JEDI BOBCAT
                </h1>
                <h1 className="text-black text-3xl sm:text-5xl leading-none font-bold uppercase relative">
                  OUTDOOR GAMING CINEMA
                </h1>
                <h2 className="text-2xl sm:text-3xl mt-3 font-thin leading-tight medium-text mb-8">
                  Standing at 8’ ft. wide and 8’ ft. high, this cool year-round
                  outdoor gaming cinema is designed for the serious gamer who
                  demands a bigger screen for ultimate entertainment.
                </h2>
                <h2 className="text-2xl sm:text-2xl mt-3 font-thin leading-tight medium-text">
                  Get your children out of the house and give them some much
                  needed fresh air while they play their favorite video games
                  under the stars and moon. Your kids won’t want to come back
                  inside the house after experiencing their first game outside.
                  Great for the adult gamer too.
                </h2>
              </div>
              <div className="flex-1 pl-0 md:pl-12 text-center md:text-left rightContainer">
                <Gallery
                  picturesArray={picturesArray}
                  color="#FF6600"
                  isFullBleed
                />
              </div>
            </div>

            <ProductDivider
              coloredText="GET THE ONLY "
              text="OUTDOOR GAMING CINEMA"
              color="#FF6600"
            />
            <div className="flex flex-col-reverse md:flex-row secondContainer">
              <div className="flex-1 pl-0 md:pl-12 text-center md:text-left firstWrap leftContainer">
                <Gallery
                  picturesArray={includedPicturesArray}
                  color="#FF6600"
                />
              </div>
              <div className="flex-1 mt-6 md:mt-0 rightContainer md:pl-12 description-container">
                <h2 className="text-xl sm:text-xl uppercase product-title mb-2">
                  THE FIRST OUTDOOR GAMING CINEMA
                </h2>
                <p className="mb-2 text-md">
                  Get this amazing outdoor gaming system designed for the
                  hardcore gaming enthusiast with a fast and easy setup every
                  time. This system comes with powerful Rockville Dual 8" high
                  Powered Speakers and 46" high tripod stands with Bluetooth
                  technology and a Digital FM Transmitter, giving you an
                  excellent sound quality experience while playing the most
                  intense video games. And with the 100” diagonal double layer
                  with black backing cinematic gaming screen, the visual quality
                  will jump off the screen.
                </p>
                <h3 className="text-md sm:text-xl uppercase">
                  GAMING CINEMA PACKAGE INCLUDES
                </h3>
                <ul className="list">
                  <li>Pressure-treated wooden movie frame</li>
                  <li>Wrinkle-free Cinematic Screen with black backing</li>
                  <li>1080p HD Gaming Projector with 4,000 Lumens</li>
                  <li>Rockville 8“ Dual Speakers with Tripod Stands</li>
                  <li>
                    Rolls Digital FM Transmitter connects your speakers to the
                    projector
                  </li>
                  <li>25'ft. Extension Cord and Waterproof Surge Strip</li>
                  <li>
                    Custom Cedar Equipment Stand with pivoting shelf for
                    projector
                  </li>
                  <li>Friendly and Professional Installation</li>
                </ul>
                <div className="mt-4 flex justify-between prices">
                  <div className="flex mt-2 getButton btn-orange call-today">
                    <Link to="/connect">Call Today</Link>
                  </div>
                  <div className="flex flex-col items-center priceContainer">
                    <span className="text-xl uppercase leading-tight sm:leading-normal line-normal">
                      <span className="hidden sm:inline">Sale Price</span>
                      <span className="inline sm:hidden">
                        <br />
                        Sale Price
                      </span>
                    </span>
                    <span className="text-3xl text-orange-500 flex items-start mt-2">
                      <span className="text-2xl">$</span>2,499
                    </span>
                  </div>
                  <div className="flex flex-col items-center priceContainer">
                    <span className="text-xl uppercase leading-tight sm:leading-normal line-normal">
                      <span className="hidden sm:inline">Reg Price</span>
                      <span className="inline sm:hidden">
                        <br />
                        Reg Price
                      </span>
                    </span>
                    <span className="text-3xl text-orange-500 flex items-start discount mt-2">
                      <span className="text-2xl">$</span>2,999
                    </span>
                  </div>
                  <div className="flex flex-col items-center priceContainer">
                    <span className="text-xl uppercase leading-tight sm:leading-normal line-normal">
                      <span className="hidden sm:inline">You Save</span>
                      <span className="inline sm:hidden">
                        <br />
                        Save
                      </span>
                    </span>
                    <span className="text-3xl text-orange-500 flex items-start mt-2">
                      <span className="text-2xl">$</span>500
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <ProductSection
              title="GAMING CINEMA SPECIFICATIONS"
              content={
                <div className="grid gap-2 sm:grid-cols-2 mt-4">
                  <div>
                    <div className="mb-4">
                      <h3 className="text-xl sm:text-2xl uppercase font-thin mb-2">
                        Wooden Frame For Screen
                      </h3>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        4" x 4” Frame Dimensions: 123" Wide by 102" High x 42“
                        Deep
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Item Weight: 65-75 Lbs.
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Warranty: 5-Year Limited
                      </div>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-xl sm:text-2xl uppercase font-thin mb-2">
                        HD Cinematic Screen
                      </h3>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Cinematic Screen Dimensions: 111” Wide by 70” High
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Item Weight: 1.2 Lbs.
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Warranty: 1-Year Limited from Manufacturer
                      </div>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-xl sm:text-2xl uppercase font-thin mb-2">
                        HD Projector
                      </h3>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Bluetooth Capable: No
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Native Resolution: 800 x 480
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Supported Resolutions: 480P, 720P & 1080P
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Contrast Ratio: 2,000:1
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Display Technology: LCD
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Light Source: LED
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Image Brightness/Lumens: 3600
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Ports: USB, Micro SD Card, AV, HDMI, VGA Input, Audio
                        IN/OUT
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Built-in Speaker: 2 watt / 8 ohm
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Lamp Life: 40,000 hours
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Screen Size Range: 4.9’ feet to 16’ feet away from the
                        projector
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Projector Dimensions: 7.9” Wide x 5.9” Deep x 3.10” High
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Item Weight: 2.1 Lbs.
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Warranty: 2-Year Limited from Manufacturer
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-4">
                      <h3 className="text-xl sm:text-2xl uppercase font-thin mb-2">
                        Off-Grid Battery Station
                      </h3>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Cell Chemistry: Li-ion NMC
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Lifecycles: ≥500 cycles to 80%
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Management System: BMS, Over Voltage & Short Circuit
                        Protection
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Charge Methods: AC Wall Outlet, 12V Car adaptor
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Full Recharge Time: 5 (HOURS) AC
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Shelf-life: Charge every 3-6 Months
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Operating Usage Temperature: 32-104F
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Certification: FCC, ROHS, UN38.3
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Battery Dimensions: 7.4" Width x 6.7" Height x 4.5"
                        Depth
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Weight: 3.84 Lbs.
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Warranty: 2-Year Limited from Manufacturer
                      </div>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-xl sm:text-2xl uppercase font-thin mb-2">
                        Soundbar Speaker
                      </h3>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Wireless Operation Range: 30’ Feet
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Speaker Dimensions: 0.8" Width x 2.4" Height x 2" Depth
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Speaker Weight: 1.6 Lbs.
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Warranty: 1-Year Limited from Manufacturer
                      </div>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-xl sm:text-2xl uppercase font-thin mb-2">
                        Projector Stand
                      </h3>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Projector Stand: Cedar
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Stand Dimensions: 16“ Width x 24” High x 12” Depth
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Item Weight: 20 Lbs.
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Warranty: 2-Year Limited
                      </div>
                    </div>
                  </div>
                </div>
              }
            />

            <ProductDivider
              coloredText="HOW TO USE YOUR "
              text="OUTDOOR GAMING CINEMA"
              color="#FF6600"
            />
            <div className="mt-12 flex flex-col-reverse md:flex-row mb-16">
              <div className="flex-1 mt-6 md:mt-0 pr-0 md:pr-12">
                <img src={screenSetup} />
              </div>
              <div className="flex-1 pl-0 md:pl-12 text-center md:text-left rightContainer">
                <h3 className="text-xl mb-2 attaching-gaming">
                  Attaching The Gaming Screen
                </h3>
                <p className="mb-4">
                  After your outdoor gaming cinema has been professionally
                  installed on your property, it is almost as easy to use as
                  playing video games in the comfort of your own home. The
                  cinema frame can be left up all year and never needs to be
                  dismantled; simply attach the grommet hole cinematic gaming
                  screen to the inside edge of the frame. The cinema wooden
                  frame has eye hooks that make attaching the grommet hole
                  cinematic screen simple.{" "}
                </p>
                <p className="mb-4">
                  Start by attaching the cinematic screen to one of the wooden
                  frame's top corners using a secured lightweight folding step
                  ladder and work your way across. After you've connected the
                  top of the cinematic screen to the horizontal post, you can
                  move on to the bottom and sides. Attaching the cinematic
                  screen to the frame takes less than 2 minutes.
                </p>
                <p>
                  When you're done playing your video games at the end of the
                  evening or early hours in the morning, simply remove the
                  cinematic screen from the frame and store it in the convenient
                  carrying bag that comes with it. It's so easy even a Bobcat
                  could do it.
                </p>
              </div>
            </div>
            <div className="mt-12 flex flex-col-reverse md:flex-row">
              <div className="flex-1 mt-6 md:mt-0 pr-0 md:pr-12">
                <h3 className="text-xl mb-2">USING THE CINEMA EQUIPMENT</h3>
                <p className="mb-4">
                  After your outdoor gaming cinema is professionally installed,
                  all electronic equipment is kept organized on the custom
                  (patent pending) cedar projector stand, which never needs to
                  be broken down. The bottom shelf to the cedar projector stand
                  allows you to place your gaming console on it. The electronics
                  are always kept on your projector stand, similar to a home
                  entertainment system. However, because the cinema equipment is
                  not waterproof, you should bring it inside once you've
                  finished gaming at the end of the night.
                </p>
                <p className="mb-4">
                  When you want to go outside to start gaming, take the
                  lightweight cedar projector stand with all of the equipment on
                  it and plug it into the included extension cord and waterproof
                  power strip. The projector stand is usually placed 10-12' away
                  from the screen for the best viewing experience. Next, plug
                  the speaker wires into the Digital FM Transmitter, fine-tune
                  the projector's focus for sharpness, and you're ready to game
                  away.
                </p>
                <p className="mb-4">
                  This system setup is too powerful for a wireless experience
                  due to the large power consumption the video console puts on a
                  off-grid battery station.
                </p>
              </div>
              <div className="flex-1 pl-0 md:pl-12 text-center md:text-left rightContainer">
                <img src={projectorStand} />
              </div>
            </div>
            <ProductDivider
              coloredText="OUTDOOR PROJECTOR "
              text="VARIOUS CONNECTIONS"
              color="#FF6600"
            />
            <div className="mb-20">
              <h3 className="text-2xl mb-4">
                ADDITIONAL USES FOR THE OUTDOOR GAMING PROJECTOR
              </h3>
              <div className="mt-4 various-connections">
                <div className="mb-6 flex items-start">
                  <img src="/checkmark.png" className="mr-3 h-6" />
                  <span>
                    Connect your DVD player, laptop, tablet, TV, smartphone,
                    video recorder, Xbox®, Playstation®, Wii®, digital FM
                    transmitter, digital tuner, speakers, and other devices to
                    the projector's multiple backports.
                  </span>
                </div>
                <div className="mb-6 flex items-center">
                  <img src="/checkmark.png" className="mr-3 h-6" />
                  <span>
                    The 1080p HD Projector has 1 AV Port, 1 VGA Port, 1 USB
                    Port, 1 ATV Port, 1 Audio Out Port, 1 HDMI Port, and 1
                    Memory Card Slot.
                  </span>
                </div>
                <div className="mb-6 flex items-start">
                  <img src="/checkmark.png" className="mr-3 h-6" />
                  <span>
                    You can watch Netflix, Hulu, Disney+, HBO Max, Amazon Prime
                    Video, Youtube, ESPN, MLB, NFL, NBA, and many other channels
                    with the included Roku Player. Furthermore, the 1080p HD
                    Projector is compatible with the Amazon Firestick®, Google
                    Chromecast®, and Apple TV Box®.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper mobile">
        <div className="container mx-auto">
          <div className="md:px-8 py-6">
            <div className="flex flex-wrap items-center text-sm breadcrums-mobile">
              <Link
                to="/"
                className="text-blue-600 sm:text-black cursor-pointer"
              >
                Home
              </Link>
              <span className="mx-2">&gt;</span>
              <span to="#">Timberline Cinema Packages</span>
              <span className="mx-2">&gt;</span>
              <span>96" Jedi Bobcat</span>
            </div>
            <div className="mt-12 flex flex-col-reverse md:flex-row mb-8">
              <div className="flex-1 mt-6 md:mt-0 pr-0 md:pr-12">
                <h1 className="text-black text-3xl sm:text-5xl leading-none relative heading font-changer">
                  <span className="text-orange-500">96” Jedi Bobcat</span>
                  <br />
                  Outdoor Gaming Cinema
                </h1>
                <h2 className="text-2xl sm:text-3xl mt-3 font-thin leading-tight">
                  Standing at 8’ ft. wide and 8’ ft. high, this cool year-round
                  outdoor gaming cinema is designed for the serious gamer who
                  demands a bigger screen for ultimate entertainment.
                </h2>
                <h2 className="text-2xl sm:text-3xl mt-3 font-thin leading-tight">
                  Get your children out of the house and give them some much
                  needed fresh air while they play their favorite video games
                  under the stars and moon. Your kids won’t want to come back
                  inside the house after experiencing their first game outside.
                  Great for the adult gamer too.
                </h2>
                <h2 className="text-2xl sm:text-3xl mt-3 font-thin leading-tight">
                  Continue learning more about the 96" Jedi Bobcat Gaming Cinema
                  by clicking on the buttons below with expandable content that
                  will give you more information on the cinema package,
                  specifications, and pricing details.
                </h2>
              </div>
              <div className="flex-1 pl-0 md:pl-12 text-center md:text-left rightContainer picture-gallery">
                <Gallery
                  picturesArray={picturesArray}
                  color="#FF6600"
                  isFullBleed
                  first
                />
              </div>
            </div>
            <div className="mb-8">
              <ProductSection
                title="GET THE GAMING CINEMA"
                content={
                  <div className="flex flex-col-reverse md:flex-row secondContainer">
                    <div className="flex-1 pl-0 md:pl-12 text-center md:text-left firstWrap leftContainer">
                      <h2 className="text-xl sm:text-3xl font-bold product-title mb-4 first-outdoor">
                        The first outdoor gaming cinema on the market
                      </h2>
                      <p className="mb-4 text-left">
                        Get this amazing outdoor gaming system designed for the
                        hardcore gaming enthusiast with a fast and easy setup
                        every time. This system comes with powerful Rockville
                        Dual 8" high Powered Speakers and 46" high tripod stands
                        with Bluetooth technology and a Digital FM Transmitter,
                        giving you an excellent sound quality experience while
                        playing the most intense video games. And with the 100”
                        diagonal double layer with black backing cinematic
                        gaming screen, the visual quality will jump off the
                        screen.
                      </p>
                      <h3 className="text-lg sm:text-xl text-left mb-4 product-title first-outdoor">
                        Gaming cinema package includes
                      </h3>
                      <ul className="list mb-8 text-left various-connections">
                        <div className="mb-6 flex items-start ">
                          <img src="/checkmark.png" className="mr-3 h-6" />
                          <span>
                            Pressure-treated wooden movie frame, which stays up
                            year-round
                          </span>
                        </div>
                        <div className="mb-6 flex items-start">
                          <img src="/checkmark.png" className="mr-3 h-6" />
                          <span>
                            Wrinkle-free Cinematic Screen with special black
                            backing
                          </span>
                        </div>
                        <div className="mb-6 flex items-start">
                          <img src="/checkmark.png" className="mr-3 h-6" />
                          <span>1080p HD Projector with 4,000 Lumens</span>
                        </div>
                        <div className="mb-6 flex items-start">
                          <img src="/checkmark.png" className="mr-3 h-6" />
                          <span>
                            Rockville 8“ Dual Powered PA System Speakers with
                            Tripod Stands
                          </span>
                        </div>
                        <div className="mb-6 flex items-start">
                          <img src="/checkmark.png" className="mr-3 h-6" />
                          <span>
                            Rolls Digital FM Transmitter that connects your
                            speakers to the projector
                          </span>
                        </div>
                        <div className="mb-6 flex items-start">
                          <img src="/checkmark.png" className="mr-3 h-6" />
                          <span>
                            25'ft. Extension Cord and Waterproof Surge Protector
                            Power Strip
                          </span>
                        </div>
                        <div className="mb-6 flex items-start">
                          <img src="/checkmark.png" className="mr-3 h-6" />
                          <span>
                            Custom Cedar Equipment Stand, which organizes
                            everything
                          </span>
                        </div>
                        <div className="mb-6 flex items-start">
                          <img src="/checkmark.png" className="mr-3 h-6" />
                          <span>Friendly and Professional Installation</span>
                        </div>
                      </ul>
                      <div className="mt-4 flex justify-between prices mb-8">
                        <div className="flex flex-col items-center priceContainer">
                          <span className="text-xl uppercase leading-tight sm:leading-normal line-normal">
                            <span className="inline sm:hidden text-center">
                              Sale
                              <br />
                              Price
                            </span>
                          </span>
                          <span className="text-3xl text-orange-500 flex items-start">
                            <span className="text-2xl">$</span>2,499
                          </span>
                        </div>
                        <div className="flex flex-col items-center priceContainer">
                          <span className="text-xl uppercase leading-tight sm:leading-normal line-normal">
                            <span className="inline sm:hidden">
                              Reg
                              <br />
                              Price
                            </span>
                          </span>
                          <span className="text-3xl text-orange-500 flex items-start discount">
                            <span className="text-2xl">$</span>2,999
                          </span>
                        </div>
                        <div className="flex flex-col items-center priceContainer">
                          <span className="text-xl uppercase leading-tight sm:leading-normal line-normal">
                            <span className="inline sm:hidden">
                              You
                              <br />
                              Save
                            </span>
                          </span>
                          <span className="text-3xl text-orange-500 flex items-start">
                            <span className="text-2xl">$</span>500
                          </span>
                        </div>
                      </div>
                      <div className="flex mt-2 getButton large-btn-orange mb-10">
                        <a href="tel:2075952960">Call Today</a>
                      </div>

                      <ProductSection
                        title="SPECIFICATIONS"
                        content={
                          <div className="grid gap-2 sm:grid-cols-2 mt-4">
                            <div>
                              <div className="mb-4">
                                <h3 className="text-xl sm:text-2xl font-thin mb-2">
                                  Frame System
                                </h3>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  4" x 4” Frame Dimensions: 123" Wide by 102"
                                  High x 42“ Deep
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Item Weight: 65-75 Lbs.
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Warranty: 5-Year Limited
                                </div>
                              </div>
                              <div className="mb-4">
                                <h3 className="text-xl sm:text-2xl font-thin mb-2">
                                  Cinema Screen
                                </h3>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Cinematic Screen Dimensions: 111” Wide by 70”
                                  High
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Item Weight: 1.2 Lbs.
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Warranty: 1-Year Limited from Manufacturer
                                </div>
                              </div>
                              <div className="mb-4">
                                <h3 className="text-xl sm:text-2xl font-thin mb-2">
                                  1080p LED Projector
                                </h3>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Bluetooth Capable: No
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Native Resolution: 800 x 480
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Supported Resolutions: 480P, 720P & 1080P
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Contrast Ratio: 2,000:1
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Display Technology: LCD
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Light Source: LED
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Image Brightness/Lumens: 3600
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Ports: USB, Micro SD Card, AV, HDMI, VGA
                                  Input, Audio IN/OUT
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Built-in Speaker: 2 watt / 8 ohm
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Lamp Life: 40,000 hours
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Screen Size Range: 4.9’ feet to 16’ feet away
                                  from the projector
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Projector Dimensions: 7.9” Wide x 5.9” Deep x
                                  3.10” High
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Item Weight: 2.1 Lbs.
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Warranty: 2-Year Limited from Manufacturer
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="mb-4">
                                <h3 className="text-xl sm:text-2xl font-thin mb-2">
                                  Battery Station
                                </h3>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Cell Chemistry: Li-ion NMC
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Lifecycles: ≥500 cycles to 80%
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Management System: BMS, Over Voltage & Short
                                  Circuit Protection
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Charge Methods: AC Wall Outlet, 12V Car
                                  adaptor
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Full Recharge Time: 5 (HOURS) AC
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Shelf-life: Charge every 3-6 Months
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Operating Usage Temperature: 32-104F
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Certification: FCC, ROHS, UN38.3
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Battery Dimensions: 7.4" Width x 6.7" Height x
                                  4.5" Depth
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Weight: 3.84 Lbs.
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Warranty: 2-Year Limited from Manufacturer
                                </div>
                              </div>
                              <div className="mb-4">
                                <h3 className="text-xl sm:text-2xl font-thin mb-2">
                                  Soundbar Speaker
                                </h3>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Wireless Operation Range: 30’ Feet
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Speaker Dimensions: 0.8" Width x 2.4" Height x
                                  2" Depth
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Speaker Weight: 1.6 Lbs.
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Warranty: 1-Year Limited from Manufacturer
                                </div>
                              </div>
                              <div className="mb-4">
                                <h3 className="text-xl sm:text-2xl font-thin mb-2">
                                  Projector Stand
                                </h3>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Projector Stand: Cedar
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Stand Dimensions: 16“ Width x 24” High x 12”
                                  Depth
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Item Weight: 20 Lbs.
                                </div>
                                <div className="mb-2 flex items-start">
                                  <img
                                    src="/checkmark.png"
                                    className="mr-3 h-6"
                                  />
                                  Warranty: 2-Year Limited
                                </div>
                              </div>
                            </div>
                          </div>
                        }
                      />
                    </div>

                    <div className="flex-1 mt-6 md:mt-0 rightContainer md:pl-12">
                      <Gallery
                        picturesArray={includedPicturesArray}
                        color="#FF6600"
                      />
                    </div>
                  </div>
                }
              />
            </div>

            <div className="mb-8">
              <ProductSection
                title="USING THE GAMING CINEMA"
                content={
                  <>
                    <div className="mt-12 flex flex-col-reverse md:flex-row">
                      <div className="flex-1 mt-6 md:mt-0 pr-0 md:pr-12">
                        <h3 className="text-lg mb-4 product-title attaching-gaming">
                          Attaching the gaming screen
                        </h3>
                        <p className="mb-4">
                          After your outdoor gaming cinema has been
                          professionally installed on your property, it is
                          almost as easy to use as playing video games in the
                          comfort of your own home. The cinema frame can be left
                          up all year and never needs to be dismantled; simply
                          attach the grommet hole cinematic gaming screen to the
                          inside edge of the frame. The cinema wooden frame has
                          eye hooks that make attaching the grommet hole
                          cinematic screen simple.
                        </p>
                        <p className="mb-4">
                          Start by attaching the cinematic screen to one of the
                          wooden frame's top corners using a secured lightweight
                          folding step ladder and work your way across. After
                          you've connected the top of the cinematic screen to
                          the horizontal post, you can move on to the bottom and
                          sides. Attaching the cinematic screen to the frame
                          takes less than 2 minutes.
                        </p>
                        <p>
                          When you're done playing your video games at the end
                          of the evening or early hours in the morning, simply
                          remove the cinematic screen from the frame and store
                          it in the convenient carrying bag that comes with it.
                          It's so easy even a Bobcat could do it.
                        </p>
                      </div>
                      <div className="flex-1 pl-0 md:pl-12 text-center md:text-left rightContainer">
                        <img src={screenSetup} />
                      </div>
                    </div>
                    <div className="mt-12 flex flex-col-reverse md:flex-row">
                      <div className="flex-1 mt-6 md:mt-0 pr-0 md:pr-12">
                        <h3 className="text-lg mb-4 font-bold product-title attaching-gaming">
                          Using the cinema components
                        </h3>
                        <p className="mb-4">
                          After your outdoor gaming cinema is professionally
                          installed, all electronic equipment is kept organized
                          on the custom (patent pending) cedar projector stand,
                          which never needs to be broken down. The bottom shelf
                          to the cedar projector stand allows you to place your
                          gaming console on it. The electronics are always kept
                          on your projector stand, similar to a home
                          entertainment system. However, because the cinema
                          equipment is not waterproof, you should bring it
                          inside once you've finished gaming at the end of the
                          night.
                        </p>
                        <p className="mb-4">
                          When you want to go outside to start gaming, take the
                          lightweight cedar projector stand with all of the
                          equipment on it and plug it into the included
                          extension cord and waterproof power strip. The
                          projector stand is usually placed 10-12' away from the
                          screen for the best viewing experience. Next, plug the
                          speaker wires into the Digital FM Transmitter,
                          fine-tune the projector's focus for sharpness, and
                          you're ready to game away.
                        </p>
                        <p className="mb-6">
                          This system setup is too powerful for a wireless
                          experience due to the large power consumption the
                          video console puts on a off-grid battery station.
                        </p>
                      </div>
                      <div className="flex-1 pl-0 md:pl-12 text-center md:text-left rightContainer">
                        <img src={projectorStand} />
                      </div>
                    </div>
                  </>
                }
              />
            </div>

            <div className="connect-dvd additional-dropdown">
              <ProductSection
                title="VARIOUS CONNECTIONS"
                content={
                  <div>
                    <h3 className="text-lg mb-4 font-bold mt-4 product-title additional-uses">
                      Additional uses for the outdoor gaming projector
                    </h3>
                    <div className="mt-4 various-connections">
                      <div className="mb-6 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        <span>
                          Connect your DVD player, laptop, tablet, TV,
                          smartphone, video recorder, Xbox®, Playstation®, Wii®,
                          digital FM transmitter, digital tuner, speakers, and
                          other devices to the projector's multiple backports.
                        </span>
                      </div>
                      <div className="mb-6 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        <span>
                          The 1080p HD Projector has 1 AV Port, 1 VGA Port, 1
                          USB Port, 1 ATV Port, 1 Audio Out Port, 1 HDMI Port,
                          and 1 Memory Card Slot.
                        </span>
                      </div>
                      <div className="watch-netflix flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        <span>
                          You can watch Netflix, Hulu, Disney+, HBO Max, Amazon
                          Prime Video, Youtube, ESPN, MLB, NFL, NBA, and many
                          other channels with the included Roku Player.
                          Furthermore, the 1080p HD Projector is compatible with
                          the Amazon Firestick®, Google Chromecast®, and Apple
                          TV Box®.
                        </span>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default JediBobcat
