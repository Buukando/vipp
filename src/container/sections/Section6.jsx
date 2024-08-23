// Libs
import styled from "styled-components";

// Components
import PriceCards from "../../components/cards/PriceCards";
import Palette from "../../palette/palette";

// Assets
import Assets from "../../assets/assets";

// Code
const { section5 } = Assets();
const colours = Palette();

export default function Section6() {
  const { backgrounds } = colours;

  const btnConfig = {
    padding: ".6rem 1rem",
    text: "View Room",
    color: backgrounds.white,
    fontSize: "1.2rem",
    bgColor: backgrounds.secondaryColor,
  };

  const { card1, card2, card3 } = {
    card1: {
      location: "COPENHAGEN, DEMARK",
      title: "Vipp Loft",
      price: "$ 1.000/night",
      description:
        "Perched atop the old printing factory from 1910 \n in Copenhogen's islands Brygge area.",
      image: section5.loft,
      bgColor: "#f3f3f3",
    },
    card2: {
      location: "LAKE MMELIN SWEDEN",
      title: "Vipp Shelter",
      price: "$ 1.000/night",
      description:
        "Perched atop the old printing factory from 1910 \n in Copenhogen's islands Brygge area.",
      image: section5.shelter,
      bgColor: "#1d1d1d",
      color: "white",
    },
    card3: {
      location: "COPENHAGEN, DEMARK",
      title: "Vipp Chimney",
      price: "$ 1.000/night",
      description:
        "Perched atop the old printing factory from 1910 \n in Copenhogen's islands Brygge area.",
      image: section5.loft,
      bgColor: "#f3f3f3",
    },
  };

  const Container = styled.section`
    width: 100%;
    height: 100vh;

    .wrapper {
      height: 100%;
      display: flex;
    }
  `;

  return (
    <Container>
      <div className="wrapper">
        <PriceCards contentForCard={card1} configsForButtons={btnConfig} />
        <PriceCards contentForCard={card2} configsForButtons={btnConfig} />
        <PriceCards contentForCard={card3} configsForButtons={btnConfig} />
      </div>
    </Container>
  );
}
