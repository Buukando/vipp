import Section1 from '../sections/Section1';
import Section2 from '../sections/Section2';
import Section3 from '../sections/Section3';
import Section4 from '../sections/Section4';
import Section5 from '../sections/Section5';
import Section6 from '../sections/Section6';
import Section7 from '../sections/Section7';
import Section8 from '../sections/Section8';


export default function Layout(props) {
    return(
        <div className="layout">
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>     
            <Section4></Section4>
            <Section5></Section5>
            <Section6></Section6>
            <Section7></Section7>  
            <Section8></Section8>     
        </div>
    )
}