import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import bannerTodd from "../images/banner_todd.png"
import frameAbout from "../images/frame_about.png"
import standAbout from "../images/stand_about.png"
import bannerMobile from "../images/todd-wireless-outdoor-cinema.png"
import frameMobile from "../images/outdoor-movie-theater-frame.jpg"
import standMobile from "../images/outdoor-movie-projector-stand.jpg"
import signatureWhite from "../images/signature_white.png"
import signatureBlack from "../images/signature_black.png"

import "../css/about.css"

function About() {
  return (
    <Layout>
      <SEO title="About" />
      {/* <div> */}
        <div className="container mx-auto">
            <div className="pt-6">
              <div className="flex items-center text-xs sm:text-sm font-">
                <Link
                  to="/"
                  className="text-blue-600 sm:text-black cursor-pointer"
                >
                  Home
                </Link>
                <span className="mx-1 sm:mx-2">&gt;</span>
                <span to="#">About</span>
            </div>
          </div>
        </div>
        <div className="container mx-auto images-banner">
            <div
              className="about-image w-full relative bg-cover bg-bottom mobile bg-center first-image"
              style={{ backgroundImage: `url(${bannerMobile})` }}
            />
          </div>
        <div className="container mx-auto top-heading">
            <h1 className="text-orange-500 text-5xl mt-6 heading about-heading"><span className="about">About</span> Todd Morton</h1>
        </div>
      {/* </div> */}
      <div
        className="about-image w-full relative bg-cover bg-bottom desktop"
        style={{ backgroundImage: `url(${bannerTodd})` }}
      />

      <div className="container mx-auto">
        <div className="sm:pt-16 sm:mt-6">
          <p className="mb-4">
            Thank you for taking the time to stop by, and I appreciate your
            interest in learning more about me and what I do. I know your time
            is valuable and have tried to provide interesting and helpful
            content so you can get to know me better.
          </p>
          <p className="mb-4">
            Born in Burlington, VT, and spending time between Vermont and Maine
            growing up, I was fortunate to have a great childhood thanks to my
            wonderful and loving parents. I’m a mix of British, Irish, Scottish,
            French Canadien and have a Capricorn sign born in January.
          </p>
          <p className="mb-4">
            Growing up as a kid, I remember how much I enjoyed being outdoors,
            playing in the woods, watching wildlife, fishing, swimming, hiking,
            and camping outside with my brother and friends in the summer
            months. It was sometimes difficult for my parents to get me back
            inside the house because I loved spending time outdoors.
          </p>
          <p className="mb-4">
            When I was ten years old, I started learning about construction,
            watching my grandfather and father doing miscellaneous projects and
            repairs around the house and camp. I was interested in building
            things after watching them, and my dad taught me the basics, and my
            desire to learn more grew. As I got into my teens, I started
            building waterfront dock systems, decks and repairing things for
            neighbors and friends.
          </p>
          <p className="mb-4">
            During high school, I had an incredible Woodshop Teacher named David
            Tieff, who is a master woodcarver and woodworker. I was inspired by
            his work and took every available woodshop class he offered. Here is
            where I learned how to build furniture, make wooden signs, wood
            carve, and apply different types of stains on various wood species.
            I remember always dreaming of having my own woodshop someday.
          </p>
          <p className="mb-4">
            After high school, I took some time off and worked for various home
            builders, and was taught about the building trade. I even helped
            build a couple of log homes, one of which I live in now full-time in
            beautiful Bridgton, ME, that I built with my family. When I was
            twenty-three, I decided to take some business and marketing courses
            at Champlain College in Burlington, Vermont, to help with my
            business knowledge.
          </p>
          <p className="mb-4">
            Soon after college, I self-taught myself all about the emerging
            internet and built my first website. I then moved into the Internet
            Marketing field and worked for high technology companies building
            websites and helped them sell their products online through paid
            search programs, email marketing, and search engine optimization. I
            worked for some great high technology companies such as Lycos – the
            internet search company (remember the Black Lab?) and Dragon
            Software (the voice-to-text software), a division of Nuance
            Communications – now owned by Microsoft.
          </p>
          <p>
            After twenty-five years of working in the Internet Marketing field,
            the desire to get back to my roots occupied my thoughts. After a
            considerable company layoff, I decided to take time off from the
            corporate world and strategized on my next career move and knew I
            wanted to work for myself and be outside versus being tethered to a
            desk in an unhealthy corporate environment.
          </p>
        </div>
      </div>
      <div className="quote-box mt-8 sm:mt-16 quote-background">
        <div className="container mx-auto text-lg sm:text-3xl leading-tight pt-1 quote py-6 when-build">
          When I built my first outdoor movie theater in my backyard, I knew
          other homeowners would love this as much as I do. Today, I am
          providing big-screen entertainment to homeowners and businesses and
          passionate about what I do. 
          {/* I’m looking forward to helping you reach */}
          {/* your dream of owning the best outdoor movie theater available on the */}
          {/* market. */}
        </div>
        <img src={signatureWhite} className="h-10 mt-3 mx-auto signature-white" />
        <img src={signatureBlack} className="h-10 mt-3 mx-auto signature-black" />
      </div>
      <div className="container mx-auto">
        <div className="sm:pt-16 sm:pt-8">
          <h2 className="sm:mb-4 text-xl sm:text-2xl font-bold product-title heading-outdoor">
            The Outdoor Cinema <span className="solution-orange">Solution</span>
          </h2>
          <p className="mb-4">
            Who doesn’t love a drive-in movie theater where you can be outside
            under the stars and moon and watch a great movie? We have all
            dreamed about having an outdoor movie theater set up in our backyard
            to entertain friends and family at some point in our lives. I had
            thought about building an outdoor movie setup for years and always
            struggled with figuring out an easy way, not knowing the best
            equipment to use, or finding any good resources to build one. It was
            somewhat overwhelming and confusing with over 1,000 different
            projectors on the market to choose from, all the various cinematic
            screens, and limited projector stands found online.
          </p>
          <p className="mb-4">
            I spent over two years testing different outdoor cinema equipment
            and fine-tuning my outdoor cinema solution. Last year, I
            developed a simple to use, impressive outdoor movie theater. When I
            first started testing different projectors and cinematic screens, my
            first challenge was hanging the screen, aligning it properly, and
            getting it square. I remember purchasing clothesline rope and
            hanging it from two trees in my backyard and didn’t like how it
            looked. Then I tried using adjustable tripod stands, where I found
            out the first gust of wind would topple over the stands and screen,
            abruptly stopping the movie experience. And a 150” screen was too
            heavy for the tripod stands, and the screen would sag. And there was
            no way I was going to tac the cinematic screen up against my home
            putting holes into the side of my house.
          </p>
          <p className="mb-4">
            Then I researched the inflatable air screen movie setups, and they
            looked too much like a carnival attraction – almost like an
            inflatable bounce house that your kids would use. These are a great
            solution for large venues. However, the air screens have about a
            30-45 minute setup, you need an air compressor, patience to blow
            them up slowly, and they’re expensive. You also have to worry about
            any neighborhood cats using it to sharpen their claws on and be
            careful not to puncture any holes in them.
          </p>
          <p>
            I wanted to create a weather-resistant frame that could stay up on
            my property for year-round use, make it easy to attach and remove
            the screen, be esthetically pleasing to the eye, and be able to move
            it any place on my lawn. After a year of designing and building
            various frame systems, I developed one that I knew homeowners would
            love. I created the frame from pressure-treated 4” x 4” wood posts,
            notched the frame similar to a post and beam structure, and added
            weather-resistant hardware so it would never rust. The final product
            is strong, durable, can handle any weather condition Mother Nature
            throws at it (except for tornados), and looks fantastic on your
            property.
          </p>
        </div>
        </div>
        <div className="no-padding container mx-auto">
        <div
          className="about-image w-full relative bg-cover bg-bottom mt-8 mobile mobile-tree"
          style={{ backgroundImage: `url(${frameMobile})` }}
        />
      </div>
      <div
        className="about-image w-full relative bg-cover bg-bottom mt-8 sm:mt-16 desktop"
        style={{ backgroundImage: `url(${frameAbout})` }}
      />
      <div className="container mx-auto">
          <div className="pt-8">
            <p className="mb-4">
              After developing a solid frame system, the next challenge was
              figuring out how to organize all of my cinema equipment such as the
              projector, DVD player, streaming media player, digital tuner,
              transmitter, speakers, and more. I remember using milk crates, then
              a couple of Home Depot 5 Gallon buckets, and was frustrated with how
              sloppy and unorganized everything looked. I spent weeks scouring the
              web to find a solution and found nothing but indoor cart stands you
              would use in business conference rooms, or the cheap flimsy tripod
              projector stands that only holds a projector. So I decided to go
              back to the drawing board, made a few designs for an outdoor
              projector stand, and started building various models to organize all
              the equipment.
            </p>
            <p className="mb-4">
              The final result was a beautiful cedar wood projector stand that
              neatly organized all of my equipment. The projector stand is
              lightweight, easy to carry, weather-resistant, and it has an
              adjustable projector shelf to get the proper viewing angle to reach
              the cinematic screen – the only one of its kind on the market. The
              cinema equipment stays on the stand and does not need to be removed
              - similar to an entertainment center inside your home. Store the
              projector stand with everything on it inside your home, and when you
              want to have a movie night, carry the stand outside, power it on,
              and start watching immediately. After the movie, you’ll need to take
              the projector stand back inside your home, as the cinema equipment
              is not waterproof.
            </p>
          </div>
        </div>
        <div className="no-padding container mx-auto">
        <div
          className="about-image w-full relative bg-cover bg-bottom mt-8 mobile standMobile"
          style={{ backgroundImage: `url(${standMobile})` }}
        />
      </div>
      <div
        className="about-image w-full relative bg-cover bg-bottom mt-8 sm:mt-16 desktop"
        style={{ backgroundImage: `url(${standAbout})` }}
      />
      <div className="container mx-auto thankyou">
        <div className="pt-8 sm:pt-16">
          <p className="mb-4">
            Thank you again for stopping by, and don’t hesitate to reach out
            with any questions you may have. I hope we get an opportunity to get
            to know each other and discuss the possibilities of building your
            dream backyard movie theater someday.
          </p>
          <p className="mb-4">My best,</p>
          <img src={signatureBlack} className="h-10 mb-16" />
        </div>
      </div>
    </Layout>
  )
}

export default About
