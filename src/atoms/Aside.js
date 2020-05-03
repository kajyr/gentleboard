import styled from "styled-components";

export const ASIDE_ELEMENTS_HORIZONTAL_PADDING = "10px";

const Aside = styled.aside`
  background: #2a3f54;
  color: #e7e7e7;
  min-height: 100vh;

  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  h1 {
    font-size: 2.2rem;

    font-weight: 400;
    width: 100%;
    color: #ecf0f1;

    margin: 0;
    padding: 1.5rem ${ASIDE_ELEMENTS_HORIZONTAL_PADDING};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h3 {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: bold;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export default Aside;
