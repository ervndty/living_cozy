import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import '../dist/home.css'
  
const RoomsList = ({rooms, onRoomsClick}) => {
    return (
        <Container>
        <div className="Rooms-list">
        {rooms.map((room) => (
            <div key={room.id} alt='rooms' onClick={() => onRoomsClick(room)}>
                <div className="cont-rooms" id="rooms">
                    <Row>
                        <Col>
                        <div className="kotakR">
                        <img src={room.image} />
                        </div>
                        <div className="bulletR"><b>{room.nomor}.</b></div>
                        <h5><b>{room.nama}</b></h5>
                        <p>{room.desc}</p>
                        </Col>
                    </Row>
                </div>
            </div> 
        ))}  
        </div>
        </Container>
    );
};

export default RoomsList;