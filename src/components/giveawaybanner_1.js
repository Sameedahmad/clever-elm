import React from "react"
import { Link } from "gatsby"

function GiveawayBanner() {
  return (
    <div className="hidden lg:block py-3 bg-purple-600 text-white">
      <div className="container mx-auto flex items-center px-6 xl:px-2">
        <h3 className="text-2xl font-bold uppercase">
          120" Bella Bear Wireless Outdoor Cinema{" "}
          <span className="pink-color">Giveaway</span>
        </h3>
        <Link
          to="/bella-bear-contest"
          className="pink-button ml-6 bg-transparent border border-white uppercase text-white cursor-pointer font-bold px-12 py-2 transition-colors duration-300 rounded-sm"
        >
          Register to Win
        </Link>
      </div>
    </div>
  )
}

export default GiveawayBanner
