import React from '../../../node_modules/react';
import { Container, Row, Col, Table, } from 'react-bootstrap';
 
const About = () => {
    return (
            <div>
            <Container fluid={true}>
                    <Row>
                        {/* ABOUT US TEXT */}
                        {/* Section used to describe and promote the restaurant */}
                        <Col md={12} className={'sectionAboutUs mb-4'}>
                        <h3>About us:</h3>
                            <p>
                            NaZdrowie is a new polish restaurant. Even more, it's a unique place.<br />
                            You will find all the polish traditions but with a modern twist: modern dishes, proffesional service and a wonderfull cosy building.
                            </p>
                            <p>
                            So if you are a true pole or just an intriged person, come and visit us at our Bruxelles restaurant. You can contact us by the contact form on our website or by calling the 000 00 00 00.
                            The openning hours are described in a schedule that you can find just bellow.
                            </p>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true}>
                    <Row>
                        {/* MAP */}
                        {/* Responsive Google Map API */}
                        <Col md={6} className={'sectionMap mb-4'}>
                        <h3>Find your way:</h3>
                            <div className={"shadow-sm"}>
                                <div className={"map-responsive"}>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80598.89310753962!2d4.3053502767353775!3d50.85495409094795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3a4ed73c76867%3A0xc18b3a66787302a7!2sBruxelles!5e0!3m2!1sfr!2sbe!4v1576682727884!5m2!1sfr!2sbe" width="600" height="450" frameborder="0" allowfullscreen=""></iframe>                                
                                </div>
                            </div>	
                        </Col>

                        {/* SCHEDULE */}
                        {/* HTML schedule with openning and closing hours */}
                        <Col md={6} className={'sectionSchedule mb-4'}>
                        <h3>Schedule:</h3>
                            <Table striped bordered hover variant="dark">
                                <thead className={'text-center'}>
                                    <tr>
                                        <th scope="col">Days</th>
                                        <th scope="col">First service</th>
                                        <th scope="col">Second service</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" className={'text-center'}>
                                            Monday
                                        </th>
                                        <td>
                                            Closed
                                        </td>
                                        <td>
                                            Closed
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className={'text-center'}>
                                            Tuesday
                                        </th>
                                        <td>
                                            1.30pm to 4.30pm
                                        </td>
                                        <td>
                                            7.30pm to 10pm
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className={'text-center'}>
                                            Wednesday
                                        </th>
                                        <td>
                                            1.30pm to 4.30pm
                                        </td>
                                        <td>
                                            7.30pm to 10pm
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className={'text-center'}>
                                            Thursday
                                        </th>
                                        <td>
                                            1.30pm to 4.30pm
                                        </td>
                                        <td>
                                            7.30pm to 10pm
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className={'text-center'}>
                                            Friday
                                        </th>
                                        <td>
                                            1.30pm to 4.30pm
                                        </td>
                                        <td>
                                            7.30pm to 10pm
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className={'text-center'}>
                                            Saturday
                                        </th>
                                        <td>
                                            1pm to 5pm
                                        </td>
                                        <td>
                                            6.30pm to 10.30pm
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className={'text-center'}>
                                            Sunday
                                        </th>
                                        <td>
                                            1pm to 5pm
                                        </td>
                                        <td>
                                            6.30pm to 10.30pm
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
            </Container>
            </div>
    );
}
 
export default About;