import chimney from './images/chimney.png'
import loft from './images/loft.png'
import loftDraw from './images/loft_draw.jpeg'
import shelter from './images/shelter.png'
import shelterDraw from './images/shelter_draw.png'
import aboutImage from './images/aboutImage.png'
import four from './images/four.jpg'
import kitchen from './images/kitchen.png'


import image1 from './images/carousel/1.jpg'
import image2 from './images/carousel/2.jpg'
import image3 from './images/carousel/3.jpg'
import image4 from './images/carousel/4.jpg'
import image5 from './images/carousel/5.jpg'
import image6 from './images/carousel/6.jpg'
import image7 from './images/carousel/7.jpg'
import image8 from './images/carousel/8.jpg'

import video from './video/loft.mp4'

export default function Assets() {

    const exportDrive = 'https://drive.google.com/uc?export=view&id=18f37ONYW8tzUWKZ6D39fUT6XD-ANJfWg';

    return {
        section1: {
            chimney: chimney,
            loft: loft,
            shelter: shelter
        },
        section2: {
            aboutImage: aboutImage
        },
        section3: {
            video: video
        },
        section4: {
            four: four,
        },
        section5: {
            loft: loftDraw,
            shelter: shelterDraw
        },
        section6: {
            kitchen: kitchen
        },
        carousel: [
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8
        ],
        drive: exportDrive
    }
}



