// Libs
import styled from "styled-components";

// Components
import MainButton from "../buttons/MainButton";
import Palette from "../../palette/palette";

//Assets
import Logo from "../../assets/svg/logo.svg";

export default function Navbar(props) {

  const colors = Palette();
  
  const btnConfig = {
    text: "Make a reservation navbar",
    padding: ".7rem 1.5rem",
    color: "white",
    bgColor: colors.backgrounds.secondaryColor,
    fontSize: ".8rem",
  };

  const NavContainer = styled.div`
    width: 100%;
    padding: 1.1rem 0;
    border-bottom: 2px solid white;
    position: absolute;

    header {
      display: flex;
      justify-content: space-between;
    }

    .logo img {
      width: auto;
      height: 100%;
    }
  `;
  return (
    <NavContainer>
      <header>
        <span className="logo">
          <img src={Logo} alt="" />
        </span>
        <div className="container_recomendation">
          <MainButton configs={btnConfig}></MainButton>
        </div>
      </header>
    </NavContainer>
  );
}
