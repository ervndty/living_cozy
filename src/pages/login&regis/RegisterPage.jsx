import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../dist/foot&nav/register.css';
import { FcGoogle } from 'react-icons/fc';
import Button from 'react-bootstrap/Button';

const validationSchema = Yup.object({
  name: Yup.string().required('Nama wajib diisi'),
  email: Yup.string().email('Email tidak valid').required('Email wajib diisi'),
  password: Yup.string().required('Password wajib diisi'),
});

const RegistrationPage = () => {
  const [registerError, setRegisterError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', values);
      if (response.data.status) {
        // Redirect to home page without logging in
        navigate('/');
      } else {
        setRegisterError(response.data.message || 'Pendaftaran gagal. Silakan coba lagi.');
      }
    } catch (err) {
      console.error(err);
      setRegisterError('Terjadi kesalahan. Silakan coba lagi nanti.');
    }
    setSubmitting(false);
  };

  return (
    <div className="registration-container">
      <h2>Daftar Sekarang</h2>
      <p>Sudah punya akun Living Cozy? <a href="/login"><b>Masuk</b></a></p>

      <Button className="google-button">
        <FcGoogle className="google-icon" /> <b>Google</b>
      </Button>

      <center>
        <p className="atau-daftar">-- atau daftar dengan --</p>
      </center>

      {registerError && <div className="error-message">{registerError}</div>}

      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <Field
                type="text"
                name="name"
                placeholder="Nama Anda"
                className="form-control"
              />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <Field
                type="text"
                name="email"
                placeholder="Email"
                className="form-control"
              />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
              />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary btn-block"
            >
              {isSubmitting ? 'Mendaftar...' : 'Daftar'}
            </button>
          </Form>
        )}
      </Formik>

      <p className="syarat-ketentuan">
        Dengan mendaftar, saya menyetujui{' '}
        <a href="/terms"><b>Syarat dan Ketentuan</b></a> serta{' '}
        <a href="/privacy"><b>Kebijakan Privasi</b></a>
      </p>
    </div>
  );
};

export default RegistrationPage;
