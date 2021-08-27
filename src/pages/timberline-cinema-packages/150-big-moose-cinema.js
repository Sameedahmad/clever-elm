import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProductSection from "../../components/ProductSection"
import Gallery from "../../components/Gallery"
import ProductDivider from "../../components/ProductDivider"

import moosedesktop from "../../images/moosedesktop.png"
import lionKing from "../../images/lionKing.png"
import godzillaScreen from "../../images/godzillaScreen.png"
import roadHouse from "../../images/roadHouse.png"
import holloween from "../../images/holloween.png"
import winter from "../../images/winter.png"

import screenAndFrame from "../../images/screenAndFrame.png"
import lgBattery from "../../images/lg_battery.png"
import lgProjector from "../../images/lg_projector.png"
import lgSpeaker from "../../images/lg_speaker.png"
import roku from "../../images/roku.png"
import projectorStand from "../../images/projectStand.png"

import wiredMain from "../../images/wiredMain.png"
import digitalTransmitter from "../../images/digitalTransmitter.png"
import rockvilleSpeakers from "../../images/rockvilleSpeakers.png"

import screenSetup from "../../images/screenSetup.png"

import "../../css/120-bella-bear-cinema.css"

function BigMoose() {
  const picturesArray = [
    {
      src: moosedesktop,
      alt: "big moose",
    },
    {
      src: lionKing,
      alt: "lion king",
    },
    {
      src: godzillaScreen,
      alt: "godzilla screen",
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
      src: winter,
      alt: "winter",
    },
  ]

  const includedPicturesArray = [
    {
      src: screenAndFrame,
      alt: "screen and frame",
    },
    {
      src: lgProjector,
      alt: "projector,",
    },
    {
      src: lgSpeaker,
      alt: "speaker",
    },
    {
      src: lgBattery,
      alt: "battery",
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

  const wiredPicturesArray = [
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

  return (
    <Layout>
      <SEO
        title={`150" Big Moose`}
        description={
          "Perfect for venues with outdoor seating like restaurants and bars, summer camps, campgrounds, hotels, resorts, and more. Attract more customers and have them keep coming back more."
        }
      />
      <div className="wrapper desktop">
        <div className="container mx-auto">
          <div className="py-6">
            <div className="flex flex-wrap items-center text-sm">
              <Link
                to="/"
                className="text-blue-600 sm:text-black cursor-pointer"
              >
                Home
              </Link>
              <span className="mx-2">&gt;</span>
              <span to="#">Timberline Cinema Packages</span>
              <span className="mx-2">&gt;</span>
              <span>150" Big Moose</span>
            </div>
            <div className="mt-12 flex flex-col-reverse md:flex-row">
              <div className="flex-1 mt-6 md:mt-0 pr-0 md:pr-12">
                <h1 className="text-orange-500 text-3xl sm:text-5xl leading-none font-bold uppercase relative">
                  150” BIG MOOSE
                </h1>
                <h1 className="text-black text-3xl sm:text-5xl leading-none font-bold uppercase relative">
                  OUTDOOR CINEMA
                </h1>
                <h2 className="text-2xl sm:text-3xl mt-3 font-thin leading-tight medium-text mb-8">
                  Standing at 12’ ft. wide and 10’ ft. high, this massive
                  viewing screen is for the homeowner who wants the biggest and
                  best. And perfect for business owners who want to attract more
                  customers to their place of business with outdoor seating.
                </h2>
                <h2 className="text-2xl sm:text-3xl mt-3 font-thin leading-tight medium-text">
                  The Big Moose outdoor cinema is the elite of all available
                  packages with a giant screen and an easy setup that allows you
                  to begin watching in less than 5 minutes. Now, that's
                  lightning-fast compared to the competition.
                </h2>
              </div>
              <div className="flex-1 pl-0 md:pl-12 text-center md:text-left rightContainer">
                <Gallery picturesArray={picturesArray} color="#FF6600" />
              </div>
            </div>

            <ProductDivider
              coloredText="option 1: "
              text="go wireless"
              color="#FF6600"
            />
            <div className="flex flex-col-reverse md:flex-row secondContainer ">
              <div className="flex-1 pl-0 md:pl-12 text-center md:text-left firstWrap leftContainer ">
                <Gallery
                  picturesArray={includedPicturesArray}
                  color="#FF6600"
                />
              </div>
              <div className="flex-1 mt-6 md:mt-0 rightContainer md:pl-12 description-container">
                <h2 className="text-md sm:text-xl uppercase product-title mb-2">
                  GET THE ONLY WIRELESS OUTDOOR CINEMA
                </h2>
                <p className="mb-2 text-md">
                  Get this ground-breaking wireless outdoor movie theater and
                  avoid the hassle of running extension cords from your home to
                  the cinema equipment. The included off-grid battery station
                  powers your cinema equipment, allowing you to watch two films
                  before needing to be recharged. Unfortunately, due to the
                  extra power consumption, the wireless feature does not allow
                  you to connect the speakers with stands or the Digital FM
                  Transmitter, as shown below.
                </p>
                <h3 className="text-md sm:text-xl uppercase">
                  WIRELESS CINEMA PACKAGE INCLUDES
                </h3>
                <ul className="list">
                  <li>Pressure-treated wooden movie frame</li>
                  <li>Wrinkle-free Cinematic Screen with black backing</li>
                  <li>1080p HD Projector with 4,000 Lumens</li>
                  <li>Bluetooth Sound bar Speaker</li>
                  <li>Chargeable Off-Grid Battery Station</li>
                  <li>Roku Express 4k Player with voice control</li>
                  <li>Custom Cedar Equipment Stand</li>
                  <li>Friendly and Professional Installation</li>
                </ul>
                <div className="mt-4 flex justify-between prices">
                  <div className="flex mt-2 getButton btn-orange">
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
                      <span className="text-2xl">$</span>2,899
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
                      <span className="text-2xl">$</span>3,499
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
                      <span className="text-2xl">$</span>600
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <ProductSection
              title="WIRELESS CINEMA SPECIFICATIONS"
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
              coloredText="option 2: "
              text="go wired"
              color="#FF6600"
            />
            <div className="mt-12 flex flex-col-reverse md:flex-row secondContainer">
              <div className="flex-1 mt-6 md:mt-0 pr-0 md:pr-12 description-container">
                <h2 className="text-md sm:text-xl uppercase product-title mb-2">
                  GET A YEAR-ROUND BACKYARD OUTDOOR CINEMA
                </h2>
                <p className="mb-2 text-md">
                  Get this fantastic backyard outdoor cinema setup and use it in
                  any season Mother Nature has in store for you. The solid
                  pressure-treated frame with weather-resistant hardware was
                  built to stay up all year, making the entire cinema setup
                  simple to attach to the cinematic screen and begin watching
                  your favorite entertainment outside. This package differs from
                  the wireless version in that it includes two powerful 8"
                  outdoor speakers with tripod stands and a Digital FM
                  Transmitter.
                </p>
                <h3 className="text-md sm:text-xl uppercase">
                  WIRED CINEMA PACKAGE INCLUDES
                </h3>
                <ul className="list">
                  <li>Pressure-treated wooden movie frame</li>
                  <li>Wrinkle-free Cinematic Screen with black backing</li>
                  <li>1080p HD Projector with 4,000 Lumens</li>
                  <li>Rockville 8“ Dual Speakers with Tripod Stands</li>
                  <li>
                    Rolls Digital FM Transmitter connects your speakers to the
                    projector
                  </li>
                  <li>Roku Express 4k with voice control</li>
                  <li>25'ft. Extension Cord and Waterproof Surge Strip</li>
                  <li>
                    Custom Cedar Equipment Stand with pivoting shelf for
                    projector
                  </li>
                  <li>Friendly and Professional Installation</li>
                </ul>
                <div className="mt-4 flex justify-between prices">
                  <div className="flex mt-2 getButton btn-orange">
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
                      <span className="text-2xl">$</span>2,999
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
                      <span className="text-2xl">$</span>3,599
                    </span>
                  </div>
                  <div className="flex flex-col items-center priceContainer">
                    <span className="text-xl uppercase leading-tight sm:leading-normal line-normal">
                      <span className="hidden sm:inline">Save</span>
                      <span className="inline sm:hidden">
                        <br />
                        Save
                      </span>
                    </span>
                    <span className="text-3xl text-orange-500 flex items-start mt-2">
                      <span className="text-2xl">$</span>600
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1 pl-0 md:pl-12 text-center md:text-left rightContainer">
                <Gallery picturesArray={wiredPicturesArray} color="#FF6600" />
              </div>
            </div>
            <ProductSection
              title="WIRED CINEMA SPECIFICATIONS"
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
              coloredText="HOW TO OPERATE YOUR "
              text="OUTDOOR CINEMA"
              color="#FF6600"
            />
            <div className="mt-12 flex flex-col-reverse md:flex-row mb-16">
              <div className="flex-1 mt-6 md:mt-0 pr-0 md:pr-12">
                <img src={screenSetup} />
              </div>
              <div className="flex-1 pl-0 md:pl-12 text-center md:text-left rightContainer">
                <h3 className="text-xl mb-2">ATTACHING THE CINEMATIC SCREEN</h3>
                <p className="mb-4">
                  After your outdoor cinema has been professionally installed in
                  your backyard, using it is almost as easy as watching
                  entertainment on your TV in the comfort of your own home. The
                  cinema frame can be left up all year and never needs to be
                  broken down; all you have to do is attach the grommet hole
                  cinematic screen to the inside edge of the frame. The cinema
                  wooden frame has eye hooks that make it simple to attach the
                  grommet hole cinematic screen.
                </p>
                <p className="mb-4">
                  Begin attaching the cinematic screen to one of the top corners
                  of the wooden frame by using a lightweight folding step ladder
                  and work your way across. After attaching the top of the
                  cinematic screen to the horizontal post, secure the bottom of
                  the screen and then attach the sides. It takes less than 3
                  minutes to connect the cinematic screen to the frame.
                </p>
                <p>
                  When you are finished watching your movies outside for the
                  evening, remove the cinematic screen from the frame and store
                  it in the included convenient carrying bag. It's so easy that
                  even a moose could do it.
                </p>
              </div>
            </div>
            <div className="mt-12 flex flex-col-reverse md:flex-row">
              <div className="flex-1 mt-6 md:mt-0 pr-0 md:pr-12">
                <h3 className="text-xl mb-2">USING THE CINEMA COMPONENTS</h3>
                <p className="mb-4">
                  After your cinema package has been professionally installed,
                  all electronic equipment is kept organized on the custom
                  (patent pending) cedar projector stand, which never needs to
                  be disassembled. The electronics are always kept on your
                  projector stand, much like an entertainment system in your
                  home. The cinema equipment is not waterproof and should be
                  brought inside your home once you have finished watching at
                  the end of the night.
                </p>
                <p className="mb-4">
                  When you're ready to watch your favorite entertainment
                  outside, take the lightweight cedar projector stand and all of
                  the equipment out with you. The projector stand is typically
                  set up 12'-15' feet away from the screen. After aligning the
                  projector stand with the screen, turn on the power to the
                  battery station and projector, fine-tune the projector's focus
                  for sharpness, and you're ready to watch.
                </p>
                <p className="mb-4">
                  With the 'wired' outdoor cinema, all you have to do is place
                  your speakers and stands where you want them and plug the
                  speaker wires into the Digital FM Transmitter console located
                  on your projector stand.
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
                WHAT YOU CAN PLUG INTO THE PROJECTOR
              </h3>
              <div className="mt-4 various-connections">
                <div className="mb-6 flex items-start">
                  <img src="/checkmark.png" className="mr-3 h-6" />
                  <span>
                    You can connect your DVD Player, Laptop, Tablet, TV,
                    Smartphone, Video Recorder, Xbox®, Playstation®, Wii®,
                    Digital FM Transmitter, Digital Tuner, Speakers, and other
                    devices to the projector's multiple ports on the back.
                  </span>
                </div>
                <div className="mb-6 flex items-center">
                  <img src="/checkmark.png" className="mr-3 h-6" />
                  <span>
                    There is 1 AV Port, 1 VGA Port, 1 USB Port, 1 ATV Port, 1
                    Audio Out Port, 1 HDMI Port, and 1 Memory Card Slot on the
                    1080p HD Projector.
                  </span>
                </div>
                <div className="mb-6 flex items-start">
                  <img src="/checkmark.png" className="mr-3 h-6" />
                  <span>
                    Using the included Roku Player, you can watch Netflix, Hulu,
                    Disney+, HBO Max, Amazon Prime Video, Youtube, ESPN, MLB,
                    NFL, NBA, and much more. In addition, the Amazon Firestick®,
                    Google Chromecast®, and Apple TV Box® are all compatible
                    with the 1080p HD Projector.
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
            <div className="flex flex-wrap items-center text-sm">
              <Link
                to="/"
                className="text-blue-600 sm:text-black cursor-pointer"
              >
                Home
              </Link>
              <span className="mx-2">&gt;</span>
              <span to="#">Timberline Cinema Packages</span>
              <span className="mx-2">&gt;</span>
              <span>150" Big Moose</span>
            </div>
            <div className="mt-12 flex flex-col-reverse md:flex-row mb-8">
              <div className="flex-1 mt-6 md:mt-0 pr-0 md:pr-12">
                <h1 className="text-orange-500 text-3xl sm:text-5xl leading-none font-bold relative heading">
                  150” Big Moose
                </h1>
                <h1 className="text-black text-3xl sm:text-5xl leading-none font-bold relative heading">
                  Outdoor Cinema
                </h1>
                <h2 className="text-2xl sm:text-3xl mt-3 font-thin leading-tight">
                  Standing at 12’ ft. wide and 10’ ft. high, this massive
                  viewing screen is for the homeowner who wants the biggest and
                  best. And perfect for business owners who want to attract more
                  customers to their place of business with outdoor seating.
                </h2>
                <h2 className="text-2xl sm:text-3xl mt-3 font-thin leading-tight">
                  The Big Moose outdoor cinema is the elite of all available
                  packages with a giant screen and an easy setup that allows you
                  to begin watching in less than 5 minutes. Now, that's
                  lightning-fast compared to the competition.
                </h2>
                <h2 className="text-2xl sm:text-3xl mt-3 font-thin leading-tight">
                  Continue learning more about the 150” Big Moose Outdoor Cinema
                  by clicking on the buttons below with expandable content that
                  will give you more information on the cinema package,
                  specifications, and pricing details.
                </h2>
              </div>
              <div className="flex-1 pl-0 md:pl-12 text-center md:text-left rightContainer">
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
                title="OPTION 1: GO WIRELESS"
                content={
                  <div className="flex flex-col-reverse md:flex-row secondContainer">
                    <div className="flex-1 pl-0 md:pl-12 text-center md:text-left firstWrap leftContainer">
                      <h2 className="text-xl sm:text-3xl font-bold product-title mb-4">
                        Get the only wireless outdoor cinema on the market today
                      </h2>
                      <p className="mb-4 text-left">
                        Get this ground-breaking wireless outdoor movie theater
                        and avoid the hassle of running extension cords from
                        your home to the cinema equipment. The included off-grid
                        battery station powers your cinema equipment, allowing
                        you to watch two films before needing to be recharged.
                        Unfortunately, due to the extra power consumption, the
                        wireless feature does not allow you to connect the
                        speakers with stands or the Digital FM Transmitter, as
                        shown below.
                      </p>
                      <h3 className="text-lg sm:text-xl font-bold text-left mb-4 product-title">
                        Wireless cinema package includes
                      </h3>
                      <ul className="list mb-8 text-left various-connections">
                        <div className="mb-6 flex items-start">
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
                          <span>Bluetooth Sound bar Speaker</span>
                        </div>
                        <div className="mb-6 flex items-start">
                          <img src="/checkmark.png" className="mr-3 h-6" />
                          <span>Chargeable Off-Grid Battery Station</span>
                        </div>
                        <div className="mb-6 flex items-start">
                          <img src="/checkmark.png" className="mr-3 h-6" />
                          <span>Roku Express 4k Player with voice control</span>
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
                            <span className="text-2xl">$</span>2,899
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
                            <span className="text-2xl">$</span>3,499
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
                            <span className="text-2xl">$</span>600
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
                title="OPTION 2: GO WIRED"
                content={
                  <div className="mt-12 flex flex-col-reverse md:flex-row secondContainer">
                    <div className="flex-1 mt-6 md:mt-0 pr-0 md:pr-12 mb-6">
                      <h2 className="text-xl sm:text-3xl font-bold product-title mb-4">
                        Get a backyard outdoor cinema that you can use all year
                        long
                      </h2>
                      <p className="mb-4">
                        Get this fantastic backyard outdoor cinema setup and use
                        it in any season Mother Nature has in store for you. The
                        solid pressure-treated frame with weather-resistant
                        hardware was built to stay up all year, making the
                        entire cinema setup simple to attach to the cinematic
                        screen and begin watching your favorite entertainment
                        outside. This package differs from the wireless version
                        in that it includes two powerful 8" outdoor speakers
                        with tripod stands and a Digital FM Transmitter.
                      </p>
                      <h3 className="text-lg sm:text-xl font-bold mb-4 product-title">
                        Wired cinema package includes
                      </h3>
                      <div className="list mb-8 various-connections">
                        <div className="mb-6 flex items-start">
                          <img src="/checkmark.png" className="mr-3 h-6" />
                          <span>
                            Pressure-treated woode movie frame, which stays up
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
                            Roku Express 4k with voice control to access
                            Netflix, Hulu, Disney and more
                          </span>
                        </div>
                        <div className="mb-6 flex items-start">
                          <img src="/checkmark.png" className="mr-3 h-6" />
                          <span>
                            25'ft. Med-duty Extension Cord and Waterproof Surge
                            Protector Power Strip
                          </span>
                        </div>
                        <div className="mb-6 flex items-start">
                          <img src="/checkmark.png" className="mr-3 h-6" />
                          <span>
                            Custom Cedar Equipment Stand with pivoting shelf for
                            projector
                          </span>
                        </div>
                        <div className="mb-6 flex items-start">
                          <img src="/checkmark.png" className="mr-3 h-6" />
                          <span>Friendly and Professional Installation</span>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between prices mb-8">
                        <div className="flex flex-col items-center priceContainer">
                          <span className="text-xl uppercase leading-tight sm:leading-normal line-normal">
                            <span className="inline sm:hidden">
                              Sale
                              <br />
                              Price
                            </span>
                          </span>
                          <span className="text-3xl text-orange-500 flex items-start">
                            <span className="text-2xl">$</span>2,999
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
                            <span className="text-2xl">$</span>3,599
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
                            <span className="text-2xl">$</span>600
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
                    <div className="flex-1 pl-0 md:pl-12 text-center md:text-left rightContainer">
                      <Gallery
                        picturesArray={wiredPicturesArray}
                        color="#FF6600"
                      />
                    </div>
                  </div>
                }
              />
            </div>
            <div className="mb-8">
              <ProductSection
                title="USING THE CINEMA"
                content={
                  <>
                    <div className="mt-12 flex flex-col-reverse md:flex-row">
                      <div className="flex-1 mt-6 md:mt-0 pr-0 md:pr-12">
                        <h3 className="text-xl mb-4 font-bold product-title">
                          Attaching the cinematic screen
                        </h3>
                        <p className="mb-4">
                          After your outdoor cinema has been professionally
                          installed in your backyard, using it is almost as easy
                          as watching entertainment on your TV in the comfort of
                          your own home. The cinema frame can be left up all
                          year and never needs to be broken down; all you have
                          to do is attach the grommet hole cinematic screen to
                          the inside edge of the frame. The cinema wooden frame
                          has eye hooks that make it simple to attach the
                          grommet hole cinematic screen.
                        </p>
                        <p className="mb-4">
                          Begin attaching the cinematic screen to one of the top
                          corners of the wooden frame by using a lightweight
                          folding step ladder and work your way across. After
                          attaching the top of the cinematic screen to the
                          horizontal post, secure the bottom of the screen and
                          then attach the sides. It takes less than 3 minutes to
                          connect the cinematic screen to the frame.
                        </p>
                        <p>
                          When you are finished watching your movies outside for
                          the evening, remove the cinematic screen from the
                          frame and store it in the included convenient carrying
                          bag. It's so easy that even a moose could do it.
                        </p>
                      </div>
                      <div className="flex-1 pl-0 md:pl-12 text-center md:text-left rightContainer">
                        <img src={screenSetup} />
                      </div>
                    </div>
                    <div className="mt-12 flex flex-col-reverse md:flex-row">
                      <div className="flex-1 mt-6 md:mt-0 pr-0 md:pr-12">
                        <h3 className="text-xl mb-4 font-bold product-title">
                          Using the cinema components
                        </h3>
                        <p className="mb-4">
                          After your cinema package has been professionally
                          installed, all electronic equipment is kept organized
                          on the custom (patent pending) cedar projector stand,
                          which never needs to be disassembled. The electronics
                          are always kept on your projector stand, much like an
                          entertainment system in your home. The cinema
                          equipment is not waterproof and should be brought
                          inside your home once you have finished watching at
                          the end of the night.
                        </p>
                        <p className="mb-4">
                          When you're ready to watch your favorite entertainment
                          outside, take the lightweight cedar projector stand
                          and all of the equipment out with you. The projector
                          stand is typically set up 12'-15' feet away from the
                          screen. After aligning the projector stand with the
                          screen, turn on the power to the battery station and
                          projector, fine-tune the projector's focus for
                          sharpness, and you're ready to watch
                        </p>
                        <p className="mb-6">
                          With the 'wired' outdoor cinema, all you have to do is
                          place your speakers and stands where you want them and
                          plug the speaker wires into the Digital FM Transmitter
                          console located on your projector stand.
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

            <div className="mb-8">
              <ProductSection
                title="VARIOUS CONNECTIONS"
                content={
                  <div>
                    <h3 className="text-lg mb-4 font-bold mt-4 product-title">
                      What you can plug into the projector
                    </h3>
                    <div className="mt-4 various-connections">
                      <div className="mb-6 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        <span>
                          You can connect your DVD Player, Laptop, Tablet, TV,
                          Smartphone, Video Recorder, Xbox®, Playstation®, Wii®,
                          Digital FM Transmitter, Digital Tuner, Speakers, and
                          other devices to the projector's multiple ports on the
                          back.
                        </span>
                      </div>
                      <div className="mb-6 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        <span>
                          There is 1 AV Port, 1 VGA Port, 1 USB Port, 1 ATV
                          Port, 1 Audio Out Port, 1 HDMI Port, and 1 Memory Card
                          Slot on the 1080p HD Projector.
                        </span>
                      </div>
                      <div className="mb-6 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        <span>
                          Using the included Roku Player, you can watch Netflix,
                          Hulu, Disney+, HBO Max, Amazon Prime Video, Youtube,
                          ESPN, MLB, NFL, NBA, and much more. In addition, the
                          Amazon Firestick®, Google Chromecast®, and Apple TV
                          Box® are all compatible with the 1080p HD Projector.
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

export default BigMoose
