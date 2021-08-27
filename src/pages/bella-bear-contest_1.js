import React, { useRef } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function BellaBearContest() {
  const form = useRef(null)
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <Layout>
      <SEO
        title="Giveaway Contest"
        description={`Register to Win 120" Bella Bear Cinema Package`}
      />
      <div className="gray-back hidden md:block">
        <div className="container mx-auto">
          <div className="px-8 py-6">
            <div className="flex items-center text-sm font-">
              <Link
                to="/"
                className="text-blue-600 sm:text-black cursor-pointer"
              >
                Home
              </Link>
              <span className="mx-2">&gt;</span>
              <span to="#">Giveaway Contest</span>
            </div>
            <div className="mt-12 flex">
              <div className="w-7/12">
                <div className="max-w-xl">
                  <h1 className="text-purple-500 text-5xl leading-none font-bold uppercase relative">
                    Register to Win
                    <br />
                    120" Bella Bear
                    <br />
                    <span className="text-black">Cinema Package</span>
                  </h1>
                  <h2 className="text-3xl mt-3 mb-6 font-thin leading-tight">
                    Register to win the ultimate Backyard Drive-in. A complete
                    wireless outdoor cinema package to enjoy year-round with
                    family and friends.
                  </h2>
                  <h2 className="text-3xl mt-3 mb-6 font-thin leading-tight">
                    Drawing begins Sept 3 and the winner will be drawn on Sept
                    14. Fill out the form below to register your chance to win.
                    Retails for $2,499
                  </h2>
                  <h2 className="text-3xl mt-3 font-bold uppercase leading-tight">
                    JUST TAKE A MOMENT TO FILL IN THE REQUIRES FIELDS.
                  </h2>
                  <p>
                    Take a moment to fill in the required fields and you will
                    get a friendly response back within 24 hours or sooner.
                    Looking forward to connecting.
                  </p>
                  <form className="mt-6" onSubmit={handleSubmit} ref={form}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="py-4">
                        <label for="firstName">
                          First Name<span className="text-orange-600">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          className="standard-input"
                        />
                      </div>
                      <div className="py-4">
                        <label for="lastName">
                          Last Name<span className="text-orange-600">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          className="standard-input"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="py-4">
                        <label for="email">
                          Email<span className="text-orange-600">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="standard-input"
                        />
                      </div>
                      <div className="py-4">
                        <label for="phone">Phone</label>
                        <input
                          type="text"
                          name="phone"
                          className="standard-input"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="py-4">
                        <label for="interested">
                          I&apos;m Interested In
                          <span className="text-orange-600">*</span>
                        </label>
                        <select name="interested" className="standard-input">
                          <option value="">Select</option>
                          <option value="GIVEAWAY CONTEST: 120” Bella Bear Cinema">
                            GIVEAWAY CONTEST: 120" Bella Bear Cinema
                          </option>
                          <option value="72” Jedi Bobcat Wireless Outdoor Cinema">
                            72” Jedi Bobcat Wireless Outdoor Cinema
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
                      <div className="py-4">
                        <label for="aboutUs">
                          Where Did You Hear About Us
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
                            The big moose told me
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
                        className="long-btn"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex-1">
                <div className="w-full">
                  <img src="/bearmain.png" className="w-full" />
                </div>
              </div>
            </div>

            <div className="mt-16 pb-16 flex">
              <div className="flex-1">
                <h2 className="text-3xl uppercase font-thin">
                  Cinema Package Includes
                </h2>
                <div className="mt-4">
                  <div className="mb-2 flex items-center">
                    <img src="/checkmark.png" className="mr-3 h-6" />
                    Custom-Built and Hand-Sawn Notched 4” x 4” Pressure-Treated
                    Frame
                  </div>
                  <div className="mb-2 flex items-center">
                    <img src="/checkmark.png" className="mr-3 h-6" />
                    Stainless Steel and Galvanized Weather Resistant Hardware
                  </div>
                  <div className="mb-2 flex items-center">
                    <img src="/checkmark.png" className="mr-3 h-6" />
                    HD Wi-Fi 1080p Outdoor Projector
                  </div>
                  <div className="mb-2 flex items-center">
                    <img src="/checkmark.png" className="mr-3 h-6" />
                    Bluetooth & Wireless Mini Soundbar Speaker - Superb 3D
                    Surround Sound
                  </div>
                  <div className="mb-2 flex items-center">
                    <img src="/checkmark.png" className="mr-3 h-6" />
                    Off-Grid Chargeable Battery Station (Up to 8 hours of use
                    before recharging)
                  </div>
                  <div className="mb-2 flex items-center">
                    <img src="/checkmark.png" className="mr-3 h-6" />
                    72” Diagonal Cinematic Gaming Creaseless Screen
                  </div>
                  <div className="mb-2 flex items-center">
                    <img src="/checkmark.png" className="mr-3 h-6" />
                    Custom-Built White Cedar Projector Organizer Stand for
                    Equipment
                  </div>
                  <div className="mb-2 flex items-center">
                    <img src="/checkmark.png" className="mr-3 h-6" />
                    Professional Installation making it simple to power on and
                    start gaming
                  </div>
                </div>
              </div>
              <div className="flex-1 pl-12 pt-12">
                <div className="w-10/12 grid grid-cols-2 gap-8">
                  <div className="w-full h-36 rounded cursor-pointer">
                    <img
                      src="/projector.png"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="w-full h-36 rounded cursor-pointer">
                    <img
                      src="/speaker.png"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="w-full h-36 rounded cursor-pointer">
                    <img
                      src="/battery.png"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="w-full h-36 rounded cursor-pointer">
                    <img
                      src="/frame.png"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-8 border-t border-gray-400">
              <div className="flex-1">
                <h2 className="text-3xl uppercase font-thin">
                  How the wireless cinema works
                </h2>
                <div className="mt-4">
                  <div className="mb-2 flex items-start">
                    <img src="/checkmark.png" className="mr-3 h-6" />
                    After the movie frame is professionally installed on your
                    property, the frame stays up year-round and you only need to
                    remove the cinematic gaming screen at the end of the
                    evening, which goes into a convenien carrying bag. The
                    grommet hole cinematic screen takes less than a minute to
                    attach to the frame.
                  </div>
                  <div className="mb-2 flex items-start">
                    <img src="/checkmark.png" className="mr-3 h-6" />
                    The HD Wi-fi Projector, Battery Station, and Soundbar
                    Speaker stay organized and connected on a custom-built white
                    cedar projector stand where you never have to break it down.
                    Just pick up the stand at the end of the evening and take
                    everything inside your home to protect against rain.
                    Projector, battery, and speaker are not waterproof. There
                    will be a separate shelf for you to place your gaming
                    console on and will easily connect to the projector.
                  </div>
                  <div className="mb-2 flex items-start">
                    <img src="/checkmark.png" className="mr-3 h-6" />
                    The off-grid battery station makes your gaming experience
                    wireless without the need of running extensions cord out to
                    the projector and equipment. You will get up to 8 hours of
                    use with the battery and will need to be recharged before
                    your next use.
                  </div>
                  <div className="mb-2 flex items-start">
                    <img src="/checkmark.png" className="mr-3 h-6" />
                    To carry out the custom projector stand outside, attach the
                    cinematic screen to the frame, and start gaming takes less
                    time than it does to pop a bag of popcorn in the microwave.
                    No more lengthy setups and breakdowns with bulky and flimsy
                    inflatable or tripod screens.
                  </div>
                </div>
              </div>
            </div>
            <div className="py-8 border-t border-gray-400">
              <div className="flex-1">
                <h2 className="text-3xl uppercase font-thin">
                  Various Uses And Connections
                </h2>
                <div className="mt-4">
                  <div className="mb-2 flex items-start">
                    <img src="/checkmark.png" className="mr-3 h-6" />
                    Not only is the Jedi Bobcat a superior outdoor gaming
                    solution, you can also watch movies, sports, concerts, and
                    stream your favorite shows through the HD Wi-Fi Projector.
                  </div>
                  <div className="mb-2 flex items-start">
                    <img src="/checkmark.png" className="mr-3 h-6" />
                    Easily connect your DVD Player, Laptop, Tablet, Smartphone,
                    Video Recorders and more to the multiple ports on the HD
                    Wi-Fi projector and watch your favorite entertainment.
                  </div>
                  <div className="mb-2 flex items-start">
                    <img src="/checkmark.png" className="mr-3 h-6" />
                    Plugin your Roku®, Fire TV Stick®, or Google Chromecast®
                    into the USB port in the HD Wi-Fi Projector and stream and
                    chill with friends, family and nature all night under the
                    stars and moon.
                  </div>
                  <div className="mb-2 flex items-start">
                    <img src="/checkmark.png" className="mr-3 h-6" />
                    Easily connect your DVD Player, Laptop, Tablet, Smartphone,
                    Video Recorders and more to the multiple ports on the HD
                    Wi-Fi projector and watch your favorite entertainment.
                  </div>
                </div>
              </div>
            </div>
            <div className="py-8 border-t border-gray-400">
              <div className="flex-1">
                <h2 className="text-3xl uppercase font-thin">Specifications</h2>
                <div className="grid gap-2 grid-cols-2 mt-4">
                  <div>
                    <div className="mb-4">
                      <h3 className="text-2xl uppercase font-thin mb-2">
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
                      <h3 className="text-2xl uppercase font-thin mb-2">
                        Cinematic Screen
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
                      <h3 className="text-2xl uppercase font-thin mb-2">
                        HD Wi-Fi Projector
                      </h3>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Bluetooth Capable: Yes
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
                        Item Weight: 2.1 Lbs
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Warranty: 2-Year Limited from Manufacturer
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-4">
                      <h3 className="text-2xl uppercase font-thin mb-2">
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
                      <h3 className="text-2xl uppercase font-thin mb-2">
                        Bluetooth And Wireless Soundbar Speaker
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
                      <h3 className="text-2xl uppercase font-thin mb-2">
                        Projector Stand
                      </h3>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Projector Stand: White Cedar
                      </div>
                      <div className="mb-2 flex items-start">
                        <img src="/checkmark.png" className="mr-3 h-6" />
                        Stand Dimensions: 4“ Width x 24” High x 12” Depth
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
              </div>
            </div>
            <div className="pb-8 text-sm">
              Star Wars Jedi Fallen Order is a registered trademark of
              Electronic Arts. PlayStation is a registered trademark of Sony.
              Xbox One is a registered trademark of Microsoft. Wii is a
              registered trademark of Nintendo. Roku is a registered trademark
              of Roku. Fire TV Stick is a registered trademark of Amazon.
              Chromecast is a registered trademark of Google.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BellaBearContest
