import styled from 'styled-components';
import VideoBackground from '../../assets/img/Section3/video.jpg'

export default function Section3(props) {

    const Container = styled.section`
    height: 90vh;
    width: 100%;
    background: url(${VideoBackground}) no-repeat center center;
    background-size: cover;
    `;
    return (
        <Container>
            <div></div>
        </Container>
    )
}