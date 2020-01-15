import React from '../../../node_modules/react';
import { Container, Row, Col, Accordion, Card, ListGroup, Badge, Image  } from 'react-bootstrap';

const Menus = () => {
    return (
            <Container fluid={true}>
                
                <Row>
                    {/* MENUS ACCORDION */}
                    <Col md={6} className={'sectionMenusOfTheMonth mb-4'}>
                    <h3>Menus of the months:</h3>
                        <Accordion defaultActiveKey="0">
                            {/* Menu n°1 */}
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1" className={'mb-1'}>
                                    <Row>
                                        <Col md={10}>
                                        Mountain's menu: <b>Zakopiec</b>
                                        </Col>
                                        <Col md={1}>
                                        <Badge pill variant="dark" className={'justify-content-center'}>
                                            12 €
                                        </Badge>
                                        </Col>
                                        <Col md={1}>
                                        <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>
                                        </Col>
                                    </Row>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>- Entry: Żurek or Borsch</ListGroup.Item>
                                        <ListGroup.Item>- Main course: Highlander pork leg</ListGroup.Item>
                                        <ListGroup.Item>- Dessert: Racuchy with vanilla ice-cream</ListGroup.Item>
                                    </ListGroup>            
                                    <Image src={process.env.PUBLIC_URL + '/assets/img/menus/zakopiec.jpg'} thumbnail fluid/>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            {/* Menu n°2 */}
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2"  className={'mb-1'}>
                                    <Row>
                                        <Col md={10}>
                                        City-dweller's menu: <b>Warszawka</b>
                                        </Col>
                                        <Col md={1}>
                                        <Badge pill variant="dark" className={'justify-content-center'}>
                                            16 €
                                        </Badge>
                                        </Col>
                                        <Col md={1}>
                                        <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>
                                        </Col>
                                    </Row>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>- Entry: Oiled herring</ListGroup.Item>
                                        <ListGroup.Item>- Main course: Pierogi</ListGroup.Item>
                                        <ListGroup.Item>- Dessert: Zygmuntówka</ListGroup.Item>
                                    </ListGroup>
                                    <Image src={process.env.PUBLIC_URL + '/assets/img/menus/warszawka.jpg'} thumbnail fluid/>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            {/* Menu n°3 */}
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3"  className={'mb-1'}>
                                    <Row>
                                        <Col md={10}>
                                        Tourist's menu: <b>Krakowiak</b>
                                        </Col>
                                        <Col md={1}>
                                        <Badge pill variant="dark" className={'justify-content-center'}>
                                            14 €
                                        </Badge>
                                        </Col>
                                        <Col md={1}>
                                        <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>
                                        </Col>
                                    </Row>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>- Entry: Pork knuckle in jelly</ListGroup.Item>
                                        <ListGroup.Item>- Main course: Pork chops with potatoes and cabbage</ListGroup.Item>
                                        <ListGroup.Item>- Dessert: Paczki</ListGroup.Item>
                                    </ListGroup>
                                    <Image src={process.env.PUBLIC_URL + '/assets/img/menus/krakowiak.jpg'} thumbnail fluid/>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            {/* Menu n°4 */}
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="4">
                                    <Row>
                                        <Col md={10}>
                                        Ecologist's menu: <b>Mazury</b>
                                        </Col>
                                        <Col md={1}>
                                        <Badge pill variant="dark" className={'justify-content-center'}>
                                            18 €
                                        </Badge>
                                        </Col>
                                        <Col md={1}>
                                        <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>
                                        </Col>
                                    </Row>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>- Entry: Fish soup</ListGroup.Item>
                                        <ListGroup.Item>- Main course: Baked goose</ListGroup.Item>
                                        <ListGroup.Item>- Dessert: Piernik</ListGroup.Item>
                                    </ListGroup>
                                    <Image src={process.env.PUBLIC_URL + '/assets/img/menus/mazury.jpg'} thumbnail fluid/>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>

                    {/* POLISH FOOD */}  
                    <Col md={6} className={'sectionPolishFood mb-4'}>
                        <h3>Polish Food</h3>
                        <h5>Article from culture.pl</h5>
                            <p>
                            "From a treasured lore of ancestral ingredients, Polish cuisine has recently bloomed from virtual obscurity into a rising star on the European scene. 
                            Its great advantage over long-time favorites like French or Italian fare is
                            its range of unexpected tastes: the sharp pungency of mustard plants, the sparkle of fermentation, and umami galore."
                            </p>
                            <a href="https://culture.pl/en/article/a-foreigners-guide-to-polish-cuisine" target="_blank" rel="noopener noreferrer">
                            Link to the full article
                            </a>
                    </Col>

                    {/* ALLERGEN */}
                    <Col md={6} className={'sectionAllergen mb-4'}>
                        <h3>Allergen</h3>
                        <h5>Please, stay carefull</h5>
                            <p>
                            Here you can find the list of all allergen.
                            </p>
                            <ListGroup variant="flush">
                                <ListGroup.Item>- celery</ListGroup.Item>
                                <ListGroup.Item>- cereals containing gluten – including wheat (such as spelt and Khorasan), rye, barley and oats</ListGroup.Item>
                                <ListGroup.Item>- crustaceans – such as prawns, crabs and lobsters</ListGroup.Item>
                                <ListGroup.Item>- eggs</ListGroup.Item>
                                <ListGroup.Item>- fish</ListGroup.Item>
                                <ListGroup.Item>- lupin</ListGroup.Item>
                                <ListGroup.Item>- milk</ListGroup.Item>
                                <ListGroup.Item>- molluscs – such as mussels and oysters</ListGroup.Item>
                                <ListGroup.Item>- mustard</ListGroup.Item>
                                <ListGroup.Item>- tree nuts – including almonds, hazelnuts, walnuts, brazil nuts, cashews, pecans, pistachios and macadamia nuts</ListGroup.Item>
                                <ListGroup.Item>- peanuts</ListGroup.Item>
                                <ListGroup.Item>- sesame seeds</ListGroup.Item>
                                <ListGroup.Item>- soybeans</ListGroup.Item>
                                <ListGroup.Item>- sulphur dioxide and sulphites (if they are at a concentration of more than ten parts per million)</ListGroup.Item>
                            </ListGroup>
                    </Col>

                </Row>
            </Container>
    );
}

export default Menus;