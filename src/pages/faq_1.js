import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import faqImage from "../images/faq-for-wireless-outdoor-cinema.jpg"

const questions = [
  {
    question: "What areas do you serve?",
    answer:
      "Maine, New Hampshire, Vermont, and Massachusetts. Online packages will be available in December 2021 to North America.",
  },
  {
    question: "Does the Wireless Outdoor Cinema Company have insurance?",
    answer: "Yes \u2013 a one million dollar liability insurance policy.",
  },
  {
    question: "How easy are the cinemas to install and take down?",
    answer:
      "The movie screen frame stays up year-round and you only need to attach the cinematic screen to the frame when you want to watch a movie. The projector and other electronic components stay neatly organized on a custom projector stand and you simply carry the stand with everything on it inside at the end of the night. To setup and start watching movies takes less time than it does to pop a bag of popcorn in the microwave.",
  },
  {
    question: "Is the cinema package waterproof?",
    answer:
      "Only the pressure-treated frame is waterproof and weather-resistant. The screen, projector, off-grid battery, speaker and stand should be taken back inside when you\u0027re done watching.",
  },
  {
    question: "Can I watch movies during the day?",
    answer: "No. You can start watching around dusk.",
  },
  {
    question: "What time can I start watching movies outside?",
    answer:
      "You can start watching movies at dusk or 30 minutes before it gets dark out. The projector performs best when it\u0027s dark outside.",
  },
  {
    question: "How do I use my Wireless Outdoor Cinema in the colder months?",
    answer:
      "Compliment your outdoor cinema package with an old fashion campfire, or get a propane style outdoor campfire setup, or a propane heat lamp to stay warm while watching.",
  },
  {
    question: "Do you rent your Wireless Outdoor Movie Cinemas?",
    answer:
      "Yes \u2013 with a within a 30 mile radius of zip code 04009. Rental packages start at $399 per night.",
  },
  {
    question: "I'm a business, do I need a movie license to play movies?",
    answer:
      "Yes. Annual movie licensing through the Motion Picture Licensing Corporation starts at $670 for an outdoor seating space under 1500 square feet. Get your application at: https://www.mplc.org/ or call them at (800) 462-8855.",
  },
]

function FAQQuestion({ question, answer }) {
  const [open, setOpen] = useState(false)
  let arrowClassName =
    "w-4 transition-transform transform duration-300 translate-y-1"
  if (!open) arrowClassName += " -rotate-90"
  else arrowClassName += " rotate-0"
  let answerClassName = "transform duration-300 overflow-hidden"
  if (open) answerClassName += " open-answer pb-6"
  else answerClassName += " closed-answer closed-ps pb-0"
  return (
    <div className="border-t sm:border border-gray-400 sm:bg-white flex flex-row-reverse sm:flex-row sm:mb-3 px-6 pt-6 rounded ">
      <div className="w-8 cursor-pointer" onClick={() => setOpen(!open)}>
        <img src="/orangearrow.png" className={arrowClassName} />
      </div>
      <div className="flex-1">
        <p
          className="sm:font-bold pb-6 cursor-pointer question text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {question}
        </p>
        <p className={answerClassName}>{answer}</p>
      </div>
    </div>
  )
}

function FAQ() {
  return (
    <Layout>
      <SEO title="FAQ" description="Search the knowledge base." />
      <div className="gray-back pb-8">
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
              <span to="#">FAQ</span>
            </div>
            <div
              className="about-image full-bleed-mobile w-full relative bg-cover bg-bottom mobile bg-center first-image mb-6"
              style={{ backgroundImage: `url(${faqImage})` }}
            />
            <div className="mt-12 text-center sm:text-left">
              <h1 className="text-black sm:text-orange-500 text-3xl sm:text-5xl leading-none font-bold uppercase relative heading">
                FAQ
              </h1>
              <h2 className="news-subtitle sm:text-3xl sm:mt-3 font-thin leading-tight">
                Search the knowledge base.
              </h2>
            </div>
          </div>
        </div>
        <div className="sm:container mx-auto">
          <div className="md:px-8 py-6">
            <div className="sm:mt-8">
              <div className="text-center hidden sm:block">
                <h1 className="text-3xl text-gray-800 font-bold">FAQS</h1>
                <p className="text-lg">
                  If you can't find what you&apos;re looking for, try{" "}
                  <Link to="/connect" className="link">
                    here
                  </Link>
                  .
                </p>
              </div>
              <div className="sm:mt-8 mx-auto w-full max-w-screen-lg">
                {questions.map((q, index) => (
                  <FAQQuestion
                    key={`q-${index}`}
                    question={q.question}
                    answer={q.answer}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default FAQ
