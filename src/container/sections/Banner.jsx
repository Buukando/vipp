import styled from "styled-components";


import Background from "../../assets/img/section-one/bed.png";
import ArrowDown from '../../assets/svg/arrow-down.svg';

import NavBar from "../../components/bars/Navbar";



const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  .wrapper {
    height: 100%;
    flex: 1;
    padding: 0 2rem;
    background: url(${Background}) no-repeat;
    background-size: cover;
  }

  .container {
    height: inherit;
    position: relative;
    display: flex;
  }
`;

const Scroll = function() {
  const Container = styled.div`
    width: auto;
    height: auto;
    font-size: 1.2rem;
    
    position: absolute;
    bottom: 0;
    right: 0;
    
    margin-bottom: 3rem;
    margin-right: -1.5rem;
    
    
    button {
      color: white;
      font-size: 1rem;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      gap: 1rem;
      transform: rotate(90deg);

    }

    
    button::after {
      content: url(${ArrowDown});
      transform: rotate(-90deg);
      width: auto;
      height: auto;
    }
  `;
  return (
    <Container>
      <button>
        <p>Scroll</p>
      </button>
    </Container>
  );
};


const Details = function() {
  const Container = styled.div`
    margin: auto;
    text-align: center;
  `;

  const title = {
    'color': 'white',
    'font-size': '2.7rem',
    'font-weight': '500'

  };

  const subtitle = {
    'color': 'white',
    'font-size': '.9rem',
    'margin-top': '1rem'
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

export default function (props) {
  return (
    <Container>
      <div className="wrapper">
        <div className="container">
          <NavBar></NavBar>
          <Details></Details>
          <Scroll></Scroll>
        </div>
      </div>
    </Container>
  );
}
