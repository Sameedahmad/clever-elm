import React, { useState } from "react"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

import {
  Container,
  MainPicture,
  PictureSelector,
  RightIcon,
  LeftIcon,
} from "./Gallery.styles"

const ICON_SIZE = 65

const Gallery = ({ picturesArray, color, isFullBleed, first }) => {
  const [activePicture, setActivePicture] = useState(0);

  return (
    <Container>
      <MainPicture isFullBleed={isFullBleed}>
        <img
          src={picturesArray[activePicture].src}
          alt={picturesArray[activePicture].alt}
        />
        <LeftIcon>
          <AiOutlineLeft
            color={color}
            size={ICON_SIZE}
            onClick={() => setActivePicture(Math.max(0, activePicture - 1))}
          />
        </LeftIcon>
        <RightIcon>
          <AiOutlineRight
            color={color}
            size={ICON_SIZE}
            onClick={() =>
              setActivePicture(
                Math.min(picturesArray.length - 1, activePicture + 1)
              )
            }
          />
        </RightIcon>
      </MainPicture>
      <PictureSelector isFirst={first}>
        {picturesArray.map((picture, i)=> (
          <div key={i} onClick={() => setActivePicture(i)}>
            <img src={picture.src} alt={picture.alt} />
          </div>
        ))}
      </PictureSelector>
    </Container>
  )
}

export default Gallery
