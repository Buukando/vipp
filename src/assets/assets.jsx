import chimney from './images/chimney.png'
import loft from './images/loft.png'
import shelter from './images/shelter.png'
import aboutImage from './images/aboutImage.png'

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
            four: `${exportDrive}12EgixtpgAc1KDJMw5tesA1NYpBFNWCj7`
        },
        section5: {
            loft: `${exportDrive}1xqihnBT_OHk29MeRERoAtlSDoy7DU_Ay`,
            shelter: `${exportDrive}1wP9IlwNg7DXpaVnqUKWpc46xDSq4D3fS`,
        },
        section6: {
            kitchen: `${exportDrive}1SyIUT_WNN7GhYkBGeh2IeGNCtwA1K2LD`
        },
        carousel: [
            "1jcKlzbsEqT-fAV562qKdZVLsl-fRcNo7",
            "1JBTcrZZO9hRnLiHGWPtDszVXnmcI-Q5T",
            "1hSstssw1IGxM2D6mvra03QkLtCn8cxdy",
            "1RpLV70nARBNV-nRILY0qy7O42YR6dXjD",
            "1IAwO7u0DzyjFK5WildpV0UjFPfnJ70fD",
            "1uVdH4X2MdMEd7uusR4ot5yIwemhl3A2f",
            "1NF8twmbv2txjF97L2aITzK4dunwESw7X",
            "1bH3H69maTt9XU_2Z45Jj_SI5d361C0ZB"
        ],
        drive: exportDrive
    }
}



