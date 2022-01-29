import styled from "styled-components";

import MainButton from "../buttons/MainButton";

export default function Details(props) {

  const { titleSize, showReadMore, configForButtons, title } = props;

  const { first, second } = configForButtons;

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

  return (
    <Container>
      <div className="container-details">
        <div className="title">
          <p>About the</p>
          <p>{title}</p>
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
