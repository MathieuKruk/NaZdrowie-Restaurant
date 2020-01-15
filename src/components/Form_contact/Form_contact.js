import React from '../../../node_modules/react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (

         <Container>
            <Row>

               <Col md={{ span: 8, offset: 2 }}>
               <h3>Contact Form:</h3>
                     <Form>

                        <Row>
                           <Col>
                                 <label for="Firstname">First Name</label>
                                 <input type="text" className={"form-control shadow p-3 mb-5 bg-white rounded"} placeholder="Firstname" id="Firstname" />
                           </Col>
                           <Col>
                                 <label for="Lastname">Last Name</label>
                                 <input type="text" className={"form-control shadow p-3 mb-5 bg-white rounded"} placeholder="Lastname" id="Lastname" />
                           </Col>
                        </Row>

                        <Row>
                           <Col>
                                 <label for="Email">Email address</label>
                                 <input type="email" className={"form-control shadow p-3 mb-5 bg-white rounded"} id="Email" placeholder="name@example.com" />
                           </Col>
                        </Row>

                        <Row className={"align-items-center"}>
                           <div className={"col-sm-12 col-md-4"}>
                                 <label className={"mr-sm-2"} for="Subjects">Subject</label>
                                 <select className={"custom-select shadow p-1 mb-5 bg-white rounded"} id="Subjects">
                                    <option disabled>Choose a subject:</option>
                                    <option selected="1">Reservation</option>
                                    <option value="2">Question</option>
                                    <option value="3">Complaint</option>
                                 </select>
                           </div>
                        </Row>

                        
                        <div className={"form-group"}>
                           <label for="exampleFormControlTextarea1">Text Area</label>
                           <textarea className={"form-control shadow p-3 mb-5 bg-white rounded"} id="exampleFormControlTextarea1" rows="10" placeholder="Type your text here"></textarea>
                        </div>
                        <Button variant="dark">Send</Button>

                     </Form>
               </Col>

            </Row>
         </Container>

    );
}
 
export default Contact;