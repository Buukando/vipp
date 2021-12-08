// Libs
import styled from "styled-components";

// Components
import MainButton from "../../components/buttons/MainButton";

// Assets

// Code
export default function PriceCards(props) {
  const { contentForCard, configsForButtons } = props;
  const { location, title, price, description, image, bgColor, color } =
    contentForCard;

  const Container = styled.div`
    flex: 1;
    height: 100%;
    background-color: ${bgColor};
    color: ${color};

    .content {
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 3rem;
      padding: 2rem 1rem;
    }

    header {
      display: flex;
      flex-direction: column;
      align-items: center;

      .litleTitle {
        font-size: 0.7rem;
      }

      .title {
        font-size: 2.4rem;
        font-weight: 500;
      }
    }

    main {
      flex: 1;
    }
    .image-container {
      width: 100%;
      height: 100%;
      background: url(${image}) no-repeat center center;
    }

    footer {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .container_footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  `;

  return (
    <Container>
      <div className="content">
        <header>
          <span className="litleTitle">{location}</span>
          <span className="title">{title}</span>
        </header>
        <main>
          <div className="image-container">
            {/* <img src={image} alt="" /> */}
          </div>
        </main>
        <footer>
          <div className="container_footer">
            <div>
              <span>{price}</span>
            </div>
            <div>
              <span>{description}</span>
            </div>
            <div>
              <MainButton configs={configsForButtons}></MainButton>
            </div>
          </div>
        </footer>
      </div>
    </Container>
  );
}
