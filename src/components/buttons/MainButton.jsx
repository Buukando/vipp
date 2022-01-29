import styled from "styled-components";

export default function MainButton(props) {

  const { padding, color, text, fontSize, bgColor } = props.configs;

  const Container = styled.div`
    width: auto;
    height: auto;

    button {
        padding: ${padding};
        color: ${color};
        background: ${bgColor};
        font-size: ${fontSize};
        border-radius: 2rem;
        border: none;
        cursor: pointer;
    }
  `;


  return (
    <Container>
      <button>{text}</button>
    </Container>
  );
}
