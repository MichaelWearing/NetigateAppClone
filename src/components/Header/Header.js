import React from "react";

// Styles
import {
  Wrapper,
  HeaderLeft,
  HeaderRight,
  HeaderText,
  LogoImg,
} from "./Header.styles";
import SearchIcon from "@material-ui/icons/Search";

export default function Header() {
  return (
    <Wrapper>
      <HeaderLeft>
        <LogoImg src="/images/NetigateLogoSmall.svg" alt="Netigate" />
        <HeaderText>START PAGE</HeaderText>
        <HeaderText>ALL SURVEYS</HeaderText>
        <HeaderText>RESPONDENT LISTS</HeaderText>
      </HeaderLeft>

      <HeaderRight>
        <SearchIcon />
        <HeaderText>Demo Admin</HeaderText>
      </HeaderRight>
    </Wrapper>
  );
}
