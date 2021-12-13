// Libs
import styled from "styled-components";
import OwlCarousel from "react-owl-carousel";
import "../../../node_modules/owl.carousel/dist/assets/owl.carousel.css";
import "../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";

// Components
import NavBar from "../../components/bars/Navbar";

// Assets
import Background from "../../assets/img/Section1/bed1.png";
import ArrowDown from "../../assets/svg/arrow-down.svg";

const Scroll = function () {
  const Container = styled.div`
    width: auto;
    height: auto;
    font-size: 1.2rem;

    position: absolute;
    bottom: 0;
    right: 0;

    margin-bottom: 3rem;
    /* margin-right: -1.5rem; */

    a {
      color: white;
      font-size: 1rem;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      gap: 1rem;
      transform: rotate(90deg);
    }

    a::after {
      content: url(${ArrowDown});
      transform: rotate(-90deg);
      width: auto;
      height: auto;
    }
  `;
  return (
    <Container>
      <a href="#about">
        <p>Scroll</p>
      </a>
    </Container>
  );
};

const Details = function () {
  const Container = styled.div`
    margin: auto;
    text-align: center;
  `;

  const title = {
    color: "white",
    "font-size": "2.7rem",
    "font-weight": "500",
  };

  const subtitle = {
    color: "white",
    "font-size": ".9rem",
    "margin-top": "1rem",
  };

  return (
    <Container>
      <div style={title}>
        <p>As soon as you chack in at</p>
        <p>the hotel it's fully booked</p>
      </div>
      <div style={subtitle}>
        <p>The Vipp Hotel is not a hotel in the traditional sense.</p>
        <p>listead of having many rooms in one location, we</p>
        <p>offer unique rooms at various destinations.</p>
      </div>
    </Container>
  );
};

export default function Section1(props) {
  const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;

    .image-wrapper,
    .container,
    .owl-carousel,
    .owl-item,
    .item {
      height: 100%;
    }

    .image-wrapper {
      width: 100%;
      .item {
        height: 100vh;
        background: url(${Background}) no-repeat;
        background-size: cover;
        object-fit: cover;
      }

      .owl-dots {
        position: absolute;
        bottom: 0;
        margin-bottom: 1rem;
        margin-left: 2rem;
      }
    }

    .container {
      width: 100%;
      padding: 0 2rem;
      position: absolute;
      top: 0;
      z-index: 1;

      ._content {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
      }
    }
  `;
  return (
    <Wrapper>
      <div className="image-wrapper">
        <OwlCarousel
          className="owl-theme"
          items={1}
          loop
          dots
          autoplay
          smartSpeed={250}
        >
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </OwlCarousel>
      </div>
      <div className="container">
        <div className="_content">
          <NavBar></NavBar>
          <Details></Details>
          <Scroll></Scroll>
        </div>
      </div>
    </Wrapper>
  );
}
