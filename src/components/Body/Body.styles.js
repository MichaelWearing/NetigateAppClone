import styled from "styled-components";

export const Wrapper = styled.div`
  background: lightgray;

  min-height: 51rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  
  
  .box {
    margin: 1rem;

    &:nth-child(1) {
      background: violet;
      grid-column: 1/3;
      grid-row: 1/2;

      /* margin-top: 3vh; */
    }
    &:nth-child(2) {
      background: lime;

      /* margin-top: 3vh; */
    }
    &:nth-child(3) {
      background: cyan;
      height: 20rem;
      /* margin-bottom: 2vh; */
    }
    &:nth-child(4) {
      background: white;
      height: 20rem;
      /*  margin-bottom: 2vh; */
    }
    &:nth-child(5) {
      background: yellow;
      height: 20rem;
      /* margin-bottom: 2vh; */
    }
  }
`;
