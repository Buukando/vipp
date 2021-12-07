// Libs
import styled from "styled-components";

// Components
import MainButton from '../../components/buttons/MainButton';

// Assets
import Background from '../../assets/img/section-four/four.jpg'


export default function Section5() {

  const Container = styled.section`
    width: 100%;
    height: 100vh;
    background: url(${Background}) no-repeat center center;
    background-size: cover;
    object-fit: cover;

    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const btnConfigs = {
    padding: '.8rem 1.2rem',
    color: 'white',
    bgColor: 'red',
    text: 'teste',
    fontSize: '.5rem'
  }
  return (
    <Container>
        <div>
            <MainButton configs={btnConfigs}>Look inside Vipp Shelter</MainButton>
        </div>
    </Container>
  );
}
