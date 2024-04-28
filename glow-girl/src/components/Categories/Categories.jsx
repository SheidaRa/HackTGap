import Data from '../../data.json';
import CategoryListItem from '../CategoryListItem/CategoryListItem';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Container, Row, Col } from 'react-bootstrap';
import './Categories.css';

function Categories() {

    return (
        <div id="categories">
            <Header />
            <h1>Categories</h1>
            <Container fluid>
            <Row>
            {Data.categories.map((category, i) => (
                <Col lg={true}><CategoryListItem key={i} category={category} /></Col>
            ))}
            </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Categories;