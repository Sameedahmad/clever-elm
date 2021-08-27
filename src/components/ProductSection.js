import React, { useState } from "react"

function ProductSection({ title, content }) {
  const [open, setOpen] = useState(false)
  let arrowClassName = "w-4 transition-transform transform duration-300"
  if (!open) arrowClassName += " -rotate-90"
  else arrowClassName += " rotate-0"
  let answerClassName = "transform duration-300 overflow-hidden"
  if (open) answerClassName += " open-ps"
  else answerClassName += " closed-ps pb-0"
  return (
    <div className="py-4 px-4 md:mb-0 md:px-0 md:py-8 border md:border-t md:border-b md:border-l-0 md:border-b-0 md:border-r-0 border-gray-400 rounded md:rounded-none text-left">
      <div className="flex-1">
        <div
          className="flex justify-between md:justify-start items-center"
          onClick={() => setOpen(!open)}
        >
          <h2 className="text-xl md:text-3xl uppercase font-thin flex-1 sm:flex-initial">
            {title}
          </h2>
          <img
            src={open ? "/minus.png" : "/plus.png"}
            className="w-4 md:w-auto md:h-5 cursor-pointer sm:pl-4 ml-4 sm:ml-0"
          />
        </div>
        <div className={answerClassName}>{content}</div>
      </div>
    </div>
  )
}

export default ProductSection
