import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { IoIosStar } from 'react-icons/io';
import '../dist/review.css';

const ReviewList = ({ reviews }) => {
  return (
    <Container className="mt-4 review-list">
      <h3>Ulasan Produk</h3>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <Row key={review.id} className="review-item">
            <Col md={12}>
              <Card>
                <Card.Body>
                  <div className="review-header">
                    <div className="review-user">
                      {review.user?.name || 'Nama pengguna tidak tersedia'}
                    </div>
                    <div className="review-rating">
                      <IoIosStar color='orange' /> {review.rating}
                    </div>
                  </div>
                  <div className="review-comment">
                    {review.comment}
                  </div>
                  {review.photo_path && (
                    <div className="review-photo">
                      <img src={`http://127.0.0.1:8000/storage/${review.photo_path}`} alt="Review" />
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))
      ) : (
        <p>Tidak ada ulasan untuk produk ini.</p>
      )}
    </Container>
  );
};

export default ReviewList;
