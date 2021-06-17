import styled from "styled-components";

export const BodyHeader = styled.div`
  background: white;
  height: 12vh;

  display: flex;
  justify-content: space-between;
`;

export const BodyHeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 0 0 0 5.5vh;
`;
export const BodyHeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 0 5.5vh 0 0;
`;

export const LongLogo = styled.img`
  width: 24vh;
`;

export const BodyHeaderTextWrapper = styled.div`
  margin-left: 4vh;
  margin-bottom: 1.5vh;
`;
export const BHTitle = styled.p`
  font-size: 18px;

  margin: 0;
`;
export const BHText = styled.p`
  font-size: 15px;
  margin: 0;
  color: lightslategray;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonText = styled.p`
  margin-left: 6px;
  font-family: Poppins, Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
`;

export const BodyHeaderButton = styled.button`
  display: flex;
  align-items: center;

  background: #4caf50;
  border: 0;
  border-radius: 3px;

  height: 4vh;
  font-size: 13px;
  color: white;
  padding: 0 8px;

  &:hover {
    background-color: #38cf3e;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  background: lightgray;

  min-height: 48rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  .box {
    margin: 1rem;

    &:nth-child(1) {
      background: violet;
      grid-column: 1/3;
      grid-row: 1/2;

      margin: 3vh 2vh 1vh 5vh;
    }
    &:nth-child(2) {
      background: lime;

      margin: 3vh 5vh 1vh 2vh;
    }
    &:nth-child(3) {
      background: cyan;
      height: 20rem;
      margin: 2vh 1vh 1vh 5vh;
    }
    &:nth-child(4) {
      background: white;
      height: 20rem;
      /*  margin-bottom: 2vh; */
    }
    &:nth-child(5) {
      background: yellow;
      height: 20rem;
      margin: 2vh 5vh 1vh 2vh;
      /* margin-bottom: 2vh; */
    }
  }
`;
