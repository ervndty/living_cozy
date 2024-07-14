import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import '../../dist/foot&nav/login.css';

function LoginPopup({ onLogin, show, onHide }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLoginSuccess = (token, userId, userName) => {
    sessionStorage.setItem('auth_token', token);
    sessionStorage.setItem('user_id', userId);
    sessionStorage.setItem('user_name', userName);
    onLogin();
    onHide();

    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: `Hi ${userName}, sukses login!`,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email,
        password
      });

      if (response.data.status) {
        handleLoginSuccess(response.data.access_token, response.data.user.user_id, response.data.user.name);
      } else {
        setError(response.data.message || 'Login gagal. Silakan coba lagi.');
      }
    } catch (err) {
      console.error(err);
      setError('Login gagal. Silakan periksa kembali email atau kata sandi Anda.');
    }
  };

  const handleNavigateToRegister = () => {
    onHide();
    navigate('/register');
  };

  return (
    <Modal show={show} onHide={onHide} centered dialogClassName="login-modal">
      <Modal.Header closeButton bsPrefix="login-modal-header">
        <Modal.Title className="login-modal-title">Masuk</Modal.Title>
        <Button variant="link" className="daftar-link" onClick={handleNavigateToRegister}>
          Daftar
        </Button>
      </Modal.Header>
      <Modal.Body className="login-modal-body">
        {error && <p className="text-danger">{error}</p>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="login-label">Nomor HP atau Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Masukkan nomor HP atau email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="login-label">Kata Sandi</Form.Label>
            <Form.Control
              type="password"
              placeholder="Masukkan kata sandi Anda"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" className="login-button">
              Selanjutnya
            </Button>
            <Button variant="link" className="bantuan-link" onClick={onHide}>
              Butuh bantuan?
            </Button>
          </div>
        </Form>

        <hr className="login-divider" />

        <div className="text-center">
          <p className="login-text">atau masuk dengan</p>
          <Button variant="outline-light" className="google-button">
            <FcGoogle className="me-2" /> Masuk dengan Google
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default LoginPopup;
