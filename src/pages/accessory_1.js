import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import bannerAccessory from "../images/mobile-home-page-image.png"
import firePit from "../images/fire_pit.png"
import heatLamp from "../images/heat_lamp.png"
import thermail from "../images/thermail.png"
import wicker from "../images/wicker.png"
import popcorn from "../images/popcorn.png"
import headphones from "../images/headphones.png"

import "../css/index.css"

const Accessory = () => {
  return (
    <>
      <SEO title="Accessory" />
      <Layout>
        <div className="accessory">
          <div>
            <div className="container mx-auto">
              <div className="sm:pt-6 change">
                <div className="flex items-center text-xs sm:text-sm text-sm">
                  <Link
                    to="/"
                    className="text-blue-600 sm:text-black cursor-pointer"
                  >
                    Home
                  </Link>
                  <span className="mx-2 sm:mx-2">&gt;</span>
                  <span to="#">Outdoor Cinema Accessory</span>
                </div>
              </div>
              <div className="md:hidden h-64 w-full full-bleed-mobile max-h-screen relative mt-6 mb-6">
                <img
                  className="w-full h-full object-cover "
                  src={bannerAccessory}
                />
              </div>
              <h1 className="text-5xl mt-6 heading ">
                Outdoor Cinema{" "}
                <span className="text-orange-500">Accessories</span>
              </h1>
            </div>
          </div>
          <div
            className="about-image w-full relative bg-cover bg-bottom desktop"
            style={{ backgroundImage: `url(${bannerAccessory})` }}
          />
          <div>
            <div className="mt-3 sm:mt-0 sm:pt-12 container mx-auto">
              <h2 className="text-xl sm:text-2xl mb-4 news-subtitle">
                Get the most out of your outdoor movie theater
              </h2>
              <p>
                I’ve gathered a list of great outdoor accessories to help you
                enjoy your outdoor movie experience. My movie theaters are
                designed for year-round use and have included items to keep you
                cozy warm, and comfortable. I do not sell these items on my
                website, nor do I get paid a commission for promoting these
                products and only providing you with some useful items to
                compliment my cinema packages that I think you would enjoy based
                on amazon reviews.
              </p>
            </div>
            <div className="mt-12 sm:mt-0 sm:py-12 flex flex-col-reverse md:flex-row container mx-auto">
              <div className="desktop flex-1 pl-0 md:pr-12 text-center md:text-left rightContainer image-accessory">
                <img src={firePit} />
              </div>
              <div className="flex-1 mt-6 md:mt-0 pr-0 mb-6 sm:mb-0">
                <h3 className="text-lg mb-6 sm:mb-8 news-subtitle sm:font-bold sm:product-title">
                  Outland Living 883 Mega Outdoor Propane Gas 24-Inch diameter
                  Fire Pit with 58,000 BTU
                </h3>
                <div className="mobile pl-0 mb-6 md:pr-12 text-center md:text-left flex items-center image-accessory">
                  <img src={firePit} />
                </div>
                <p className="mb-4">
                  What I like about this portable outdoor propane fire pit is
                  that it’s simple and fast to get direct heat for movie night
                  without worrying about getting a wood fire started and
                  maintaining it throughout the movie.
                </p>
                <p>
                  And with close to 6,000 5-star reviews on Amazon, the reviews
                  speak for themselves. This product is made by Outland Living
                  and sold on Amazon.
                </p>
                <p>
                  Get at{" "}
                  <a
                    className="accessory-link"
                    href="https://www.amazon.com/Outland-Firebowl-883-Resistant-Diameter/dp/B00FWKVGQ0/ref=pd_lpo_3?pd_rd_i=B00FWKVGQ0&psc=1"
                    target="_blank"
                  >
                    Amazon
                  </a>{" "}
                  for just $162.
                </p>
              </div>
            </div>
            <div className="gray-back">
              <div className="mt-12 sm:mt-0 sm:py-12 flex flex-col-reverse md:flex-row container mx-auto ">
                <div className="flex-1 mt-6 md:mt-0 pr-0 md:pr-12 mb-6 sm:mb-0">
                  <h3 className="text-lg mb-6 sm:mb-8 news-subtitle sm:font-bold sm:product-title">
                    Outdoor Propane Patio Heater with wheels - 46,000 BTU
                  </h3>
                  <div className="mb-6 pl-0 text-center md:text-left mobile">
                    <img src={heatLamp} />
                  </div>
                  <p className="mb-4">
                    As we start getting closer to the colder months, compliment
                    your firepit with this great propane heat lamp. During fall
                    and winter, I use a heat lamp to keep my head and back warm
                    while watching movies outside. The firepit will keep the
                    front side of your body warm, and your backside will get
                    cold.
                  </p>
                  <p>
                    And with close to 6,000 4-1/2-star reviews on Amazon, this
                    is a popular choice. This product is made and sold on{" "}
                    <a
                      className="accessory-link"
                      href="https://www.amazon.com/AmazonBasics-Commercial-Heater-Havana-Bronze/dp/B00LILH3V4/ref=sr_1_7?dchild=1&keywords=Propane+Heat+Lamps&qid=1628958111&refinements=p_72%3A2661618011&rnid=2661617011&s=lawn-garden&sr=1-7"
                      target="_blank"
                    >
                      Amazon
                    </a>{" "}
                    for just $176.
                  </p>
                </div>
                <div className="flex-1 pl-0 text-center md:text-left rightContainer desktop image-accessory">
                  <img src={heatLamp} />
                </div>
              </div>
            </div>

            <div className="mt-12 sm:mt-0 sm:py-12 flex flex-col-reverse md:flex-row container mx-auto ">
              <div className="desktop flex-1 pl-0 md:pr-12 text-center md:text-left rightContainer image-accessory">
                <img src={thermail} />
              </div>
              <div className="flex-1 mt-6 md:mt-0 pr-0 mb-6 sm:mb-0">
                <h3 className="text-lg mb-6 sm:mb-8 news-subtitle sm:font-bold sm:product-title">
                  Wool Blankets 4 lbs., warm, heavy, washable, large - great for
                  movies outside
                </h3>
                <div className="mobile pl-0 mb-6 md:pr-12 text-center md:text-left flex items-center image-accessory">
                  <img src={thermail} />
                </div>
                <p className="mb-4">
                  Get one of the heaviest and warmest outdoor blankets available
                  to keep you warm while enjoying a movie outside when
                  temperatures start falling at night.
                </p>
                <p className="mb-4">
                  With close to 500 excellent 5-star reviews on Amazon, you know
                  this blanket keeps people warm when it’s cold outside. Just
                  $45.
                </p>
                <p>
                  Get at{" "}
                  <a
                    href="https://www.amazon.com/Arcturus-Mt-Rainier-Wool-Blanket/dp/B08KQ563SG/ref=sr_1_2_sspa?dchild=1&keywords=Arcturus+Military+Wool+Blanket&qid=1628959479&sr=8-2-spons&psc=1&smid=A3JS2P3BKBPG75&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzNUw3MEpDOTZMS09EJmVuY3J5cHRlZElkPUEwMTU2MTI1MzNLUzFHMklDNkJGOSZlbmNyeXB0ZWRBZElkPUEwNjEzNTUyMVdLNlVCRkFYVlQySCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
                    className="accessory-link"
                    target="_blank"
                  >
                    Amazon
                  </a>{" "}
                  for just $45.
                </p>
              </div>
            </div>
            <div className="gray-back">
              <div className="mt-12 sm:mt-0 sm:py-12 flex flex-col-reverse md:flex-row container mx-auto ">
                <div className="flex-1 mt-6 md:mt-0 pr-0 md:pr-12 mb-6 sm:mb-0">
                  <h3 className="text-lg mb-6 sm:mb-8 sm:font-bold news-subtitle sm:product-title">
                    Better Homes & Gardens Azalea Ridge Outdoor Conversation Set
                    with orange cushions
                  </h3>
                  <div className="mobile pl-0 mb-6 md:pr-12 text-center md:text-left flex items-center image-accessory">
                    <img src={wicker} />
                  </div>
                  <p className="mb-4">
                    Let’s talk about comfort while watching movies outside
                    around the fire. I personally own this 4-piece set, and it
                    has lasted over four years and still looks brand new. I love
                    this set and it’s perfect for any occasion.
                  </p>
                  <p className="mb-4">
                    There’s no need to spend thousands of dollars on a wicker
                    patio set when you can get this beautiful collection for
                    under $600.
                  </p>
                  <p>
                    With 4-1/2 star ratings across the internet, this wicker
                    furniture set has the best price at{" "}
                    <a
                      href="https://www.walmart.com/ip/Better-Homes-Gardens-Azalea-Ridge-Outdoor-Conversation-Set-with-Orange-Cushions/22223046"
                      className="accessory-link"
                      target="_blank"
                    >
                      Walmart
                    </a>
                    .
                  </p>
                </div>
                <div className="flex-1 pl-0 text-center md:text-left rightContainer desktop image-accessory">
                  <img src={wicker} />
                </div>
              </div>
            </div>

            <div className="mt-12 sm:mt-0 sm:py-12 flex flex-col-reverse md:flex-row container mx-auto ">
              <div className="desktop flex-1 pl-0 md:pr-12 text-center md:text-left rightContainer image-accessory">
                <img src={popcorn} />
              </div>
              <div className="flex-1 mt-6 md:mt-0 pr-0 mb-6 sm:mb-0">
                <h3 className="text-lg mb-6 sm:mb-8 sm:font-bold sm:product-title news-subtitle">
                  Coleman Handheld Popcorn Popper with long handle
                </h3>
                <div className="mobile pl-0 mb-6 md:pr-12 text-center md:text-left flex items-center image-accessory">
                  <img src={popcorn} />
                </div>
                <p className="mb-4">
                  Who doesn’t love popcorn with a movie? Coleman has done it
                  again and came out with this great little handheld popcorn
                  popper to use while sitting around the fire and watching a
                  movie. Get one for everyone around the fire and watch it pop
                  right in front of your eyes over the flames.
                </p>
                <p className="mb-4">
                  What I like about the design of this popcorn popper is the
                  long handle that prevents your hand from burning over the open
                  flame. A cool addition to any firepit.
                </p>
                <p>
                  Get at{" "}
                  <a
                    href="https://www.amazon.com/Coleman-2000016439-Popcorn-Popper/dp/B006J3EI7I"
                    className="accessory-link"
                    target="_blank"
                  >
                    Amazon
                  </a>{" "}
                  for just $26 .
                </p>
              </div>
            </div>
            <div className="gray-back">
              <div className="mt-12 sm:mt-0 sm:py-12 flex flex-col-reverse md:flex-row container mx-auto ">
                <div className="flex-1 mt-6 md:mt-0 pr-0 md:pr-12 mb-16 sm:mb-0">
                  <h3 className="text-lg mb-6 sm:mb-8 sm:font-bold sm:product-title news-subtitle">
                    OneOdio A70 Bluetooth Over Ear Headphones, foldable, wired
                    and wireless
                  </h3>
                  <div className="mobile pl-0 mb-6 md:pr-12 text-center md:text-left flex items-center image-accessory">
                    <img src={headphones} />
                  </div>
                  <p className="mb-4">
                    Use these great wireless headphones if you have neighbors
                    that are close by to ensure they don’t hear your movie
                    outside late at night. These will only work with the ‘wired’
                    Timberline Series Outdoor Cinema packages I offer on my
                    website.
                  </p>
                  <p className="mb-4">
                    With over 6,000 great 4-1/2-star reviews on{" "}
                    <a
                      href="https://www.amazon.com/OneOdio-Bluetooth-Headphones-Share-Port-Professional/dp/B07MQQS88Q/ref=sr_1_19?dchild=1&keywords=Wireless+Movie+headphones&qid=1628967354&s=electronics&sr=1-19"
                      className="accessory-link"
                      target="_blank"
                    >
                      Amazon
                    </a>
                    , you can’t go wrong at $46 price point.
                  </p>
                </div>
                <div className="flex-1 pl-0 text-center md:text-left desktop image-accessory">
                  <img src={headphones} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Accessory
