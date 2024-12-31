import {useState} from "react";
import {FooterStyle} from './footerStyle';
import MapSelector from "../../utils/MapSelector";

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState("");

    const handleMapSelection = (sido: string, sigugun: string, dong: string) => {
        const address = `${sido} ${sigugun} ${dong}`;
        setSelectedLocation(address);
        console.log(sido, sigugun, dong);
      };

    const handleClick = () => {
        setIsOpen(true);
    }

    return(
        <FooterStyle>
            <section>
                <button onClick={handleClick}>
                    고객 서비스
                    <span>{isOpen ? "-" : "+"}</span>
                </button>
            </section>
            <section>
                <button onClick={handleClick}>
                    법적 고지
                    <span>{isOpen ? "-" : "+"}</span>
                </button>
            </section>
            <section>
                <div>
                <button onClick={handleClick}>
                    소셜 미디어
                    <span>{isOpen ? "-" : "+"}</span>
                </button>
                </div>
            </section>
            <section>
                <MapSelector onSelect={handleMapSelection}/>
            </section>
        </FooterStyle>
    )
}

export default Footer;