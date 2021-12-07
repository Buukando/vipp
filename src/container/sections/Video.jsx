import styled from 'styled-components';
import VideoBackground from '../../assets/img/section-three/video.jpg'

export default function Video(props) {

    const Container = styled.section`
    height: 80vh;
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