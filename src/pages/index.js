import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { get } from "lodash"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Checkmark from "../images/checkmark-icon.png"
import Banner from "../images/mobile-home-page-image-cropped.png"
import Timberline from "../images/timberline-outdoor-cinema-frame-mobile.png"
import Projector from "../images/outdoor-cinema-projector-stand-mobile.png"
import Gallery1 from "../images/sm-outdoor-cinema-setup.png"
import Gallery2 from "../images/sm-outdoor-projector.png"
import Gallery3 from "../images/sm-outdoor-cinema-frame.png"
import Gallery4 from "../images/sm-outdoor-cinema-winter.png"

import Bobcat from "../images/mobile-jedi-bobcat-home.png"
import Bear from "../images/mobile-bella-bear-home.png"
import Moose from "../images/mobile-big-moose-home.png"

import GalleryDesktop1 from "../images/GalleryDesktop1.png"
import GalleryDesktop2 from "../images/GalleryDesktop2.png"
import GalleryDesktop3 from "../images/GalleryDesktop3.png"
import GalleryDesktop4 from "../images/GalleryDesktop4.png"
import GalleryDesktop5 from "../images/GalleryDesktop5.png"
import GalleryDesktop6 from "../images/GalleryDesktop6.png"

import jediDesktop from "../images/jedidesktop.png"
import bearDesktop from "../images/beardesktop.png"
import mooseDesktop from "../images/moosedesktop.png"
import newBanner from "../images/new-banner-desktop.png"
import originalStamp from "../images/Original-Stamp.png"
import Feature1 from "../images/Feature 1.png"
import Feature2 from "../images/Feature 2.png"
import Feature3 from "../images/Feature 3.png"
import Feature4 from "../images/Feature 4.png"
import signature from "../images/Signature.png"
import CinemaFrame from "../images/Cinema Frame.png"
import ProjectorStand from "../images/Projector Stand.png"
import newBobcat from "../images/Bobcat.png"
import BearBanner from "../images/BearBanner.png"
import MooseBanner from "../images/MooseBanner.png"
import Battery from "../images/completefeatures/Battery.png"
import DigitalTransmitter from "../images/completefeatures/Digital Transmitter.png"
import DigitalTuner from "../images/completefeatures/Digital Tuner.png"
import Frame from "../images/completefeatures/Frame.png"
import Projectornew from "../images/completefeatures/Projector.png"
import ProjectorStandnew from "../images/completefeatures/Projector Stand.png"
import Roku2 from "../images/completefeatures/Roku2.png"
import ScreenandFrame from "../images/completefeatures/Screen and Frame.png"
import SoundbarSpeakers from "../images/completefeatures/Soundbar Speaker.png"
import WiredSpeakers from "../images/completefeatures/Wired Speakers.png"
import Signaturenew from "../images/signaturenew.png"
import "../css/index.css"
import { AiOutlineLeft, AiOutlineRight, AiFillPlayCircle } from "react-icons/ai"

