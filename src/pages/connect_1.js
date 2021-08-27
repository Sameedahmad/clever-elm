import React, { useRef, useState } from "react"
import { Link } from "gatsby"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../css/responsive.css"

import connectImage from "../images/todd-wireless-outdoor-cinema.png"

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: 44.046919, lng: -70.739925 }}
      defaultOptions={{
        disableDefaultUI: true,
        fullscreenControl: false,
        styles: [
          {
            elementType: "geometry",
            stylers: [
              {
                color: "#f5f5f5",
              },
            ],
          },
          {
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#616161",
              },
            ],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#f5f5f5",
              },
            ],
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#bdbdbd",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#eeeeee",
              },
            ],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
              {
                color: "#e5e5e5",
              },
            ],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9e9e9e",
              },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [
              {
                color: "#ffffff",
              },
            ],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#757575",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
              {
                color: "#dadada",
              },
            ],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#616161",
              },
            ],
          },
          {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9e9e9e",
              },
            ],
          },
          {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [
              {
                color: "#e5e5e5",
              },
            ],
          },
          {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [
              {
                color: "#eeeeee",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#c9c9c9",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#ff6600",
              },
            ],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9e9e9e",
              },
            ],
          },
        ],
      }}
    >
      <Marker position={{ lat: 44.046919, lng: -70.739925 }} />
    </GoogleMap>
  ))
)

