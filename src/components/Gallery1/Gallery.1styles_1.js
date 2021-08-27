import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const MainPicture = styled.div`
  margin-bottom: 25px;
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  align-items: center;
`

export const PictureSelector = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-height: 100%;

  div {
    border: 1px solid #b1b1af;
    flex: 1;
    margin-right: 25px;
    cursor: pointer;
    img {
      max-height: 98px;
    }

    &:last-child {
      margin: 0;
    }
  }

  @media screen and (max-width: 767px) {
    div {
      margin-right: 5px;
    }
  }
`

export const ArrowIcon = styled.div`
  position: absolute;
  cursor: pointer;
`

export const RightIcon = styled(ArrowIcon)`
  right: 2%;
`

export const LeftIcon = styled(ArrowIcon)`
  left: 2%;
`



export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const MainPicture1 = styled.div`
  margin-bottom: 25px;
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  align-items: center;
`

export const PictureSelector1 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-height: 100%;

  div {
    border: 1px solid #b1b1af;
    flex: 1;
    margin-right: 25px;
    cursor: pointer;
    img {
      max-height: 98px;
    }

    &:last-child {
      margin: 0;
    }
  }

  @media screen and (max-width: 767px) {
    div {
      margin-right: 5px;
    }
  }
`

export const ArrowIcon1 = styled.div`
  position: absolute;
  cursor: pointer;
`

export const RightIcon1 = styled(ArrowIcon)`
  right: 2%;
`

export const LeftIcon1 = styled(ArrowIcon)`
  left: 2%;
`
