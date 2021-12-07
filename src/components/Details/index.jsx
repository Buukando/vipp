import styled from "styled-components";

import MainButton from "../buttons/MainButton";

export default function Details(props) {

  const { titleSize, showReadMore, configForButtons } = props;

  const { first, second } = configForButtons;

  
  console.log(first)
  console.log(second)

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
          <MainButton configs={first}></MainButton>
          {(showReadMore) ? (<MainButton configs={second}></MainButton>) : null}
        </div>
      </div>
    </Container>
  );
}
