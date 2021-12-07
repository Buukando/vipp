import styled from "styled-components";

import AboutImage from "../../assets/img/section-two/about.jpg";

import Palette from '../../palette/palette';

const colors = Palette();

const { backgrounds } = colors;



const Details = () => {
  const Container = styled.div`


.container-details {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

  .title {
      font-size: 3.3rem;
      font-weight: 600;
  }

  .btn-container {
      display: flex;
      gap: 2rem;
  }

  button {
      border: none;
  }

  .btn-bock {
      padding: .8rem 1.5rem;
      background: ${backgrounds.secondaryColor};
      color: white;
      border-radius: 1rem;

  }
  .btn-read {
      background: transparent;
  }
  `;

  function warn(e) {
      e.preventDefault();
      alert('This functionality is not ready yet.')
  }

  
  return (
    <Container>
      <div className="container-details">
        <div className="title">
          <p>About the</p>
          <p>Vipp Hotel</p>
        </div>
        <div className="description">
          <span>
            At the Vipp Hotel, we invite yout to experience our <br />
            philosophy of design in places out of the ordinary.
            <br />
            Our hotel is not like many others. Instead of having
            <br />
            all our rooms in one place, we offer a curated
            <br />
            selection of destinations for unique expeiences.
            <br />
          </span>
        </div>
        <div className="btn-container">
          <button className="btn-bock" onClick={warn}>Bock a Room</button>
          <button className="btn-read" onClick={warn}>Read more</button>
        </div>
      </div>
    </Container>
  );
};

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
    <Container>
      <div className="container">
        <Details></Details>
        <AboutImageContainer></AboutImageContainer>
      </div>
    </Container>
  );
}
