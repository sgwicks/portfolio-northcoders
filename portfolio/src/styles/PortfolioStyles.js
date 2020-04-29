import styled from 'styled-components';

export const ProjectGrid = styled.section`
  justify-content: space-around;
  align-items: space-around;
  display: flex;
  flex-wrap: wrap;
`;

export const ProjectBox = styled.a`
  box-shadow: 5px 5px 10px 10px #999;

  border-radius: 5%;
  color: black;
  text-outline: white;
  text-decoration: none;
  position: relative;
  margin: 20px;
`;

export const ProjectImg = styled.img`
  height: 300px;
  width: 300px;
  float: left;
  border-radius: 5%;
  margin: 5px;
`;

export const ProjectText = styled.p`
  position: absolute;
  background-color: rgb(255, 255, 255, 0.8);
  max-height: 100%;
  max-width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 5%;
  margin: 0;
  padding: 15%;
`;

export const ButtonDisplay = styled.section`
  display: flex;
`;

export const ProjectButton = styled.button`
  flex: auto;
  font-size: 20px;
  padding: 5px;
  margin: 20px;
  margin-bottom: 10px;
  color: white;
  // border: none;
  ${(props) =>
    props.active
      ? 'background-color: rgb(115, 135, 53, 0.5)'
      : 'background-color: rgb(115, 135, 53)'};
  border-color: rgb(102, 102, 51);
  border-radius: 10px;
`;
