import styled from "styled-components";

import Logo from '../../assets/svg/logo.svg';

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

  .btn-reservation {
      padding: .5rem 1rem;
      border-radius: .8rem;
      border: none;
      background: #3c6961;
      color: white;
  }
`;

export default function(props) {
  <NavContainer>
    <header>
      <span className="logo">
        <img src={Logo} alt="" />
      </span>
      <div className="container_recomendation">
        <button className="btn-reservation">Make a reservation</button>
      </div>
    </header>
  </NavContainer>
};
