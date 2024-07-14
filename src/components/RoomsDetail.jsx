import React from 'react';
import '../dist/product.css'
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from "react-bootstrap";
// import NavbarComp from "../../components/NavbarComp"
import AfterRoomsList from './AfterRoomsList.jsx';


const RoomsDetail = () => {
    const navigate = useNavigate();

    const handleAroomClick = (aroom) => {
        navigate(`/ARdetail/${aroom.id}`);
    };
    const { id } = useParams();
    const aroom = arooms.find((aroom) => aroom.id === parseInt(id));
  
    if (!aroom) {
      return <h2>Product not found</h2>;
    }
  
    return (
      <Container>
        <div className="arooms-detail w-100">
        <AfterRoomsList arooms={arooms} onAroomClick={handleAroomClick} />
        </div>
      </Container>
    );
  };
  
  export default RoomsDetail;