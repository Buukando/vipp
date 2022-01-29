import styled from "styled-components";
import OwlCarousel from "react-owl-carousel";
import "../../../node_modules/owl.carousel/dist/assets/owl.carousel.css";
import "../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";

import Assets from "../../assets/assets";
const { carousel, drive } = Assets();

export default function Section8(props) {
  const Wrapper = styled.section`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: end;

    .container {
      width: 90%;
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      .litle-description {
        display: flex;
        flex-direction: column;
        font-size: 2.5rem;
      }

      .go-instagram {
        display: flex;
        align-items: center;
        padding-bottom: 2rem;
        a {
          display: flex;
          align-items: center;
          color: black;
          font-size: 1.2rem;

          &:visited {
            color: black;
          }

          i {
            margin-left: 1.8rem;
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <div className="container">
        <div className="details">
          <div className="litle-description">
            <span>Our lastet</span>
            <span>Instagrams</span>
          </div>
          <div className="go-instagram">
            <a href="#/">
              Go to account <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="photo-container">
          <OwlCarousel className="owl-theme" margin={10} dots={false}>
            {carousel.map((value) => (
              <div className="item">
                <img src={`${drive + value}`} alt="" />
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </Wrapper>
  );
}
