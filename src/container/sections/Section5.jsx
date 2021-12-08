// Libs
import styled from "styled-components";

// Components
import MainButton from '../../components/buttons/MainButton';

// Assets
import Background from '../../assets/img/Section4/four.jpg'


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
    padding: '.7rem 1.5rem',
    color: 'black',
    bgColor: 'white',
    text: 'Look inside Vipp Shelter',
    fontSize: '1rem'
  }
  return (
    <Container>
        <div>
            <MainButton configs={btnConfigs}>Look inside Vipp Shelter</MainButton>
        </div>
    </Container>
  );
}
