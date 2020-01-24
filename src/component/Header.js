import React from "react";
import styled from "styled-components";

const TitleStyle = styled.h1`
  color: white;
  text-align: center;
`;

const NavStyle = styled.nav`
  background: #0892d0;
`;

const ParaStyle = styled.p`
  color: white;
  padding: 2%;
`;

const Header = props => {
  return (
    <NavStyle>
      <TitleStyle>
        Hello, {props.name}: it's {props.title}
      </TitleStyle>
      <ParaStyle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
        corporis dicta blanditiis enim! Minus laboriosam maiores saepe ipsum
        odio voluptatum a praesentium! Quos consectetur possimus dolores
        consequatur molestias itaque illum!
      </ParaStyle>
    </NavStyle>
  );
};

export default Header;
