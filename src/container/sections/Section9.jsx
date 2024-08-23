import styled from "styled-components";

import MainButton from "../../components/buttons/MainButton";

import Palette from "../../styles/palette/palette";

// Assets
import Logo from "../../assets/svg/logo-black.svg";

export default function Section8() {
  const colours = Palette();

  const Container = styled.section`
    * {
      a {
        color: black;
        &:visited {
          color: black;
        }
      }
    }
    width: 100%;
    height: 80vh;

    background: ${colours.backgrounds.gray};
    padding: 5rem 4rem 1rem 4rem;

    header {
      padding: 3rem 0;
    }

    main {
      display: flex;
      justify-content: space-between;
    }

    .links-container {
      display: flex;
      gap: 5rem;

      ul {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
      }

      a {
        color: black;
        &:visited {
          color: black;
        }
      }
    }

    .newsletter-container {
      .litle-header {
        font-size: 1.5rem;
        margin-bottom: 2rem;
      }

      .input-container {
        border-bottom: solid black 2px;
        margin-bottom: 2rem;
        input {
          border: none;
          background: transparent;
          padding: 1rem 0;
          padding-right: 25rem;
        }
      }
    }
    footer {
      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      gap: 2rem;
    }

    .footer {
      width: 100%;
      align-self: center;
      display: flex;
      justify-content: space-between;
      border-top: solid black 1px;
      padding: 2rem 0 1rem 0;

      .footer-content {
        display: flex;
        gap: 8rem;
      }

      .footer-links {
        display: flex;
        gap: 1.5rem;
      }
      .find-us {
        display: flex;
        align-items: center;
        gap: 2rem;

        .social-icons {
          display: flex;
          flex-direction: row;
          gap: 1rem;
        }
      }
    }
  `;

  const btnConfig = {
    text: "Sign up",
    padding: ".6rem 2rem",
    color: "white",
    bgColor: colours.backgrounds.secondaryColor,
    fontSize: ".8rem",
  };
  return (
    <Container>
      <footer>
        <div className="first-content">
          <header>
            <span>
              <img src={Logo} width="100" alt="logo"/>
            </span>
          </header>
          <main>
            <div className="links-container">
              <div className="first-list">
                <ul>
                  <li>
                    <a href="#/">The company</a>
                  </li>
                  <li>
                    <a href="#/">About</a>
                  </li>
                  <li>
                    <a href="#/">Stories</a>
                  </li>
                  <li>
                    <a href="#/">Press</a>
                  </li>
                  <li>
                    <a href="#/">Reservations</a>
                  </li>
                </ul>
              </div>
              <div className="second-list">
                <ul>
                  <li>
                    <a href="#/">Legal</a>
                  </li>
                  <li>
                    <a href="#/">Legal Notice</a>
                  </li>
                  <li>
                    <a href="#/">Work With Us</a>
                  </li>
                  <li>
                    <a href="#/">Cancel reservation</a>
                  </li>
                  <li>
                    <a href="#/">Lost and Found</a>
                  </li>
                </ul>
              </div>
              <div className="thirt-list">
                <ul>
                  <li>
                    <a href="#/">Support</a>
                  </li>
                  <li>
                    <a href="#/">FAQ</a>
                  </li>
                  <li>
                    <a href="#/">Reservations</a>
                  </li>
                  <li>
                    <a href="#/">info@vipp.com</a>
                  </li>
                  <li>
                    <a href="tel:+1449398999">+1449 398 999</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="newsletter-container">
              <form action="#">
                <div className="litle-header">
                  <span>Newsletter</span>
                </div>
                <div className="input-container">
                  <input type="text" placeholder="Enter your email address" />
                </div>
                <MainButton configs={btnConfig}></MainButton>
              </form>
            </div>
          </main>
        </div>
        <div className="footer">
          <div className="footer-content">
            <div className="footer-links">
              <a href="#/">
                <span>Terms and Conditions</span>
              </a>
              <a href="#/">
                <span>Privacy Policy</span>
              </a>
              <a href="#/">
                <span>Trademark and Copyright</span>
              </a>
            </div>
            <div className="copy">
              <span>&copy;2024 Vipp. All rights reserved</span>
            </div>
          </div>
          <div>
            <div className="find-us">
              <span>Find us on</span>
              <span className="social-icons">
                <a href="#/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#/">
                  <i className="fab fa-youtube"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
}
