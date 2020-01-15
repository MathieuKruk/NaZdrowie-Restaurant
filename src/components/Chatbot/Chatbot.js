import React from '../../../node_modules/react';
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Chatbot = () => {
    // Declaring the two possible states of the Chatbot
    // Seting isOpen on false
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <Container fluid={true}>
                <Row>
                    <Col md={{ span: 4, offset: 8 }} className={"d-flex justify-content-end"}>

                        <div className={"componentChatBot"}>
                            {/* Chatbot: Open */}
                            <div 
                            className={isOpen ? "show componentChatbot": "hide componentChatbot"}
                            >
                                <button 
                                    className={"chatbotButton chatbotButtonClose cross"} 
                                    onClick={() => setIsOpen(isOpen => !isOpen)}
                                >
                                    X
                                </button>
                                <iframe
                                    title="botwindow"
                                    allow="microphone;"
                                    width="320"
                                    height="430"
                                    src="https://console.dialogflow.com/api-client/demo/embedded/adcefedd-266c-4032-baab-00470d25c6ad"
                                >
                                </iframe>
                            </div>
                            {/* Chatbot: Closed */}
                            <Button 
                                variant="dark"
                                className={isOpen ? "hide chatbotButtonOpen": "show chatbotButtonOpen"}
                                onClick={() => setIsOpen(isOpen => !isOpen)}
                            >
                                Chatbot <img width="20" height="20" src={process.env.PUBLIC_URL + '/assets/img/logo/logowhite.png'} alt="bot"/>
                            </Button>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Chatbot;    