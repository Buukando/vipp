// Libs
import styled from "styled-components";

// Assets
import Kitchen from "../../assets/img/Section7/kitchen.png";


// Code
function Details() {
  const Container = styled.div`

  .details {
      display: flex;
      flex-direction: column;
      gap: 5rem;

      color: white;
  }

  .header-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .litle-title {
          font-size: .8rem;
          font-weight: 300;
      }

      .title {
          font-size: 3rem;
      }
  }

  footer {
      display: flex;
      align-items: center;
      gap: 2rem;

      a:visited {
          color: white;
      }

    .tour-button {
        padding: .8rem 2rem;
        border: 1.5px solid white;
        border-radius: 3rem;
        background: transparent;
        color: white;
    }

  }
  `;

  return (
    <Container>
      <div className="details">
        <header className="header-container">
          <span className="litle-title">TRY BEFORE YOU BUY</span>
          <span className="title">
            Test drive your <br />
            next Vipp Kitchen
          </span>
        </header>
        <main>
          <span>
            Just like you can test drive a car, you can take the Vipp <br />
            kitchen for a spin during a stay. Vipp Hotels is a new concept,
            <br />
            where you can experience the Vipp Kitchen in unique hotel
            <br />
            rooms. Turn the gas knobs and feel the materials. if you end
            <br />
            up taking a Vipp Kitchen home, your stay is on the house.
          </span>
        </main>
        <footer>
          <button className="tour-button">Take a Tour</button>
          {/* <a href="" target="_blank" className="price">See pricing</a> */}
        </footer>
      </div>
    </Container>
  );
}

export default function Section7() {
  const Container = styled.section`
    width: 100%;
    height: 100vh;

    .image-container {
      width: 100%;
      height: 100%;
      background: url(${Kitchen}) no-repeat left bottom;
      object-fit: cover;
      background-size: cover;

      display: flex;
      align-items: center;
      justify-content: end;

      padding: 0rem 15rem;

    }
  `;

  return (
    <Container>
      <div className="image-container">
          <Details></Details>
      </div>
    </Container>
  );
}
