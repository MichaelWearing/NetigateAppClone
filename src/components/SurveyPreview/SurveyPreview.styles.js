import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  background: white;
`;

export const PreviewBoxLeft = styled.div`
  align-self: center;
  padding-left: 30px;
`;
export const PBLTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 15px;
  color: #164066;
`;
export const PBLText = styled.p`
  margin: 0;
  padding: 3px 0 0 0;
  font-size: 11px;
  color: lightslategray;
`;

export const PreviewBoxRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  padding-right: 15px;
`;
export const PBRText = styled.h3`
  font-size: 15px;
  font-weight: bold;
  padding-right: 15px;
  color: #164066;
`;
export const PBRAnswers = styled.h3``;
export const PBRIcons = styled.div`
  display: flex;
  color: #164066;
`;
export const PBRIcon = styled.div`
  padding: 0 5px;
`;
