import React from "react";

// Styles
import {
  Wrapper,
  BodyHeader,
  BodyHeaderLeft,
  BodyHeaderRight,
  LongLogo,
  BodyHeaderTextWrapper,
  BHTitle,
  BHText,
  ButtonWrapper,
  BodyHeaderButton,
  ButtonText,
} from "./Body.styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

export default function Body() {
  return (
    <>
      <BodyHeader>
        <BodyHeaderLeft>
          <LongLogo src="/images/NetigateLogo.svg" alt="Netigate" />
          <BodyHeaderTextWrapper>
            <BHTitle>Welcome Demo Admin</BHTitle>
            <BHText>Administrator</BHText>
          </BodyHeaderTextWrapper>
        </BodyHeaderLeft>
        <BodyHeaderRight>
          <BodyHeaderButton>
            <ButtonWrapper>
              <AddCircleOutlineIcon style={{ fontSize: 20 }} />
              <ButtonText>CREATE A SURVEY</ButtonText>
            </ButtonWrapper>
          </BodyHeaderButton>
        </BodyHeaderRight>
      </BodyHeader>
      <Wrapper>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </Wrapper>
    </>
  );
}
