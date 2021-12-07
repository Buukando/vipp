import styled from "styled-components";

import Details from '../../components/Details/index';
import Palette from '../../palette/palette';


import AboutImage from "../../assets/img/section-two/about.jpg";

const colours = Palette();



const AboutImageContainer = () => {
  const Container = styled.div`
    height: 100%;

    img {
      width: auto;
      height: 40rem;
    }
  `;

  return (
    <Container>
      <img src={AboutImage} alt="" />
    </Container>
  );
};

export default function AboutSection(props) {
  const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      display: flex;
      align-items: center;
      gap: 10rem;
    }
  `;
  return (
    <Container id="about">
      <div className="container">
        <Details palette={colours} titleSize={'3.3rem'} showReadMore={true}></Details>
        <AboutImageContainer></AboutImageContainer>
      </div>
    </Container>
  );
}
