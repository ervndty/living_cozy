import React from 'react';
import { Modal, Button, Row, Col, Image } from 'react-bootstrap';

const CartPopup = ({ show, handleClose, addedItem }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Berhasil Ditambahkan</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="mb-3">
          <Col xs={4}>
            <Image src={addedItem.image_url} fluid />
          </Col>
          <Col xs={8}>
            <p>{addedItem.product_name}</p>
          </Col>
        </Row>
        <h5>Kamu Mungkin Juga Suka</h5>
        <Row>
          {/* Rekomendasi produk bisa ditambahkan di sini */}
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={() => window.location.href='/cart'}>Lihat Keranjang</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartPopup;
