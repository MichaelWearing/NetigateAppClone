import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  min-height: 3rem;

  background: #164066;
  color: #ffffff;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;

  margin: 0vh 1.5rem;
`;

export const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderText = styled.h3`
  margin: 0 1.5rem;

  font-size: 15px;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: #37c7c9;
  }
`;

export const LogoImg = styled.img`
  width: 2.5rem;
`;
