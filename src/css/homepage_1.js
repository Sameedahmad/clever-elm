import styled from "styled-components"

export const DesktopContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

export const Gray = styled.div`
  background-color: #f5f3f3;
`

export const Orange = styled.div`
  background-color: #ff6600;
`

export const Introduction = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  position: relative;
  padding-left: 1rem;

  h2 {
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1;
    color: #282828;
    margin-bottom: 1.5rem;
  }

  .text {
    color: #0c0c0c;
    line-height: 1.3;
    text-align: justify;
    word-spacing: -2px;
    font-size: 1.1rem;

    p {
      margin-bottom: 1rem;
    }
    a {
      text-decoration: underline;
    }
  }
`

export const SectionContainer = styled.div`
  padding-left: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  div {
    display: flex;
    flex-direction: column;
    justify-self: end;
  }
  h3 {
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1;
    color: #282828;
  }
  .text {
    margin-top: 1.5rem;
    color: #0c0c0c;
    line-height: 1.3;
    text-align: justify;
    word-spacing: -2px;
    font-size: 1.1rem;

    .link {
      text-decoration: underline;
    }
  }
  button {
    color: white;
    text-transform: uppercase;
    border-radius: 5px;
    margin-top: 1.5rem;
    font-size: 22px;
    height: auto;
    width: 250px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const JediContainer = styled(SectionContainer)`
  button {
    background-color: #ff6600;
    :hover {
      background-color: rgba(204, 82, 0, 1);
    }
  }
`

export const BearContainer = styled(SectionContainer)`
  img {
    margin: 0;
    margin-left: 10%;
    justify-self: end;
    position: relative;
    right: -83px;
  }
  button {
    background-color: #8036f7;
    :hover {
      background-color: rgba(92, 9, 226, 1);
    }
  }
`

export const MooseContainer = styled(SectionContainer)`
  .brown {
    color: #843a05;
  }
  button {
    background-color: #843a05;
    :hover {
      background-color: rgba(89, 48, 19, 1);
    }
  }
`

export const IncludeContainer = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 1rem;
  h3 {
    display: flex;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1;
    color: #282828;
  }
  .text {
    margin: 1.5rem 0;
    color: #282828;
    text-align: justify;
    word-spacing: -2px;
    font-size: 1.1rem;
  }
  .galleryInclude {
    display: flex;
    justify-content: center;
    img {
      margin: 2px;
      width: 25%;
      heigt: auto;
    }
  }
`

export const QuoteContainer = styled.div`
  padding: calc(1.5rem + 7px) 1rem;
  .quote {
    color: #fff;
    font-size: 1.875rem;
    span {
      font-size: 4rem;
      line-height: 0;
      position: relative;
      top: 16px;

      &.two {
        top: 21px;
      }
    }
  }
  .signature {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #282828;
    margin-top: 1.5rem;
    img {
      height: 35px;
      width: auto;
    }
    .slash {
      margin: 0 10px;
    }
    .owner {
      font-size: 1.675rem;
    }
  }
`

export const QuoteMobile = styled.div`
  background-color: #ff6600;
  .signature {
    img {
      height: 40px;
      margin: auto;
    }
  }
`