import {
  DesktopContainer,
  Gray,
  White,
  Orange,
  Introduction,
  JediContainer,
  BearContainer,
  MooseContainer,
  IncludeContainer,
  QuoteContainer,
  QuoteMobile,
} from "../css/homepage"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const IndexPage = ({ location }) => {
  const [showVid, setShowVid] = useState(
    get(location, "state.referrer") === null
  )
  const [desktopvideoEnd, setDesktopvideoEnd] = useState(false)
  const [mobilevideoEnd, setMobilevideoEnd] = useState(false)
  const [playFlag, setPlayFlag] = useState(true)
  const [playFlag2, setPlayFlag2] = useState(true)
  const videoRef = useRef(null)
  const videoRef2 = useRef(null)

  useEffect(() => {
    setShowVid(get(location, "state.referrer") === null)
  }, [location])

  const ICON_SIZE = 100
  const MOBILE_ICON_SIZE = 65

  const arrowStyles = {
    position: "absolute",
    zIndex: 1,
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
  }

  const startBtn = {
    position: "absolute",
    zIndex: 1,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    cursor: "pointer",
  }

  const arrowButtonSyle = {
    position: "absolute",
    zIndex: 1,
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
  }

  const startBtnMobile = {
    position: "absolute",
    zIndex: 1,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    cursor: "pointer",
  }

  const staticArrowStyle = {
    position: "fixed",
    top: "283px",
  }

  const staticArrowStyletwo = {
    position: "fixed",
    top: "283px",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  }

  const staticMobileArrowStyle = {
    position: "fixed",
    top: "85px",
  }

  const checkmarkDivStyle = {
    minWidth: "34px",
  }

  const checkmarkStyle = {
    width: "100%",
  }

  //video play/pause functions for desktop-devices.

  const videoAct = () => {
    let videoElement = videoRef.current
    videoElement.play()
    setPlayFlag(false)
  }

  const handleVideoClick = e => {
    e.target.pause()
    setPlayFlag(true)
  }

  const onDesktopVideoEnded = () => {
    setDesktopvideoEnd(true)
    setPlayFlag(true)
    videoRef.current.currentTime = 0
  }

  const onDesktopVideoPlay = () => {
    setDesktopvideoEnd(false)
  }

  // Video play/pause functions for mobile devices.

  const videoActMobile = () => {
    let videoElement2 = videoRef2.current
    videoElement2.play()
    setPlayFlag2(false)
  }

  const handleMobileVideoClick = e => {
    e.target.pause()
    setPlayFlag2(true)
  }

  const onMobileVideoEnded = () => {
    setMobilevideoEnd(true)
    setPlayFlag2(true)
    videoRef2.current.currentTime = 0
  }

  const onMobileVideoPlay = () => {
    setMobilevideoEnd(false)
  }

  return (
    <Layout>
      <SEO title="Home" />
      {showVid && (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black">
          <video
            autoPlay
            muted
            playsInline
            className="absolute top-0 left-0 w-screen h-screen z-50"
            onEnded={() => setShowVid(false)}
          >
            <source src="/countdown.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      <div className={showVid && "hidden"}>
        <div className="sm:hidden bg-black">
          <div
            className="text-center py-3 bg-cover bg-center default"
            style={{ backgroundImage: `url("/mobtrees.jpg")` }}
          >
            <div className="container mx-auto">
              <h1 className="text-2xl text-orange-500 leading-tight font-bold uppercase default">
                Get a Backyard <br />
                <span className="text-white default">
                  Drive-In Movie Theater
                </span>
              </h1>
              <h2 className="text-white text-lg mt-4 leading-tight default">
                Enjoy movies, sporting events, video games, stream your favorite
                shows and more with friends and family.
              </h2>
            </div>
          </div>
          <div className="text-center py-3 bg-cover bg-center title-container mobile">
            <Carousel
              showArrows={true}
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              interval={10000000}
              renderArrowNext={(onClickHandler, hasNext, label) =>
                playFlag2 && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowButtonSyle, right: 15 }}
                    className="focus:outline-none"
                  >
                    <AiOutlineRight color={"#ffffff"} size={MOBILE_ICON_SIZE} />
                  </button>
                )
              }
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                playFlag2 && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowButtonSyle, left: 15 }}
                    className="focus:outline-none"
                  >
                    <AiOutlineLeft color={"#ffffff"} size={MOBILE_ICON_SIZE} />
                  </button>
                )
              }
            >
              <div className="relative h-full">
                <video
                  playsInline={true}
                  id="mobile_vid"
                  ref={videoRef2}
                  onClick={handleMobileVideoClick}
                  onEnded={onMobileVideoEnded}
                  onPlay={onMobileVideoPlay}
                  className="w-full h-full"
                >
                  <source src="/homePageVideo.mp4#t=0.1" type="video/mp4" />
                </video>
                {playFlag2 && (
                  <div style={{ ...startBtnMobile }}>
                    <AiFillPlayCircle
                      size={MOBILE_ICON_SIZE}
                      color="#ffffff"
                      onClick={e => videoActMobile(e)}
                    />
                  </div>
                )}
              </div>
              <div className="banner">
                <img src={Banner} />
              </div>
            </Carousel>
          </div>

          <div className="container mx-auto pb-8">
            <h1 className="text-2xl leading-tight text-white font-500">
              Get an Outdoor <br />
              <span className=" text-orange-500">Movie Theater</span>
            </h1>
            <h2 className="text-white text-lg mt-2 leading-tight">
              Who doesn’t enjoy a great movie? This year turn your backyard into
              an exciting outdoor movie theater. Watch big-screen movies,
              sporting events, play video games, or stream your favorite shows
              with family and friends outside under the stars and moon.
            </h2>
            <h2 className="text-white text-lg mt-4 leading-tight">
              Imagine what it would feel like to sit in front of a roaring
              bonfire, cozy and warm, and watching your favorite movie outside.
              Then, you look up at the stars and start noticing all the
              different star constellations you use to see when you were a kid
              and had the time to stargaze.
            </h2>
            <h2 className="text-white text-lg mt-4 leading-tight">
              Then you feel the fresh air in your lungs and start to realize
              watching your favorite entertainment outside could be a lot more
              fun than on the couch inside. And on the{" "}
              <span className="text-blue-500">
                <a href="/accessory">Outdoor Cinema Accessory</a>
              </span>{" "}
              page, you’ll find great items to make you ultra-comfortable when
              outside at night.
            </h2>
          </div>

          <div className="container bg-white mx-auto pt-6 pb-6">
            <h1 className="text-2xl leading-tight font-500-small">
              The Outdoor Movie <br />
              <span className=" text-orange-500">Theater Solution</span>
            </h1>
            <h2 className="text-lg mt-2 leading-tight">
              The Timberline Outdoor Cinemas takes all the guesswork out of
              figuring how to set up a backyard movie theater solution
              properly—no more hanging a bedsheet on your clothesline or tacking
              it up on the side of your house or other structures.
            </h2>
            <h2 className="text-lg mt-4 leading-tight">
              The cinemas are designed to help homeowners and businesses achieve
              a fast and easy setup every time you want to go outside and enjoy
              your favorite entertainment on the big screen. Getting the best
              outdoor cinema setup in your backyard or place of business means
              you need to have it similar to your entertainment center and TV
              inside your home so it's simple to use.
            </h2>
            <h2 className="text-lg mt-4 leading-tight">
              There are two significant components to the cinemas; a stationary
              outside weather-resistant pressure-treated frame that you never
              have to set up or break down, and a custom light-weight cedar wood
              projector stand that organizes all your cinema electronic
              components on. The cinema electronics never get removed from the
              projector stand, and all you have to do is plug in, power on, and
              start watching without a lengthy and painful setup.
            </h2>
          </div>

          <div className="bg-image">
            <img src={Timberline} />
          </div>
          <div className="container bg-white mx-auto py-6">
            <h2 className="text-lg leading-tight">
              The custom, lightweight, cedar outdoor projector stand organizes
              all of your cinema equipment and never needs to be broken down,
              similar to your entertainment center inside your home.
            </h2>
            <h2 className="text-lg mt-4 leading-tight">
              No more stacking your projector, speakers, and other equipment on
              boxes, milk crates, or 5 gallon Home Depot buckets. This stand
              perfectly organizes all of the cinema components.
            </h2>
            <h2 className="text-lg mt-4 leading-tight">
              When you want to have a movie night, all you have to do is pick up
              the lightweight projector stand with everything on it, take it
              outside, position it 10’ - 12’ ft. away from the screen, and power
              on. So easy, even a moose could do it.{" "}
              <Link
                to="/timberline-cinema-packages/150-big-moose-cinema"
                className="orange-link"
              >
                Learn more about the Big Moose Timberline Outdoor Cinema.
              </Link>
            </h2>
          </div>

          <div className="bg-image">
            <img src={Projector} />
          </div>
          <div className="container bg-white mx-auto pt-6 pb-8">
            <h1 className="text-2xl leading-tight font-500-small">
              Industry-Leading <br />
              <span className=" text-orange-500">Features</span>
            </h1>
            <h2 className="text-lg mt-2 leading-tight mb-4">
              The Timberline Outdoor Cinemas has raised the bar again across the
              retail marketplace with these unbeatable time-saving and ease of
              use features.
            </h2>
            <div className="">
              <div className="overflow-auto mb-8">
                <div className="w-1/2 float-left">
                  <img src={Gallery1} />
                  <div className="text-lg leading-tight text-center mt-2 feature-text">
                    <h2 className="mt-4 mb-2 text-lg feature-home-image">
                      Strongest frame
                    </h2>

                    <div className="text-black">
                      Frame never has to be broken down, taken apart, shoved in
                      a box, or deflated. It stays outside just like your deck.
                    </div>
                  </div>
                </div>
                <div className="w-1/2 float-right">
                  <div className="overflow-auto">
                    <img src={Gallery2} className="float-right" />
                  </div>
                  <div className="text-lg leading-tight text-center mt-2 feature-text feature-right">
                    <h2 className="mt-4 mb-2 text-lg feature-home-image">
                      Projector stand
                    </h2>
                    <div className="text-black">
                      Handcrafted from cedar wood, this outdoor projector stand
                      is the only one available in the retail market.
                      Light-weight and easy to carry.
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-auto">
                <div className="w-1/2 float-left">
                  <img src={Gallery3} />
                  <div className="text-lg leading-tight text-center mt-2 feature-text">
                    <h2 className=" mt-4 mb-2 text-lg feature-home-image">
                      Fastest <br /> setup
                    </h2>
                    <div className="text-black">
                      To attach the cinematic screen to the wooden frame, place
                      the projector stand 10-12’ ft away from the screen, and
                      power on takes about 3 minutes.
                    </div>
                  </div>
                </div>
                <div className="w-1/2 float-right">
                  <div className="overflow-auto">
                    <img src={Gallery4} className="float-right" />
                  </div>
                  <div className="text-lg leading-tight text-center mt-2 feature-text feature-right">
                    <h2 className="mt-4 mb-2 text-lg feature-home-image">
                      Year-round use
                    </h2>
                    <div className="text-black">
                      Why limit yourself to watch movies only in the summer
                      months? These outdoor cinemas were designed for outdoor
                      enjoyment in every season.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space"></div>

          <div className="container bg-white mx-auto pt-6 pb-8">
            <h1 className="text-2xl leading-tight font-500-small">
              Here’s what<span className=" text-orange-500"> you get</span>
            </h1>
            <h2 className="text-lg mt-2 leading-tight">
              The Timberline Outdoor Cinema Series allows you to choose from two
              options depending on what your needs are; wireless or wired.
            </h2>
            <div className="mt-4" style={{ display: "flex" }}>
              <div style={{ ...checkmarkDivStyle }}>
                <img src={Checkmark} style={{ ...checkmarkStyle }} />
              </div>
              <div>
                <h2 className="text-lg leading-tight ml-3">
                  Pressure-treated 4”x4” wooden frame and weather-resistant
                  hardware
                </h2>
              </div>
            </div>
            <div className="mt-4" style={{ display: "flex" }}>
              <div style={{ ...checkmarkDivStyle }}>
                <img src={Checkmark} style={{ ...checkmarkStyle }} />
              </div>
              <div>
                <h2 className="text-lg leading-tight ml-3">
                  Cinematic screen with black backing to prevent light
                  transmission
                </h2>
              </div>
            </div>
            <div className="mt-4" style={{ display: "flex" }}>
              <div style={{ ...checkmarkDivStyle }}>
                <img src={Checkmark} style={{ ...checkmarkStyle }} />
              </div>
              <div>
                <h2 className="text-lg leading-tight ml-3">
                  1080p HD Projector with 4,000 Lumens
                </h2>
              </div>
            </div>
            <div className="mt-4" style={{ display: "flex" }}>
              <div style={{ ...checkmarkDivStyle }}>
                <img src={Checkmark} style={{ ...checkmarkStyle }} />
              </div>
              <div>
                <h2 className="text-lg leading-tight ml-3">
                  Wireless or wired speakers depending on your needs
                </h2>
              </div>
            </div>
            <div className="mt-4" style={{ display: "flex" }}>
              <div style={{ ...checkmarkDivStyle }}>
                <img src={Checkmark} style={{ ...checkmarkStyle }} />
              </div>
              <div>
                <h2 className="text-lg leading-tight ml-3">
                  Roku Express 4k Player with voice control to access movies and
                  shows
                </h2>
              </div>
            </div>
            <div className="mt-4" style={{ display: "flex" }}>
              <div style={{ ...checkmarkDivStyle }}>
                <img src={Checkmark} style={{ ...checkmarkStyle }} />
              </div>
              <div>
                <h2 className="text-lg leading-tight ml-3">
                  Choice of Battery Station for wireless option, or FM Tuner and
                  transmitter for a wired option
                </h2>
              </div>
            </div>
            <div className="mt-4" style={{ display: "flex" }}>
              <div style={{ ...checkmarkDivStyle }}>
                <img src={Checkmark} style={{ ...checkmarkStyle }} />
              </div>
              <div>
                <h2 className="text-lg leading-tight ml-3">
                  Custom Cedar Projector and Equipment Stand
                </h2>
              </div>
            </div>
            <div className="mt-4" style={{ display: "flex" }}>
              <div style={{ ...checkmarkDivStyle }}>
                <img src={Checkmark} style={{ ...checkmarkStyle }} />
              </div>
              <div>
                <h2 className="text-lg leading-tight ml-3">
                  Friendly and Professional setup of framing system and
                  equipment setup
                </h2>
              </div>
            </div>
          </div>

          <div className="container mx-auto pt-6 pb-8">
            <h1 className="text-2xl leading-tight text-white font-500-small">
              Which Outdoor Cinema <br />
              <span className=" text-orange-500">is best for you?</span>
            </h1>
            <h2 className="text-lg mt-2 leading-tight text-white">
              With the Timberline Outdoor Cinema Series, you have two choices;
              wireless or wired. With the wireless version, there’s no need for
              using any extensions cords and it comes with a battery power
              station and a sleek soundbar speaker.
            </h2>
            <h2 className="text-lg mt-4 leading-tight text-white">
              The wired option gives you a richer audio sound experience and
              comes with tripod speaker stands, PA speakers, Digital FM Tuner,
              Digital Transmitter, and the other cinema components mentioned
              above.
            </h2>
            <h2 className="text-lg mt-4 leading-tight text-white">
              You can also choose to have your cinema frame cemented into the
              ground, giving you a cleaner frame design, or you can go with the
              moveable framing system allowing you to place it anywhere on your
              property.
            </h2>
            <h2 className="text-lg mt-4 leading-tight text-white">
              Introducing the Timberline Outdoor Cinema lineup.
            </h2>
          </div>

          <div className="container mx-auto text-white pb-8">
            <div className="w-full border border-orange-500 mb-8">
              <div className="bg-image">
                <img src={Bobcat} />
              </div>
              <div className="px-4">
                <h1 className="text-2xl leading-tight font-500-small text-orange-500">
                  96" Jedi Bobcat
                  <br />
                  <span className="text-white">Outdoor Gaming Cinema</span>
                </h1>
                <h2 className="text-lg mt-2 leading-tight text-white">
                  Get the only outdoor gaming cinema available on the market.
                  With an 8’ ft. wide frame and cinematic gaming screen, playing
                  your favorite video games outside will make you feel as if you
                  are in real life-size action.
                </h2>
                <h2 className="text-lg mt-4 leading-tight text-white">
                  Feel the exhilaration and excitement while you game away under
                  the stars and moon. Get out of the house and experience how
                  video gaming should be.
                  <a
                    href="/timberline-cinema-packages/96-jedi-bobcat-cinema"
                    className="text-orange-500"
                  >
                    <span>
                      {" "}
                      Learn more about the 96” Jedi Bobcat Outdoor Gaming
                      Cinema.
                    </span>
                  </a>
                </h2>
                <div className="text-center my-8">
                  <Link
                    to="/timberline-cinema-packages/96-jedi-bobcat-cinema"
                    className="learn-more-mob text-lg"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full border border-purple-500 mb-8">
              <div className="bg-image">
                <img src={Bear} />
              </div>
              <div className="px-4">
                <h1 className="text-2xl leading-tight font-500-small text-purple-500">
                  120” Bella Bear
                  <br />
                  <span className="text-white">Outdoor Cinema</span>
                </h1>
                <h2 className="text-lg mt-2 leading-tight text-white">
                  Get the most popular outdoor movie cinema package. Perfect for
                  families and friends to gather around a fire, toast
                  marshmallows, enjoy smores, and watch a blockbuster hit movie
                  on this 10’ ft. wide frame and screen.
                </h2>
                <h2 className="text-lg mt-4 leading-tight text-white">
                  You will love watching your favorite entertainment on this
                  large screen, and it will make you feel like you are at the
                  drive-in movie theater while being in the comfort of your
                  backyard.
                  <a
                    href="/timberline-cinema-packages/120-bella-bear-cinema"
                    className="text-purple-500"
                  >
                    <span>
                      {" "}
                      Learn more about the 120” Bella Bear Outdoor Cinema.
                    </span>
                  </a>
                </h2>
                <div className="text-center my-8">
                  <Link
                    to="/timberline-cinema-packages/120-bella-bear-cinema"
                    className="lmm-p text-lg"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full border border-orange-500">
              <div className="bg-image">
                <img src={Moose} />
              </div>
              <div className="px-4">
                <h1 className="text-2xl leading-tight font-500-small text-orange-500">
                  150” Big Moose
                  <br />
                  <span className="text-white">Outdoor Cinema</span>
                </h1>
                <h2 className="text-lg mt-2 leading-tight text-white">
                  Get out of the way forest creatures and two-legged land
                  dwellers — the Big Moose Outdoor Cinema needs extras space
                  with its impressive 12‘ ft width and 10‘ ft height framing
                  system.
                </h2>
                <h2 className="text-lg mt-4 leading-tight text-white">
                  This cinema package is for the homeowner or business who wants
                  to do some serious entertaining outside and wants nothing but
                  the biggest and best.
                  <a
                    href="/timberline-cinema-packages/150-big-moose-cinema"
                    className="text-orange-500"
                  >
                    <span>
                      {" "}
                      Learn more about the 150” Big Moose Outdoor Cinema.
                    </span>
                  </a>
                </h2>
                <div className="text-center my-8">
                  <Link
                    to="/timberline-cinema-packages/150-big-moose-cinema"
                    className="learn-more-mob text-lg"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <QuoteMobile className="container mx-auto py-4">
            <h2 className="text-lg leading-tight text-white text-center">
              “My Wireless Timberline Outdoor Cinemas take less time to set up
              and start watching than it does to pop a bag of popcorn.”
            </h2>
            <div className="signature mt-4">
              <img src={signature} alt="signature todd morton" />
            </div>
          </QuoteMobile>
        </div>
        {/* ----------Desktop code----------------- */}
        <DesktopContainer className="">
          <Carousel
            className="full-width fix-height"
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            renderArrowNext={(onClickHandler, hasNext, label) =>
              playFlag && (
                <div
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...arrowStyles, right: 15 }}
                  className="focus:outline-none"
                >
                  <AiOutlineRight color={"#ffffff"} size={ICON_SIZE} />
                </div>
              )
            }
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              playFlag && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...arrowStyles, left: 15 }}
                  className="focus:outline-none"
                >
                  <AiOutlineLeft color={"#ffffff"} size={ICON_SIZE} />
                </button>
              )
            }
          >
            <div className="relative h-full">
              <video
                playsInline={true}
                id="desktop_vid"
                onEnded={onDesktopVideoEnded}
                onPlay={onDesktopVideoPlay}
                ref={videoRef}
                onClick={handleVideoClick}
                // autoPlay
                className="w-full h-full"
              >
                <source src="/homePageVideo.mp4#t=0.1" type="video/mp4" />
              </video>

              {playFlag && (
                <div style={{ ...startBtn }}>
                  <AiFillPlayCircle
                    size={90}
                    color="#ffffff"
                    onClick={e => videoAct(e)}
                  />
                </div>
              )}
            </div>
            <div
              className="hero-image w-full relative bg-cover bg-bottom hidden sm:block"
              style={{ backgroundImage: `url("${newBanner}")` }}
            >
              <div>
                <div
                  className="absolute original-stamp"
                  style={{ backgroundImage: `url("${originalStamp}")` }}
                ></div>
              </div>
              <div className="pt-20 ">
                <div className="w-full mt-20  relative block">
                  <div className="absolute bg-black opacity-50 w-9/12 md:w-8/12 lg:w-1/2 xl:w-5/12 h-full" />
                  <div className="container mx-auto">
                    <div className="pl-0 pr-4 py-3 max-w-lg ">
                      <h1 className="text-white text-5xl leading-home font-normal  relative">
                        Get an Outdoor
                      </h1>
                      <h1 className="text-orange-500 text-5xl leading-home font-normal  relative">
                        Movie Theater
                      </h1>
                      <h2 className="text-white text-3xl font-light mt-4 relative leading-tight"></h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>

          <Gray className="full-width px-20">
            <Introduction className="container mx-auto">
              <h2 className="font-normal ">
                <span className="font-normal">
                  Introducing the{" "}
                  <span className="text-orange-500 font-normal">
                    Timberline Outdoor Cinemas
                  </span>
                </span>{" "}
              </h2>
              <div className="text">
                <p className="p-padding">
                  Who doesn’t enjoy a great movie? This year turn your backyard
                  into an exciting outdoor movie theater. Watch big-screen
                  movies, sporting events, also play video games, or you can
                  stream your favorite shows with family and friends outside
                  under the stars and moon.
                </p>
                <p className="p-padding">
                  Imagine what it would feel like to sit in front of a roaring
                  bonfire, cozy and warm, and watching your favorite movie
                  outside. Then, you look up at the stars and start noticing all
                  the different star constellations you use to see when you were
                  a kid and had the time to stargaze.
                </p>
                <p className="p-padding">
                  Then you feel the fresh air in your lungs and start to realize
                  watching your favorite entertainment outside could be a lot
                  more fun than on the couch inside. And on the{" "}
                  <a href="#" className="link">
                    Outdoor Cinema Accessory page
                  </a>{" "}
                  , you’ll find great items to make you ultra-comfortable when
                  outside at night.{" "}
                </p>
              </div>
            </Introduction>
          </Gray>
          <White className=" full-width px-20">
            <Introduction className="container mx-auto">
              <h2 className="font-normal ">
                <span className="font-normal">
                  The Outdoor Movie Theater{" "}
                  <span className="text-orange-500 font-normal">Solution</span>
                </span>{" "}
              </h2>
              <div className="text">
                <p className="p-padding">
                  The Timberline Outdoor Cinemas takes all the guesswork out of
                  figuring how to set up a backyard movie theater solution
                  properly—no more hanging a bedsheet on your clothesline or
                  tacking it up on the side of your house or other structures.
                </p>
                <p className="p-padding">
                  The cinemas are designed to help homeowners and businesses
                  achieve a fast and easy setup every time you want to go
                  outside and enjoy your favorite entertainment on the big
                  screen. Getting the best outdoor cinema setup in your backyard
                  or place of business means you need to have it similar to your
                  entertainment center and TV inside your home so it's simple to
                  use.
                </p>
                <p className="p-padding">
                  There are two significant components to the cinemas; a
                  stationary outside weather-resistant pressure-treated frame
                  that you never have to set up or break down, and a custom
                  light-weight cedar wood projector stand that organizes all
                  your cinema electronic components on. The cinema electronics
                  never get removed from the projector stand, and all you have
                  to do is plug in, power on, and start watching without a
                  lengthy and painful setup.
                </p>
              </div>
            </Introduction>
          </White>
          <div class=" px-5 grid grid-cols-2  text-center">
            <div>
              <div className="bg-image bg-grid">
                <img src={CinemaFrame} />
              </div>
              <p className="p-padding pr-20  mt-5">
                The cinema wooden frame system allows you to easily attach the
                cinematic screen with grommet holes to the inside of the frame
                where the hooks are located. To secure the screen to the frame
                takes less than two minutes. Now that’s fast.
              </p>
              <p className="p-padding pr-20  mt-5">
                This framing system has a rustic and beautiful appearance that
                will look great on your property. And you never have to worry
                about it breaking it down. The frame is designed to stay up
                year-round similar to your outdoor deck attached to your home.
              </p>
            </div>

            <div>
              <div className="bg-image bg-grid">
                <img src={ProjectorStand} />
              </div>
              <p className="p-padding pr-20  mt-5">
                No more stacking your projector, DVD Player, Streaming Media
                Player, Tuner, and other equipment on boxes, milk crates, or 5
                gallon Home Depot buckets. Instead, this handcrafted,
                lightweight, cedar wood outdoor projector stand organizes
                everything for you.
              </p>
              <p className="p-padding pr-20  mt-5">
                When you want to have a movie night outside, all you have to do
                is pick up the lightweight projector stand with everything on
                it, take it outside, position it 10’ - 12’ ft. away from the
                screen, and power it on. So easy, even a moose could do it.
              </p>
            </div>
          </div>
          <Gray className=" mt-10 full-width px-20">
            <Introduction className="container mx-auto">
              <h2 className="font-normal ">
                <span className="font-normal">
                  Indstry-leading{" "}
                  <span className="text-orange-500 font-normal">features</span>
                </span>{" "}
              </h2>
              <div className="text">
                <p className="p-padding">
                  The Timberline Outdoor Cinemas has raised the bar again across
                  the retail marketplace with these unbeatable time-saving and
                  ease of use features.
                </p>
              </div>
              <div className="grid grid-cols-4 gap-4 content-center">
                <div className="content-center">
                  <div className="bg-image bg-grid-small content-center">
                    <img src={Feature1} />
                  </div>
                  <div className="text text-right pd-grid-small">
                    <h3 className="text-2xl font-semibold mt-3 mb-1 mr-2 text-center leading-wide">
                      Strongest Frame
                    </h3>
                    <p className="text-center font-sm ">
                      Frame never has to be broken down, taken apart, shoved in
                      a box, or deflated. It stays outside just like your deck
                      attached to your house. Built to last.
                    </p>
                  </div>
                </div>
                <div className="content-center">
                  <div className="bg-image bg-grid-small content-center">
                    <img src={Feature2} />
                  </div>
                  <div className="text text-right ">
                    <h3 className="text-2xl mr-12 font-semibold mt-3 mb-1 mr-2 text-center leading-wide">
                      #1 Projector Stand
                    </h3>
                    <p className="text-center font-sm pd-grid-small ">
                      Handcrafted from cedar wood, this outdoor projector stand
                      is the only one available in the retail market.
                      Light-weight and easy to carry.
                    </p>
                  </div>
                </div>
                <div className="content-center">
                  <div className="bg-image bg-grid-small content-center">
                    <img src={Feature3} />
                  </div>
                  <div className="text text-right pd-grid-small">
                    <h3 className="text-2xl font-semibold mt-3 mb-1 mr-2 text-center leading-wide">
                      Fastest Setup
                    </h3>
                    <p className="text-center font-sm ">
                      To attach the cinematic screen to the wooden frame, place
                      the projector stand 10-12’ ft away from the screen, and
                      power on takes about 3 minutes.
                    </p>
                  </div>
                </div>
                <div className="content-center">
                  <div className="bg-image bg-grid-small content-center">
                    <img src={Feature4} />
                  </div>
                  <div className="text text-right pd-grid-small">
                    <h3 className="text-2xl font-semibold mt-3 mb-1 mr-2 text-center leading-wide">
                      Year-round Use
                    </h3>
                    <p className="text-center font-sm ">
                      Why limit yourself to watch movies only in the summer
                      months? These outdoor cinemas were designed for outdoor
                      enjoyment in every season.
                    </p>
                  </div>
                </div>
              </div>
            </Introduction>
          </Gray>
          <White className=" full-width px-20">
            <Introduction className="container mx-auto">
              <h2 className="font-normal ">
                <span className="font-normal">
                  Which Outdoor Cinema is{" "}
                  <span className="text-orange-500 font-normal">
                    best for you?
                  </span>
                </span>{" "}
              </h2>
              <div className="text">
                <p className="p-padding">
                  With the Timberline Outdoor Cinema Series, you have two
                  choices; wireless or wired. With the wireless version, there’s
                  no need for using any extensions cords and it comes with a
                  battery power station and a sleek soundbar speaker.
                </p>
                <p className="p-padding">
                  The wired option gives you a richer audio sound experience and
                  comes with tripod speaker stands, PA Speakers, Digital FM
                  Tuner, Digital Transmitter, and the other cinema components
                  mentioned with each cinema option.
                </p>
                <p className="p-padding">
                  You can also choose to have your cinema frame cemented into
                  the ground, giving you a cleaner frame design, or you can go
                  with the moveable framing system allowing you to place it
                  anywhere on your property. Introducing the Timberline Outdoor
                  Cinema lineup.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 txt-center content-center">
                <div className="content-center txt-center">
                  <div className="bg-image mb-5  bg-grid-large content-center">
                    <img src={newBobcat} />
                  </div>
                  <div
                    className="text txt-center content-center "
                    style={{ textAlign: "center" }}
                  >
                    <div className="center-h3">
                      <h3>
                        <span className="text-orange-500 h3-grid-large h3-grid-large-span">
                          96” Jedi Bobcat
                        </span>
                      </h3>
                      <h3 className="h3-grid-large ">
                        <span className="text-3xl">Outdoor Gaming </span>
                      </h3>
                      <h3 className="h3-grid-large pb-2">
                        <span className="text-3xl"> Cinema</span>
                      </h3>
                    </div>
                    <p className="text-center pt-7.5 font-xs h3-grid-large-p">
                      Get the only outdoor gaming cinema available on the
                      market. With an 8’ ft. wide frame and cinematic gaming
                      screen, playing your favorite video games outside will
                      make you feel as if you are in real life-size action.
                    </p>
                    <p className="text-center font-xs h3-grid-large-p">
                      Feel the exhilaration and excitement while you game away
                      under the stars and moon. Get out of the house and
                      experience how video gaming should be.
                    </p>
                    <p className="text-center text-orange-500 font-xs  h3-grid-large-p-txt">
                      Learn more about the 96” Jedi Bobcat Outdoor Gaming
                      Cinema.
                    </p>
                    <hr className="bg-#E0E0E0  hr-grid mt-8 mb-2"></hr>
                    <Link
                      className="content-center"
                      to="/timberline-cinema-packages/96-jedi-bobcat-cinema"
                    >
                      <button className="sp-button mt-4">Learn more</button>
                    </Link>
                  </div>
                </div>
                <div className="content-center txt-center">
                  <div className="bg-image mb-5 bg-grid-large content-center">
                    <img src={BearBanner} />
                  </div>
                  <div
                    className="text txt-center content-center "
                    style={{ textAlign: "center" }}
                  >
                    <div className="center-h3">
                      <h3>
                        <span className="text-purple-1000 h3-grid-large h3-grid-large-span">
                          120” Bella Bear
                        </span>
                      </h3>
                      <h3 className="h3-grid-large">
                        <span className="text-3xl">Backyard Outdoor </span>
                      </h3>
                      <h3 className="h3-grid-large pb-2">
                        <span className="text-3xl">Cinema</span>
                      </h3>
                    </div>
                    <p className="text-center pt-7.5 font-xs h3-grid-large-p-2nd">
                      Get the most popular outdoor cinema package. Perfect for
                      families and friends to gather around a fire, toast
                      marshmallows, enjoy smores, and watch a blockbuster hit
                      movie on this 10’ft. wide frame and screen.
                    </p>
                    <p className="text-center font-xs h3-grid-large-p">
                      You will love watching your favorite movies outside and
                      make you feel like you are at the drive-in movie theater
                      while being in the comfort of your backyard.
                    </p>
                    <p className="text-center text-purple-1000 font-xs  h3-grid-large-p-txt">
                      Learn more about the 120” Bella Bear Backyard Outdoor
                      Cinema.
                    </p>
                    <hr className="bg-#E0E0E0  hr-grid mt-8 mb-2"></hr>
                    <Link
                      className="content-center"
                      to="/timberline-cinema-packages/120-bella-bear-cinema"
                    >
                      <button className="sp-button-purple mt-4">
                        Learn more
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="content-center txt-center">
                  <div className="bg-image mb-5 bg-grid-large content-center">
                    <img src={MooseBanner} />
                  </div>
                  <div
                    className="text txt-center content-center "
                    style={{ textAlign: "center" }}
                  >
                    <div className="center-h3">
                      <h3>
                        <span className="text-orange-500 h3-grid-large h3-grid-large-span">
                          150” Big Moose
                        </span>
                      </h3>
                      <h3 className="h3-grid-large">
                        <span className="text-3xl">Premium Outdoor </span>
                      </h3>
                      <h3 className="h3-grid-large pb-2">
                        <span className="text-3xl">Cinema</span>
                      </h3>
                    </div>
                    <p className="text-center pt-7.5 font-xs h3-grid-large-p-3rd">
                      Get out of the way forest creatures and two-legged land
                      dwellers-the Big Moose Outdoor Cinema needs extra space
                      with its impressive 12‘ ft. width and 10‘ ft height
                      framing system. Simply stated-this cinema is huge.
                    </p>
                    <p className="text-center font-xs h3-grid-large-p">
                      Designed for homeowners and businesses who want to do some
                      serious entertaining outside for friends,family,and
                      patrons and want nothing but the biggest and best.
                    </p>
                    <p className="text-center text-orange-500 font-xs  h3-grid-large-p-txt">
                      Learn more about the 150” Big Moose Premium Outdoor
                      Cinema.
                    </p>
                    <hr className="bg-#E0E0E0  hr-grid mt-8 mb-2"></hr>
                    <Link
                      className="content-center"
                      to="/timberline-cinema-packages/150-big-moose-cinema"
                    >
                      <button className="sp-button mt-4">Learn more</button>
                    </Link>
                  </div>
                </div>
              </div>
            </Introduction>
          </White>
          <Gray className=" mt-10 full-width px-20">
            <Introduction className="container mx-auto">
              <h2 className="font-normal ">
                <span className="font-normal">
                  Here's{" "}
                  <span className="text-orange-500 font-normal">
                    what you get
                  </span>
                </span>{" "}
              </h2>
              <div className="text">
                <p className="p-padding ">
                  The Timberline Outdoor Cinema series allows you to choose from
                  two different options depending on what type of setup you
                  would like to have in your backyard or place of business.
                  Below are items that come with purchasing either the wireless
                  or wired cinema that best meets your needs.
                </p>
              </div>
              <div className="grid grid-cols-5 gap-2 pr-10 mt-10 content-center">
                <div className="content-center">
                  <div className="bg-image bg-grid-smaller content-center">
                    <img src={Frame} />
                  </div>
                  <div className="text text-right ">
                    <h3 className="text-2xl font-medium  mt-3 mb-1 pr-2 text-center ">
                      Cinema Frame
                    </h3>
                    <p className="text-center font-xs pd-grid-smaller">
                      Pressure-treated 4”x4” wooden frame and weather-resistant
                      hardware
                    </p>
                  </div>
                </div>
                <div className="content-center">
                  <div className="bg-image bg-grid-smaller content-center">
                    <img src={ScreenandFrame} />
                  </div>
                  <div className="text text-right ">
                    <h3 className="text-2xl font-medium  mt-3 mb-1 pr-2 text-center ">
                      Cinema Screen
                    </h3>
                    <p className="text-center font-xs pd-grid-smaller">
                      Cinematic screen with black backing to prevent light
                      transmission
                    </p>
                  </div>
                </div>
                <div className="content-center">
                  <div className="bg-image bg-grid-smaller content-center">
                    <img src={Projectornew} />
                  </div>
                  <div className="text text-right ">
                    <h3 className="text-2xl font-medium  mt-3 mb-1 pr-2 text-center ">
                      Projector
                    </h3>
                    <p className="text-center font-xs pd-grid-smaller">
                      1080p HD Projector with 4,000 Lumens and multiple
                      connection ports
                    </p>
                  </div>
                </div>
                <div className="content-center">
                  <div className="bg-image bg-grid-smaller content-center">
                    <img src={SoundbarSpeakers} />
                  </div>
                  <div className="text text-right ">
                    <h3 className="text-2xl font-medium  mt-3 mb-1 pr-2 text-center ">
                      Soundbar
                    </h3>
                    <p className="text-center font-xs pd-grid-smaller">
                      Wireless Soundbar speaker used for the wireless cinema
                      packages
                    </p>
                  </div>
                </div>
                <div className="content-center">
                  <div className="bg-image bg-grid-smaller content-center">
                    <img src={WiredSpeakers} />
                  </div>
                  <div className="text text-right ">
                    <h3 className="text-2xl font-medium  mt-3 mb-1 pr-2 text-center ">
                      Speakers
                    </h3>
                    <p className="text-center font-xs pd-grid-smaller">
                      Dual PA Outdoor Speakers with Tripod stands for wired
                      cinema packages
                    </p>
                  </div>
                </div>
                <div className="content-center">
                  <div className="bg-image bg-grid-smaller content-center">
                    <img src={Roku2} />
                  </div>
                  <div className="text text-right ">
                    <h3 className="text-2xl font-medium  mt-3 mb-1 pr-2 text-center ">
                      Roku Express
                    </h3>
                    <p className="text-center font-xs pd-grid-smaller">
                      Roku Express 4k Player with voice control to access movies
                      and shows
                    </p>
                  </div>
                </div>
                <div className="content-center">
                  <div className="bg-image bg-grid-smaller content-center">
                    <img src={Battery} />
                  </div>
                  <div className="text text-right ">
                    <h3 className="text-2xl font-medium  mt-3 mb-1 pr-2 text-center ">
                      Battery Station
                    </h3>
                    <p className="text-center font-xs pd-grid-smaller">
                      Off-Grid Battery to power your wireles outdoor cinema
                      package
                    </p>
                  </div>
                </div>
                <div className="content-center">
                  <div className="bg-image bg-grid-smaller content-center">
                    <img src={DigitalTransmitter} />
                  </div>
                  <div className="text text-right ">
                    <h3 className="text-2xl font-medium  mt-3 mb-1 pr-2 text-center ">
                      FM Transmitter
                    </h3>
                    <p className="text-center font-xs pd-grid-smaller">
                      Rolls FM Digital Transmitter to power speakers for wired
                      cinema packages
                    </p>
                  </div>
                </div>
                <div className="content-center">
                  <div className="bg-image bg-grid-smaller content-center">
                    <img src={DigitalTuner} />
                  </div>
                  <div className="text text-right ">
                    <h3 className="text-2xl font-medium  mt-3 mb-1 pr-2 text-center ">
                      Digital Tuner
                    </h3>
                    <p className="text-center font-xs pd-grid-smaller">
                      Rolls FM Digital Truner to power speakers for wired cinema
                      packages
                    </p>
                  </div>
                </div>
                <div className="content-center">
                  <div className="bg-image bg-grid-smaller content-center">
                    <img src={ProjectorStandnew} />
                  </div>
                  <div className="text text-right ">
                    <h3 className="text-2xl font-medium  mt-3 mb-1 pr-2 text-center ">
                      Projector Stand
                    </h3>
                    <p className="text-center font-xs pd-grid-smaller">
                      Hancrafted Cedar Projector Stand to organize all your
                      cinema equipment
                    </p>
                  </div>
                </div>
              </div>
            </Introduction>
          </Gray>

          {/* <JediContainer className="container mx-auto">
            <img src={jediDesktop} alt="cinema jedi" />
            <div>
              <h3>
                <span className="text-orange-500">96” JEDI BOBCAT</span>
                <span>GAMING CINEMA</span>
              </h3>
              <div className="text">
                The ultimate outdoor gaming experience with a 96” diagonal
                screen. Use your PlayStation®, Xbox One®, Wii®, and more to
                connect to the HD 1080p Projector and game away under the stars
                and moon. Get your children out of the house this summer during
                the evenings and give them some fresh air.{" "}
                <Link
                  to="/timberline-cinema-packages/96-jedi-bobcat-cinema"
                  className="link"
                >
                  Learn more about the 96” Jedi Bobcat Outdoor Gaming Cinema.
                </Link>
              </div>
              <Link to="/timberline-cinema-packages/96-jedi-bobcat-cinema">
                <button>learn more</button>
              </Link>
            </div>
          </JediContainer>
          <Gray>
            <BearContainer className="container mx-auto">
              <div>
                <h3>
                  <span className="text-purple-500">120” BELLA BEAR</span>
                  <span>BACKYARD CINEMA</span>
                </h3>
                <div className="text">
                  The perfect outdoor cinema experience for families with a big
                  120” diagonal screen. Take out your lawn furniture, start a
                  bonfire, get your bowls of popcorn and favorite snacks, and
                  gather around with family and friends to enjoy your favorite
                  movies, sporting events, or stream your favorite shows on a
                  larger than life cinematic screen.
                  <Link
                    to="/timberline-cinema-packages/120-bella-bear-cinema"
                    className="link"
                  >
                    Learn more about the 120” Bella Bear Backyard Cinema.
                  </Link>
                </div>
                <Link to="/timberline-cinema-packages/120-bella-bear-cinema">
                  <button>learn more</button>
                </Link>
              </div>
              <img src={bearDesktop} alt="cinema bear" />
            </BearContainer>
          </Gray>

          <MooseContainer className="container mx-auto">
            <img src={mooseDesktop} alt="cinema moose" />
            <div>
              <h3>
                <span className="brown">150” BIG MOOSE</span>
                <span>OUTDOOR CINEMA</span>
              </h3>
              <div className="text">
                For the homeowners who the biggest and best boasting a massive
                150” diagonal screen. You won’t want to go back inside after the
                movie ends. Also ideal for venues with outdoor seating like
                restaurants and bars, summer camps, campgrounds, hotels,
                resorts, and more. Attract more customers and have them keep
                coming back for more.
                <Link
                  to="/timberline-cinema-packages/150-big-moose-cinema"
                  className="link"
                >
                  Learn more about the 150” Bella Bear Outdoor Cinem
                </Link>
              </div>
              <Link to="/timberline-cinema-packages/150-big-moose-cinema">
                <button>learn more</button>
              </Link>
            </div>
          </MooseContainer>

          <Gray>
            <IncludeContainer className="container mx-auto">
              <h3>TIMBERLINE CINEMAS INCLUDE</h3>
              <div className="text">
                All Timberline Cinema Series include a rugged and durable
                pressure-treated framing system with weather-resistant hardware,
                cinematic screen, custom one-of-a-kind cedar project stand, HD
                1080p outdoor projector, Bluetooth & wireless mini sound bar
                speaker, and an off-grid battery station.
              </div>
              <div className="galleryInclude">
                <img src={GalleryDesktop1} alt="frame" />
                <img src={GalleryDesktop2} alt="screen" />
                <img src={GalleryDesktop3} alt="cedar stand" />
              </div>
              <div className="galleryInclude">
                <img src={GalleryDesktop4} alt="projector" />
                <img src={GalleryDesktop5} alt="speaker" />
                <img src={GalleryDesktop6} alt="battery" />
              </div>
            </IncludeContainer>
          </Gray> */}

          <Orange className="full-width  py-10 px-20">
            <QuoteContainer className="container mx-auto ">
              <div className="quote  text-sm ">
                <p className="quote-styling">
                  <span>“</span> My Wireless Timberline Outdoor Cinemas take
                  less time to set up and start watching your favorite
                  entertainment than it does to pop a bag of popcorn in your
                  microwave - so easy even a moose could do it.
                  <span className="two">”</span>
                </p>
              </div>
              <div className="signature relative ">
                <img
                  src={Signaturenew}
                  className="absolute signature-position"
                  alt="signature todd morton"
                  style={{ width: "30%" }}
                />
              </div>
            </QuoteContainer>
          </Orange>
        </DesktopContainer>
      </div>
    </Layout>
  )
}

export default IndexPage
