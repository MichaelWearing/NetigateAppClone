import React, { useState } from "react";

// Components
import SurveyOverview from "../SurveyOverview/SurveyOverview";

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
  const [surveryState, setSurveryState] = useState([
    {
      Title: "Invitation workshop",
      LastEdit: "Today",
      Answers: 5,
    },
    {
      Title: "Employee Experience",
      LastEdit: "Yesterday",
      Answers: 150,
    },
    {
      Title: "Demo Customer Experience",
      LastEdit: "2 weeks ago",
      Answers: 275,
    },
  ]);

  const createSurvery = () => {
    setSurveryState([
      ...surveryState,
      {
        Title: "New thing",
        LastEdit: "Today",
        Answers: 5,
      },
    ]);
  };

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
              <ButtonText onClick={createSurvery}>CREATE A SURVEY</ButtonText>
            </ButtonWrapper>
          </BodyHeaderButton>
        </BodyHeaderRight>
      </BodyHeader>
      <Wrapper>
        <div className="box">
          <SurveyOverview surveryState={surveryState} />
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </Wrapper>
    </>
  );
}
