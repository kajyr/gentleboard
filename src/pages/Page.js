import React from "react";
import styled from "styled-components";

import Aside from "../atoms/Aside";

import { fromLaptop } from "../mediaqueries";

const Container = styled.div`
  display: flex;

  ${Aside} {
    display: none;
  }

  ${fromLaptop(`
        ${Aside} {
            display: block;
            width: 230px;
        }
  `)}
`;

const Page = ({ aside, children }) => {
  return (
    <Container>
      {aside}
      {children}
    </Container>
  );
};

export default Page;
