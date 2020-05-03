import { css } from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  tablet: "768px",
  laptopL: "1440px",
  desktop: "2560px"
};

const device = {
  mobile: `(min-width: 425px)`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: 1024px)`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

export const fromMobile = rules => css`
  @media ${device.mobileL} {
    ${rules}
  }
`;

export const fromLaptop = rules => css`
  @media ${device.laptop} {
    ${rules}
  }
`;
