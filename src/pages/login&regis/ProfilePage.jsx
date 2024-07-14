import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import NavbarComp from '../../components/NavbarComp';
import '../../dist/profile.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({
        name: '',
        jenis_kelamin: '',
        no_hp: '',
        tgl_lahir: '',
        alamat: '',
        email: '',
    });

    useEffect(() => {
        // Fetch the profile data on component mount
        axios.get('http://127.0.0.1:8000/api/profile', {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('auth_token')}`
            }
        })
        .then(response => {
            const data = response.data.data;
            setProfile({
                name: data.name || '',
                jenis_kelamin: data.jenis_kelamin || '',
                no_hp: data.no_hp || '',
                tgl_lahir: data.tgl_lahir || '',
                alamat: data.alamat || '',
                email: data.email || ''
            });
        })
        .catch(error => {
            console.error('There was an error fetching the profile data!', error);
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://127.0.0.1:8000/api/profile/update', profile, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('auth_token')}`
            }
        })
        .then(response => {
            console.log(response.data.message);
            alert('Profil berhasil diperbarui');
        })
        .catch(error => {
            console.error('There was an error updating the profile!', error);
        });
    };

    const handleToHistory = () => {
        navigate("/history");
    }

    return (
        <Container className='cont-prof'>
            <NavbarComp />
            <Row className='cont-row'>
                <Col sm={2}>
                    <div className="sidebar-profile">
                        <Row>
                            <Col>
                                <button className='btn-prof'>Profile</button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <button onClick={handleToHistory} className='btn-hist'>History</button>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col>
                    <h1><b>PROFILE</b></h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="form-prof mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                name="name" 
                                value={profile.name} 
                                onChange={handleChange} 
                                placeholder="Nama" 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Sex</Form.Label>
                            <Form.Control 
                                as="select" 
                                name="jenis_kelamin" 
                                value={profile.jenis_kelamin || ''} 
                                onChange={handleChange}
                            >
                                <option value="">Pilih Jenis Kelamin</option>
                                <option value="L">L</option>
                                <option value="P">P</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Nomor Telephone</Form.Label>
                            <Form.Control 
                                name="no_hp" 
                                value={profile.no_hp} 
                                onChange={handleChange} 
                                placeholder="-" 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Birth of Date</Form.Label>
                            <Form.Control 
                                type="date" 
                                name="tgl_lahir" 
                                value={profile.tgl_lahir} 
                                onChange={handleChange} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control 
                                name="alamat" 
                                value={profile.alamat} 
                                onChange={handleChange} 
                                placeholder="" 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                name="email" 
                                value={profile.email} 
                                disabled 
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">Save</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ProfilePage;
