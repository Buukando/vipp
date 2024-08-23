import styled from "styled-components";

import Details from "../../components/Details/index";
import Palette from "../../palette/palette";

import Assets from "../../assets/assets";
const { section2 } = Assets();

const colours = Palette();

const AboutImageContainer = () => {
  const Container = styled.div`
    height: 100%;

    img {
      width: auto;
      height: 80vh;
    }
  `;

  return (
    <Container>
      <img src={section2.aboutImage} alt="" />
    </Container>
  );
};

export default function Section2() {
  const buttonsConfigurations = {
    first: {
      text: "Book a Room",
      padding: ".8rem 1.5rem",
      color: "white",
      bgColor: colours.backgrounds.secondaryColor,
      fontSize: "1.2rem",
    },
    second: {
      text: "Read more",
      padding: ".8rem 1.5rem",
      color: "black",
      bgColor: "transparent",
      fontSize: "1.2rem",
    },
  };

  const Container = styled.div`
  padding: 20vh 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      display: flex;
      align-items: center;
      gap: 12rem;
    }
  `;
  return (
    <Container id="about">
      <div className="container">
        <Details
          palette={colours}
          titleSize={"4rem"}
          showReadMore={true}
          configForButtons={buttonsConfigurations}
          title={"Vipp Hotel"}
        />
        <AboutImageContainer></AboutImageContainer>
      </div>
    </Container>
  );
}
