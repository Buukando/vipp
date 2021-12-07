import styled from "styled-components";

export default function Details(props) {
  const { palette, titleSize, showReadMore} = props;

  const {backgrounds} = palette;

  const Container = styled.div`
    .container-details {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    .title {
      font-size: ${titleSize};
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
      padding: 0.8rem 1.5rem;
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
    alert("This functionality is not ready yet.");
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
          <button className="btn-bock" onClick={warn}>
            Bock a Room
          </button>
          {
              (showReadMore) ? (
                <button className="btn-read" onClick={warn}>
                Read more
              </button>
              ): ('')
          }
        </div>
      </div>
    </Container>
  );
}
