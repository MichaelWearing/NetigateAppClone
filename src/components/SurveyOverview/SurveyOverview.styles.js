import styled from "styled-components";

export const SurveyOverviewWrapper = styled.div`
  background: purple;
`;

export const SurveyOverviewHeader = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;

  background: #faf9fa;
  color: #164066;
  height: 4vh;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  font-weight: 600;
  font-size: 15px;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  font-weight: bold;

  padding-right: 15px;

  &:hover {
    cursor: pointer;
    color: #37c7c9;
  }
`;

export const HeaderText = styled.p`
  padding-left: 15px;

  margin: 0;

  &:hover {
    cursor: pointer;
    color: #37c7c9;
  }
`;

export const HeaderTextRight = styled.p`
  padding-right: 3px;

  margin: 0;

  &:hover {
    cursor: pointer;
    color: #37c7c9;
  }
`;

export const SurveryBox = styled.div`
  background: white;

  min-height: 33vh;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(5, 1fr);

  .surveryPreview {
    &:nth-child(1) {
      background: black;
    }
    &:nth-child(2) {
      background: lime;
    }
    &:nth-child(3) {
      background: cyan;
    }
    &:nth-child(4) {
      background: red;
    }
    &:nth-child(5) {
      background: yellow;
    }
  }
`;
