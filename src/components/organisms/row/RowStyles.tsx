import styled from "styled-components"
import { device } from "../../particles/MediaQueries"

import ButtonMixin from "../../atoms/button/ButtonMixin"

const RowComponent = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 48px 0;

  @media ${device.sm} {
    margin: 64px 0;
  }

  @media ${device.md} {
    flex-direction: row;
    margin: 128px 0;
  }

  @media ${device.xl} {
    margin: 160px 0;
  }

  h1 {
    margin-top: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @media ${device.md} {
      margin-top: 0;
    }

    p + & {
      margin-top: 24px;
    }
  }

  img,
  video {
    display: block;
    margin-bottom: 24px;
    margin-top: 32px;
    height: 200px;
    width: 100%;

    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    object-fit: cover;

    @media ${device.sm} {
      height: 300px;
    }

    @media ${device.md} {
      height: 400px;
      margin-bottom: 0;
      margin-top: 0;
    }
  }

  p {
    max-width: 500px;

    @media ${device.md} {
      max-width: 100%;
    }

    & > a {
      margin: 0;
    }
  }

  p:last-of-type {
    margin-bottom: 0;
  }

  .row__media--gatsby > div {
    padding-bottom: 56.25% !important; /* your aspect ratio */
  }

  .row__column {
    width: 100%;
  }

  .row__content {
    a {
      color: inherit;
      text-decoration: none;
    }

    p:last-of-type {
      a {
        ${ButtonMixin}

        margin: 24px 0 16px;

        background-color: ${props => props.theme.primary};
        color: ${props => props.theme.white};
      }
    }
  }

  @media ${device.md} {
    flex-direction: ${props => props.align === "right" && "row-reverse"};
    opacity: 0;
    transform: ${props =>
      props.align !== "right" ? "translateX(-50px)" : "translateX(50px)"};
    transition: 0.6s all ease;

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      opacity: 1;
      transform: translateX(0px);
    }

    &.row--right {
      .row__column {
        + .row__column {
          margin-left: 0;
          margin-right: auto;
        }
      }
    }

    &.row--show {
      opacity: 1;
      transform: translateX(0px);

      .row__media {
        img,
        video {
          opacity: 1;
          transform: translateX(0%);
        }
      }
    }

    .row__column {
      max-width: 50%;

      + .row__column {
        margin-left: ${props => (props.align === "right" ? 0 : "auto")};
        margin-right: ${props => props.align === "right" && "auto"};
        max-width: 40%;
      }
    }

    .row__media {
      overflow: hidden;

      img,
      video {
        opacity: 0;
        transform: ${props =>
          props.align === "right" ? "translateX(-100%)" : "translateX(100%)"};
        transition: 1s all ease !important;
        transition-delay: 0.4s !important;
      }
    }
  }
`

export default RowComponent
