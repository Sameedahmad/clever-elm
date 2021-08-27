import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import sitemap from '../images/sitemap.png'

function Sitemap() {
  return (
    <Layout>
      <SEO title="Sitemap" />
      <div className="gray-back pb-24">
        <div className="container mx-auto">
          <div className="md:px-8 sm:py-6 change">
            <div className="flex flex-wrap items-center text-sm">
              <Link
                to="/"
                className="text-blue-600 sm:text-black cursor-pointer"
              >
                Home
              </Link>
              <span className="mx-2">&gt;</span>
              <span to="#">Sitemap</span>
            </div>
            <div className="md:hidden h-64 w-full full-bleed-mobile max-h-screen relative mt-6 mb-6">
              <img className="w-full h-full object-cover " src={sitemap} />
            </div>
            <div className="mt-12">
              <h1 className="heading text-center sm:text-left text-black sm:text-orange-500 text-4xl sm:text-5xl  leading-none font-bold heading relative">
                Site <span className="text-orange-500 sm:text-black">Map</span>
              </h1>
            </div>
            <div className="sm:mt-8">
              <div className="text-center sm:font-bold text-base sm:text-2xl mt-1 sm:mt-0 news-subtitle">
                <h3>Search Engines Crawl Away</h3>
              </div>
              <div className="mt-6">
                <div className="hidden sm:block font-bold text-2xl">
                  <h3>Pages</h3>
                </div>
                <div className="flex flex-col mt-4">
                  <Link to="/" className="link mb-2">
                    Home
                  </Link>
                  <Link to="/72-jedi-bobcat-cinema" className="link mb-2">
                    96" Jedi Bobcat Wireless Outdoor Cinema
                  </Link>
                  <Link to="/120-bella-bear-cinema" className="link mb-2">
                    120" Bella Bear Wireless Outdoor Cinema
                  </Link>
                  <Link to="/150-big-moose-cinema" className="link mb-2">
                    150" Big Moose Wireless Outdoor Cinema
                  </Link>
                  <Link to="/accessory" className="link mb-2">
                    Accessory
                  </Link>
                  <Link to="/in-the-news" className="link mb-2">
                    In the News
                  </Link>
                  <Link to="/june-08-press-release" className="link mb-2">
                    > June 08 Press Release
                  </Link>
                  <Link to="/june-25-bridgton-news-article" className="link mb-2">
                    > June 25 Bridgton News Article
                  </Link>
                  <Link to="/faq" className="link mb-2">
                    FAQ
                  </Link>
                  <Link to="/connect" className="link mb-2">
                    Connect
                  </Link>
                  <Link to="/sitemap" className="link mb-2">
                    Sitemap
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Sitemap
