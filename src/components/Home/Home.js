import React from '../../../node_modules/react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
 
const Home = () => {
    return (
            <Container fluid={true}>
                <Row>
                    {/* NEWS SECTION */}
                    <Col md={6} className={'sectionNews mb-4'}>
                    <h3>News</h3>
                    <h5>Special Christmas action</h5>
                    <div className={"news"}>
                        <p>
                        On this 2019's Christmas, we are happy to announce you our special action: a wonderfull evening with traditional songs and dishes. 
                        10% of the incomes will go the homeless persons (with the help of the city of Bruxelles).
                        </p>
                        <img src={process.env.PUBLIC_URL + '/assets/img/news/christmas.jpg'} alt="Christmas pic"/> 
                    </div>
                    </Col>

                    {/* NEWEST MENU SECTION */}
                    <Col md={6} className={'sectionNewestMenu mb-4'}>
                    <h3>Our newest menu!</h3>
                    <div className={"newestMenu"}>
                        <p>
                        We are happy to introduce you our newest menu, the mountain's menu aka <span>Zakopiec</span>!
                        It consists in:
                        </p>
                        <ListGroup variant="flush">
                            <ListGroup.Item>- Entry: Żurek or Borsch</ListGroup.Item>
                            <ListGroup.Item>- Main course: Highlander pork leg</ListGroup.Item>
                            <ListGroup.Item>- Dessert: Racuchy with vanilla ice-cream</ListGroup.Item>
                        </ListGroup>
                        <img src={process.env.PUBLIC_URL + '/assets/img/menus/zakopiec.jpg'} alt="Newest menu pic"/> 
                    </div>
                    </Col>

                </Row>
            </Container>
    );
}
 
export default Home;