import styled from "styled-components";

import Assets from "../../assets/assets";
const { section3 } = Assets();

export default function Section3(props) {
  const Container = styled.section`
    width: 100%;
    height: auto;
    display: flex;

    video {
      flex: 1;
      max-width: 100%;
      height: 100%;
      width: 100%;
    }
  `;
  return (
    <Container>
      <video autoPlay muted loop>
        <source src={section3.video} type="video/mp4" />
      </video>
    </Container>
  );
}
