import React from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import NavbarComp from '../NavbarComp';
import OrderHistorytab from './OrderHistorytab';
import '../../dist/profile.css'


const HistoryProfile = () => {
    const navigate = useNavigate()

    const handleToProfile = () =>{
        navigate("/profile")
    }

    return (
        <Container className='cont-prof'>
        <NavbarComp />
            <Row className='cont-row'>
                <Col sm={2}>
                    <div className="sidebar-profile">
                      <Row>
                        <Col>
                            <button onClick={() => handleToProfile()} className='btn-prof'>Profile</button>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                            <button className='btn-hist'>History</button>
                        </Col>
                      </Row>
                    </div>
                </Col>
                <Col>
                    <h1><b>Order History</b></h1>
                    <OrderHistorytab />
                </Col>
            </Row>
        </Container>
    )
}

export default HistoryProfile