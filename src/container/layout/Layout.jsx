import Banner from '../sections/Banner';
import AboutSection from '../sections/AboutSection';
import Video from '../sections/Video';
import SectionFour from '../sections/SectionFour';


export default function Layout(props) {
    return(
        <div className="layout">
            <Banner></Banner>
            <AboutSection></AboutSection>
            <Video></Video>     
            <SectionFour></SectionFour>       
        </div>
    )
}