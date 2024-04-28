import { IoChevronBackOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Container, Row, Col } from "react-bootstrap"
import './Footer.css';

function Footer(){
    // have this be a grid component from bootstrap with 3 columns, each one being a button
    return(
    <Container>
      <Row>
        <Col><IoChevronBackOutline /></Col>
        <Col><IoIosSearch /></Col>
        <Col><IoSettingsOutline /></Col>
      </Row>
    </Container>
    );
}

export default Footer;