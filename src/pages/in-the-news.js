import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import '../css/responsive.css'

import pressImage from '../images/press-release.png'

function InTheNews() {
  return (
    <Layout>
      <SEO className="change"
        title="In the News"
        description="Stay up to date or just take a nap"
      />
      <div className="gray-back pb-20">
        <div className="container mx-auto">
          <div className="md:px-8">
            <div className="flex flex-wrap items-center text-sm change">
              <Link
                to="/"
                className="text-blue-600 sm:text-black cursor-pointer"
              >
                Home
              </Link>
              <span className="mx-2">&gt;</span>
              <span to="#">In the News</span>
            </div>
            <div
              className="about-image full-bleed-mobile w-full relative bg-cover bg-bottom mobile bg-center first-image mb-6"
              style={{ backgroundImage: `url(${pressImage})` }}
            />
            <div className="mt-12 text-center md:text-left">
              <h1 className="text-orange-500 text-3xl md:text-5xl leading-none font-bold relative heading">
              <span className="text-black">In the </span>News
              </h1>
              <h2 className="hidden md:inline-block text-3xl mt-3 font-thin leading-tight">
                Stay up to date or just take a nap
              </h2>
              <h2 className="inline-block md:hidden text-2xl font-thin leading-tight news-subtitle mt-1">
                The latest
              </h2>
            </div>
            <div className="mt-8 hidden md:flex">
              <div className="w-7/12 pr-12 block">
                <img src="/inthenews.png" className="w-full" />
              </div>
              <div className="flex-1 md:pl-12 md:border-l border-gray-400">
                <h1 className="text-5xl leading-none font-bold">Recent News</h1>
                <div className="mt-6">
                  {/* <Link
                    to="/september-02-eriks-church-press-release"
                    className="flex items-stretch py-6 border-b border-gray-400"
                  >
                    <div className="w-24 h-full">
                      <img
                        src="/n1.png"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="ml-6 flex flex-col justify-between text-lg">
                      <h4 className="text-gray-600">Press Release</h4>
                      <h3 className="text-gray-800 font-bold">
                        Wireless Outdoor Cinema Donation ...
                      </h3>
                      <h4 className="text-gray-600 font-thin">
                        September 2, 2020
                      </h4>
                    </div>
                  </Link> */}
                  <Link
                    to="/june-25-bridgton-news-article"
                    className="flex items-stretch py-6 border-b border-gray-400"
                  >
                    <div className="w-24 h-full">
                      <img
                        src="/n2.png"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="ml-6 flex flex-col justify-between text-lg">
                      <h4 className="text-gray-600">Bridgton News</h4>
                      <h3 className="text-gray-800 font-bold">
                        Bring Movies and Gaming Outdoors ...
                      </h3>
                      <h4 className="text-gray-600 font-thin">June 25, 2020</h4>
                    </div>
                  </Link>
                  <Link
                    className="flex items-stretch py-6"
                    to="/june-08-press-release"
                  >
                    <div className="w-24 h-full">
                      <img
                        src="/n3.png"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="ml-6 flex flex-col justify-between text-lg">
                      <h4 className="text-gray-600">Press Release</h4>
                      <h3 className="text-gray-800 font-bold">
                        Introducing the Wireless Outdoor Cinema ...
                      </h3>
                      <h4 className="text-gray-600 font-thin">June 8, 2020</h4>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col items-center md:hidden">
              <Link to="/june-25-bridgton-news-article" className="mb-8">
                <img src="bridm.png" className="max-w-full" />
              </Link>
              <Link to="/june-08-press-release">
                <img src="jun8m.png" className="max-w-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default InTheNews
