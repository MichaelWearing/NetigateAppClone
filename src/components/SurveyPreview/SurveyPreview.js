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

export default function SurveyPreview() {
  return (
    <Wrapper>
      <PreviewBoxLeft>
        <PBLTitle>Invitation workshop</PBLTitle>
        <PBLText>Last edited: Today</PBLText>
      </PreviewBoxLeft>
      <PreviewBoxRight>
        <PBRText>ANSWERS: 9</PBRText> {/* // State me */}
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
