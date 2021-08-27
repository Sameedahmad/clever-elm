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

import signature from "../images/Signature.png"
import "../css/index.css"
import { AiOutlineLeft, AiOutlineRight, AiFillPlayCircle } from "react-icons/ai"

import {
  DesktopContainer,
  Gray,
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
              style={{ backgroundImage: `url("/banner.jpg")` }}
            >
              <div className="pt-12">
                <div className="w-full relative block">
                  <div className="absolute bg-black opacity-50 w-9/12 md:w-8/12 lg:w-1/2 xl:w-5/12 h-full" />
                  <div className="container mx-auto">
                    <div className="pl-4 py-6 max-w-lg ">
                      <h1 className="text-orange-500 text-5xl leading-home font-bold uppercase relative">
                        GET A BACKYARD
                      </h1>
                      <h1 className="text-white text-5xl leading-home font-bold uppercase relative">
                        MOVIE THEATER
                      </h1>
                      <h2 className="text-white text-3xl font-light mt-4 relative leading-tight">
                        Get a year-round wireless outdoor movie cinema and start
                        creating unforgettable memories.
                      </h2>
                      <Link
                        to="/#cinema-packages"
                        className="btn absolute mt-16"
                      >
                        View Cinema Packages
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>

          <Gray>
            <Introduction className="container mx-auto">
              <h2>
                <span>INTRODUCING THE</span>{" "}
                <span className="text-orange-500">
                  TIMBERLINE OUTDOOR CINEMAS
                </span>{" "}
              </h2>
              <div className="text">
                <p>
                  Who doesn’t enjoy a great movie? This summer turn your
                  backyard into an amazing outdoor movie theater and watch big
                  screen movies, sporting events, play video games, or stream
                  your favorite shows with family and friends. Perfect for
                  homeowners, summer camps, campgrounds, restaurants and bars
                  with outdoor seating, town parks, miniature golf and fun
                  parks, hotels and motels, and more.
                </p>
                <p>
                  The Timberline Outdoor Cinema Series takes all the guess work
                  on how to properly setup a backyard movie experience. No more
                  hanging a bedsheet on your clothes line or tacking it up on
                  the side of your house. The wooden cinema frames have a rustic
                  and beautiful appearance that will look great on your property
                  and you’ll never have to worry about it breaking it down as
                  it’s a year-round frame made for New England’s toughest
                  weather.{" "}
                  <a href="#" className="link">
                    Continue learning more about Timberline Outdoor Cinemas
                  </a>
                  .
                </p>
              </div>
            </Introduction>
          </Gray>

          <JediContainer className="container mx-auto">
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
          </Gray>

          <Orange>
            <QuoteContainer className="container mx-auto">
              <div className="quote">
                <span>“</span>My Timberline Cinemas take less time to setup and
                start watching than it does to pop a bag of popcorn in your
                microwave.<span className="two">”</span>
              </div>
              <div className="signature">
                <img src={signature} alt="signature todd morton" />
                <span className="slash">-</span>
                <span className="owner">Owner</span>
              </div>
            </QuoteContainer>
          </Orange>
        </DesktopContainer>
      </div>
    </Layout>
  )
}

export default IndexPage
