import styled from 'styled-components';

export const MainArea = styled.main`
  padding: 0 2.5%;
  flex: 1 1 auto;
  background-color: rgb(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  //   border-left: solid;
  //   border-right: solid;
`;

export const MainText = styled.p`
  @media only screen and (max-width: 599px) {
    max-width: 90%;
  }

  max-width: 55%;
  font-size: 16pt;
  line-height: 1.5;
`;
