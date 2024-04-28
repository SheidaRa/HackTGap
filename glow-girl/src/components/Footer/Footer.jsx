import { IoChevronBackOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Container, Row, Col } from "react-bootstrap"
import './Footer.css';

function Footer(){
    return(
       <footer>
        <div className="settings-item"><IoChevronBackOutline size={50} /></div>
        <div className="settings-item"><IoIosSearch size={50} /></div>
        <div className="settings-item"><IoSettingsOutline size={50} /></div>
       </footer>
    );
}

export default Footer;