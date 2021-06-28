import React, { useState } from "react";

// Components
import SurveyPreview from "../SurveyPreview/SurveyPreview";

// Styles
import {
  SurveyOverviewWrapper,
  SurveyOverviewHeader,
  HeaderLeft,
  HeaderRight,
  HeaderText,
  HeaderTextRight,
  SurveryBox,
} from "./SurveyOverview.styles";

import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

export default function SurveyOverview({ surveryState }) {
  const printPreviews = () => {
    let helper = [];
    for (let i = 0; i < surveryState.length; i++) {
      helper.push(
        <SurveyPreview
          Title={surveryState[i].Title}
          LastEdit={surveryState[i].LastEdit}
          Answers={surveryState[i].Answers}
        />
      );
    }
    return helper;
  };

  return (
    <SurveyOverviewWrapper>
      <SurveyOverviewHeader>
        <HeaderLeft>
          <HeaderText>Last edited</HeaderText>
          <HeaderText>Recently saved reports</HeaderText>
          <HeaderText>Respondent activity</HeaderText>
        </HeaderLeft>
        <HeaderRight>
          <HeaderTextRight>SEE ALL SURVERYS</HeaderTextRight>
          <DoubleArrowIcon style={{ fontSize: 21 }} />
        </HeaderRight>
      </SurveyOverviewHeader>
      <SurveryBox>
        {printPreviews()}
      </SurveryBox>
    </SurveyOverviewWrapper>
  );
}
