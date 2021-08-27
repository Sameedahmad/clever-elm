import React, { useState } from "react"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

import {
  Container,
  MainPicture,
  PictureSelector,
  RightIcon,
  LeftIcon,
} from "./Gallery1.styles"

const ICON_SIZE = 65

const Gallery = ({ picturesArray1, color }) => {
  const [activePicture, setActivePicture] = useState(0);

  return (
    <Container>
      <MainPicture>
        <img
          src={picturesArray1[activePicture].src}
          alt={picturesArray1[activePicture].alt}
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
                Math.min(picturesArray1.length - 1, activePicture + 1)
              )
            }
          />
        </RightIcon>
      </MainPicture>
      <PictureSelector>
        {picturesArray1.map((picture, i)=> (
          <div key={i} onClick={() => setActivePicture(i)}>
            <img src={picture.src} alt={picture.alt} />
          </div>
        ))}
      </PictureSelector>
    </Container>
  )
}

export default Gallery
