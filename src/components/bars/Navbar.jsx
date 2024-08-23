// Libs
import styled from "styled-components";

// Components
import MainButton from "../buttons/MainButton";
import Palette from "../../styles/palette/palette";

//Assets
import Logo from "../../assets/svg/logo.svg";

export default function Navbar() {

  const colors = Palette();
  
  const btnConfig = {
    text: "Make a reservation",
    padding: ".7rem 1.5rem",
    color: "white",
    bgColor: colors.backgrounds.secondaryColor,
    fontSize: "1.2rem",
  };

  const NavContainer = styled.div`
    width: 100%;
    padding: 1.1rem 0;
    border-bottom: 2px solid white;
    position: absolute;
    top: 0;

    header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    span {
      padding-top: .6rem;
    }

    .logo img {
      width: 5rem;
    }
  `;
  return (
    <NavContainer>
      <header>
        <span className="logo">
          <img src={Logo} alt="" />
        </span>
        <nav className="container_recomendation">
          <MainButton configs={btnConfig}></MainButton>
        </nav>
      </header>
    </NavContainer>
  );
}
