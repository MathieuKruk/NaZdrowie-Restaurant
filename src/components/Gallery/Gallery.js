import React from 'react'; 
import { Container, Row, Col, Image } from 'react-bootstrap';

const Gallery = () => {
    return (
            <Container fluid={true} className={'componentGallery'}>
                <Row>
                    <Container>
                        <Row>
                            <Col xs={12} md={4} className={'mb-4'}>
                                <Image src={process.env.PUBLIC_URL + '/assets/img/gallery/field.jpg'} rounded fluid/>
                            </Col>
                            <Col xs={12} md={4} className={'mb-4'}>
                                <Image src={process.env.PUBLIC_URL + '/assets/img/gallery/mountain2.jpg'} rounded fluid/>
                            </Col>
                            <Col xs={12} md={4} className={'mb-4'}>
                                <Image src={process.env.PUBLIC_URL + '/assets/img/gallery/town3.jpg'} rounded fluid/>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <Container>
                        <Row>
                            <Col xs={12} md={4} className={'mb-4'}>
                                <Image src={process.env.PUBLIC_URL + '/assets/img/gallery/forest.jpg'} rounded fluid/>
                            </Col>
                            <Col xs={12} md={4} className={'mb-4'}>
                                <Image src={process.env.PUBLIC_URL + '/assets/img/gallery/people.jpg'} rounded fluid/>
                            </Col>
                            <Col xs={12} md={4} className={'mb-4'}>
                                <Image src={process.env.PUBLIC_URL + '/assets/img/gallery/town4.jpg'} rounded fluid/>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <Container>
                        <Row>
                            <Col xs={12} md={"4"} className={'mb-4'}>
                                <Image src={process.env.PUBLIC_URL + '/assets/img/gallery/mountain.jpg'} rounded fluid/>
                            </Col>
                            <Col xs={12} md={4} className={'mb-4'}>
                                <Image src={process.env.PUBLIC_URL + '/assets/img/gallery/town.jpg'} rounded fluid/>
                            </Col>
                            <Col xs={12} md={4} className={'mb-4'}>
                                <Image src={process.env.PUBLIC_URL + '/assets/img/gallery/town5.jpg'} rounded fluid/>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <Container>
                        <Row>
                            <Col xs={12} md={4} className={'mb-4'}>
                                <Image src={process.env.PUBLIC_URL + '/assets/img/gallery/mountain3.jpg'} rounded fluid/>
                            </Col>
                            <Col xs={12} md={4} className={'mb-4'}>
                                <Image src={process.env.PUBLIC_URL + '/assets/img/gallery/town2.jpg'} rounded fluid/>
                            </Col>
                            <Col xs={12} md={4} className={'mb-4'}>
                                <Image src={process.env.PUBLIC_URL + '/assets/img/gallery/town6.jpg'} rounded fluid/>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
    );
}
 
export default Gallery;