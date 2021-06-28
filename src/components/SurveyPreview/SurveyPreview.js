import React from "react";

// Styles
import {
  Wrapper,
  PreviewBoxLeft,
  PBLTitle,
  PBLText,
  PreviewBoxRight,
  PBRText,
  PBRAnswers,
  PBRIcons,
  PBRIcon,
} from "./SurveyPreview.styles";
// Material-UI Icons
import EditIcon from "@material-ui/icons/Edit";
import SendIcon from "@material-ui/icons/Send";
import BarChartIcon from "@material-ui/icons/BarChart";

//  The number after Answer should be a state

export default function SurveyPreview({Title, LastEdit, Answers}) {
  return (
    <Wrapper>
      <PreviewBoxLeft>
        <PBLTitle>{Title}</PBLTitle>
        <PBLText>Last edited: {LastEdit}</PBLText>
      </PreviewBoxLeft>
      <PreviewBoxRight>
        <PBRText>ANSWERS: {Answers}</PBRText> {/* // State me */}
        <PBRAnswers></PBRAnswers>
        <PBRIcons>
          <PBRIcon>
            <EditIcon />
          </PBRIcon>
          <PBRIcon>
            <SendIcon />
          </PBRIcon>
          <PBRIcon>
            <BarChartIcon />
          </PBRIcon>
        </PBRIcons>
      </PreviewBoxRight>
    </Wrapper>
  );
}
