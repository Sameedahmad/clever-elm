import React from "react"
import { Link } from "gatsby"

function Cookies({ setCookies }) {
  return (
    <div className="fixed bottom-0 py-3 cookie-back text-white w-full">
      <div className="container mx-auto flex flex-col sm:flex-row flex-wrap items-center px-2">
        <h3 className="text-lg font-thin">
          This website uses cookies to ensure you get the best experience on our
          website.{" "}
          <Link to="/privacy" className="cursor-pointer text-orange-500">
            Learn More
          </Link>
        </h3>
        <span
          onClick={setCookies}
          className="bg-orange-500 uppercase text-white cursor-pointer font-bold px-6 py-2 transition-colors duration-300 rounded-sm ml-3 hover:bg-orange-600 mt-1 sm:mt-0"
        >
          I Accept
        </span>
      </div>
    </div>
  )
}

export default Cookies
