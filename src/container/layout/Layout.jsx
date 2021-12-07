import Banner from '../sections/Banner';
import AboutSection from '../sections/AboutSection';


export default function Layout(props) {
    return(
        <div className="layout">
            <Banner></Banner>
            <AboutSection></AboutSection>            
        </div>
    )
}