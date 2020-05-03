import React from "react";
import styled from "styled-components";

import SidebarSection from "../atoms/SidebarSection";
import Aside from "../atoms/Aside";

import SidebarMenu from "../molecules/SidebarMenu";

const Profile = styled(SidebarSection)`
  display: flex;
  align-items: center;

  img {
    width: 25%;
    background: #fff;
    border: 1px solid rgba(52, 73, 94, 0.44);
    vertical-align: middle;
    border-radius: 50%;
    padding: 2px;
  }

  .info {
    margin-left: 10px;
    color: #bab8b8;
    font-weight: 300;
  }

  h2 {
    margin: 0;
  }
`;

const Sidebar = ({ sideBarConfig = {} }) => {
  const { title, profile, items } = sideBarConfig;

  return (
    <Aside>
      {title && <h1>{title}</h1>}
      {profile && (
        <Profile>
          <img src={profile.image} />
          {profile.name && (
            <div className="info">
              <span>Welcome,</span>
              <h2>{profile.name}</h2>
            </div>
          )}
        </Profile>
      )}
      <nav>
        {items.map(item => (
          <SidebarMenu key={item.id} title={item.title} items={item.items} />
        ))}
      </nav>
    </Aside>
  );
};

export default Sidebar;
