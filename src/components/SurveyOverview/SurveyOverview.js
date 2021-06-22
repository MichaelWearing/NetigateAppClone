import React from "react";

// Components
import SurveyPreview from "../SurveyPreview/SurveyPreview"

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

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

export default function SurveyOverview() {
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
      <SurveyPreview />
        <div className="surveryPreview"></div>
        <div className="surveryPreview"></div>
        <div className="surveryPreview"></div>
        <div className="surveryPreview"></div>
      </SurveryBox>
    </SurveyOverviewWrapper>
  );
}
