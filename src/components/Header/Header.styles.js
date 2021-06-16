import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  min-height: 3.5rem;

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

  font-size: 1rem;
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 2.5rem;
`;
