import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SidebarSection from "../atoms/SidebarSection";

const SideMenuContainer = styled(SidebarSection)`
  > a {
    margin-bottom: 6px;
  }

  a {
    color: #e7e7e7;
    font-weight: 500;
    display: block;
    padding: 13px 0px;
    font-size: 1.3rem;
  }
`;

const SidebarMenu = ({ title, items }) => {
  return (
    <SideMenuContainer>
      <h3>{title}</h3>
      {items && (
        <ul>
          {items.map(item => {
            return (
              <li key={item.id}>
                <Link to={item.to}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </SideMenuContainer>
  );
};

export default SidebarMenu;
