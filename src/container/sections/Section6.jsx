// Libs
import styled from "styled-components";

// Components
import PriceCards from "../../components/cards/PriceCards";

// Assets
import Loft from "../../assets/img/Section6/loft.jpg";

// Code
export default function Section6(props) {
  const { first } = {
    first: {
      padding: "",
      text: "example",
      color: "",
      fontSize: "",
      bgColor: "",
    },
  };

  const { card1, card2, card3 } = {
    card1: {
      location: "COPENHAGEN, DEMARK",
      title: "Vipp Loft",
      price: "$ 1.000/night",
      description:
        "Perched atop the old printing factory from 1910 \n in Copenhogen's islands Brygge area.",
      image: Loft,
      bgColor: "#f3f3f3",
    },
    card2: {
      location: "LAKE MMELIN SWEDEN",
      title: "Vipp Shelter",
      price: "$ 1.000/night",
      description:
        "Perched atop the old printing factory from 1910 \n in Copenhogen's islands Brygge area.",
      image: Loft,
      bgColor: "#1d1d1d",
      color: 'white'
    },
    card3: {
      location: "COPENHAGEN, DEMARK",
      title: "Vipp Chimney",
      price: "$ 1.000/night",
      description:
        "Perched atop the old printing factory from 1910 \n in Copenhogen's islands Brygge area.",
      image: Loft,
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
        <PriceCards
          contentForCard={card1}
          configsForButtons={first}
        ></PriceCards>
        <PriceCards
          contentForCard={card2}
          configsForButtons={first}
        ></PriceCards>
        <PriceCards
          contentForCard={card3}
          configsForButtons={first}
        ></PriceCards>
      </div>
    </Container>
  );
}
