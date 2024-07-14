import React, { useState } from "react";
import ReactStars from "react-stars";
import '../../dist/review.css';

const ReviewForm = ({ orderId, onSubmit }) => {
    const [rating, setRating] = useState(0);
    const [photo, setPhoto] = useState(null);
    const [description, setDescription] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePhotoChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    const handleSubmit = () => {
        onSubmit(orderId, rating, photo, description);
        setIsModalOpen(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={openModal} className="btn btn-primary">Tulis Ulasan</button>

            {isModalOpen && (
                <div className="modal" style={{ display: 'block', zIndex: 1050 }}>
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <div className="review-form">
                            <ReactStars
                                count={5}
                                onChange={(newRating) => setRating(newRating)}
                                size={24}
                                color2={'#ffd700'}
                            />
                            <input type="file" onChange={handlePhotoChange} />
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Tulis ulasan Anda di sini..."
                            ></textarea>
                            <button type="button" onClick={handleSubmit} className="btn btn-primary">
                                Kirim Ulasan
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReviewForm;