function Connect() {
  const form = useRef(null)
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    setError("")
    const {
      firstName,
      lastName,
      email,
      phone,
      interested,
      aboutUs,
      message,
    } = form.current
    if (
      !firstName.value ||
      !lastName.value ||
      !email.value ||
      !interested.value ||
      !aboutUs.value
    )
      return setError("Please fill in all required fields")
    const formData = new FormData()
    formData.append("First Name", firstName.value)
    formData.append("Last Name", lastName.value)
    formData.append("Email", email.value)
    formData.append("Phone", phone.value)
    formData.append("I'm Interested In", interested.value)
    formData.append("Where Did You Hear About Us", aboutUs.value)
    formData.append("Message", message.value)
    const req = new XMLHttpRequest()
    req.open(
      "POST",
      "https://getform.io/f/f0d3e96f-9157-4357-a123-5f10cf924ec0"
    )
    req.send(formData)
    setSubmitted(true)
  }
  return (
    <Layout>
      <SEO
        title="Let's Connect"
        description="Call. Text. Email. Snail Mail. Take a moment to fill in the required fields and you will get a friendly response back within 24 hours or sooner. Looking forward to connecting."
      />
      <div className="gray-back">
        <div className="container mx-auto">
          <div className="md:px-8 change">
            <div className="flex flex-wrap items-center text-sm">
              <Link
                to="/"
                className="text-blue-600 sm:text-black cursor-pointer"
              >
                Home
              </Link>
              <span className="mx-2">&gt;</span>
              <span to="#">Connect</span>
            </div>
            <div className="md:hidden h-64 w-full full-bleed-mobile max-h-screen relative mt-6 mb-6">
              <img className="w-full h-full object-cover " src={connectImage} />
            </div>
            <div className="mt-12">
              <h1 className="text-orange-500 text-5xl leading-none relative heading let-connnect">
                Let&apos;s <span className="text-black">Connect</span>
              </h1>
              <h2 className="text-2xl mt-1 leading-tight news-subtitle">
                Call. Text. Email.
              </h2>
            </div>
            <div className="mt-4 flex">
              <div className="md:w-7/12">
                <div className="max-w-xl padding-toAdd">
                  <div className="flex items-center mb-4 font-thin">
                    <div className="w-16">
                      <img src="/phoneicon.png" className="w-10" />
                    </div>
                    <div>
                      <p>
                        Phone:{" "}
                        <a className="font-change" href="tel:20759529060">
                          207-595-2960
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4 font-thin">
                    <div className="w-16">
                      <img src="/emailicon.png" className="w-10" />
                    </div>
                    <div>
                      <p>
                        Email:{" "}
                        <a
                          className="font-change"
                          href="mailto:todd@wirelessoutdoorcinema.com"
                        >
                          todd@wirelessoutdoorcinema.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4 font-thin">
                    <div className="w-16">
                      <img src="/homeicon.png" className="w-10" />
                    </div>
                    <div>
                      <p className="font-change">
                        Wireless Outdoor Cinema Company
                        <br />
                        PO Box 752
                        <br />
                        Bridgton, Maine 04009
                      </p>
                    </div>
                  </div>
                  <h2 className="text-3xl mt-4 what-interested font-thin leading-tight news-subtitle">
                    What are you interested in learning more about?
                  </h2>
                  <p className="mt-4 what-interested">
                    Take a moment to fill in the required fields and you will
                    get a friendly response back within 24 hours or sooner.
                    Looking forward to connecting.
                  </p>
                  <form className="mt-6" onSubmit={handleSubmit} ref={form}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="sm:py-4">
                        <label for="firstName">
                          First name<span className="text-orange-600">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          className="standard-input"
                        />
                      </div>
                      <div className="sm:py-4">
                        <label for="lastName">
                          Last name<span className="text-orange-600">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          className="standard-input"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 pt-4 sm:pt-0">
                      <div className="sm:py-4">
                        <label for="email">
                          Email<span className="text-orange-600">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="standard-input"
                        />
                      </div>
                      <div className="sm:py-4">
                        <label for="phone">Phone</label>
                        <input
                          type="text"
                          name="phone"
                          className="standard-input"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 pt-4 sm:pt-0 gap-4">
                      <div className="sm:py-4">
                        <label for="interested">
                          I&apos;m interested in
                          <span className="text-orange-600">*</span>
                        </label>
                        <select name="interested" className="standard-input">
                          <option value="">Select</option>
                          <option value="96” Jedi Bobcat Wireless Outdoor Cinema">
                            96” Jedi Bobcat Wireless Outdoor Cinema
                          </option>
                          <option value="120” Bella Bear Wireless Outdoor Cinema">
                            120” Bella Bear Wireless Outdoor Cinema
                          </option>
                          <option value="150” Big Moose Wireless Outdoor Cinema">
                            150” Big Moose Wireless Outdoor Cinema
                          </option>
                          <option value="Media Relations">
                            Media Relations
                          </option>
                          <option value="Cinema Installers">
                            Cinema Installers
                          </option>
                          <option value="Partnerships">Partnerships</option>
                          <option value="Cinema Support">Cinema Support</option>
                          <option value="General Question">
                            General Question
                          </option>
                        </select>
                      </div>
                      <div className="sm:py-4">
                        <label for="aboutUs">
                          Where did you hear about us
                          <span className="text-orange-600">*</span>
                        </label>
                        <select name="aboutUs" className="standard-input">
                          <option value="">Select</option>
                          <option value="Frank 107.5 FM">Frank 107.5 FM</option>
                          <option value="Bridgton Newspaper">
                            Bridgton Newspaper
                          </option>
                          <option value="Conway Daily Sun Newspaper">
                            Conway Daily Sun Newspaper
                          </option>
                          <option value="Portland Press Herald">
                            Portland Press Herald
                          </option>
                          <option value="Google Search">Google Search</option>
                          <option value="Bing Search">Bing Search</option>
                          <option value="Yahoo Search">Yahoo Search</option>
                          <option value="The big moose told me">
                            The Big Moose told me
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="py-4">
                      <label for="message">Message</label>
                      <textarea
                        name="message"
                        className="standard-input resize-none"
                      ></textarea>
                    </div>
                    <div className="py-4">
                      <input
                        type="submit"
                        value="Submit"
                        className="long-btn outline-none"
                      />
                      {error && (
                        <p className="mt-4 text-sm text-red-600">{error}</p>
                      )}
                      {submitted && (
                        <p className="mt-4 text-sm text-green-600">
                          Your submission has been sent. We will get back to you
                          as soon as possible.
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
              <div className="hidden md:block flex-1 pl-6 xl:pl-0">
                <div className="w-full shadow-xl rounded-lg">
                  <img
                    src="todd.jpg"
                    className="w-full shadow-xl rounded-lg todd-image"
                  />
                </div>
                <div className="mt-8 text-center relative">
                  <span className="left-0 top-0 absolute text-6xl text-orange-500 leading-none">
                    &ldquo;
                  </span>
                  <p className="text-2xl xl:text-3xl leading-tight px-8 xl:px-6">
                    My wireless outdoor cinemas are designed to be used
                    year-round and know you will love this experience as much as
                    I do.
                  </p>
                  <span className="absolute bottom-0 leading-none right-0 text-6xl text-orange-500 transform translate-y-8">
                    &rdquo;
                  </span>
                </div>
                <img src="/signature.png" className="h-10 mt-3 mx-auto" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <MyMapComponent
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDKtd3gOKI5PKRIuKxuBLt7lIEepZKoP6s&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Connect
