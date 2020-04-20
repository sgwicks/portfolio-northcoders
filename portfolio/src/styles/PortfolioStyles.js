import styled from 'styled-components';

export const ProjectGrid = styled.section`
  @media only screen and (max-width: 1100px) {
    grid-template-columns: auto;
  }

  display: grid;
  grid-gap: 1.5em;
  grid-auto-rows: minmax(300px, auto);
  grid-template-columns: 1fr 1fr;
`;

export const ProjectBox = styled.a`
  border: solid #999999 20px;
  background-color: #ffffff;
  opacity: 1;
  padding: 2.5%;
`;

export const ProjectImg = styled.img`
  max-width: 100%;
`;
