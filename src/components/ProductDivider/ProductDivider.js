import React from "react"

import { Container, Text, ColoredText } from "./ProductDivider.styles"

const ProductDivider = ({ coloredText, text, color }) => {
  return (
    <Container>
      <Text>
        <ColoredText color={color}>{coloredText}</ColoredText>
        {text}
      </Text>
    </Container>
  )
}

export default ProductDivider
