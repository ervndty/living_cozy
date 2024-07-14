import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import InspirationList from '../components/InspirationList.jsx';
import NavbarComp from "../components/NavbarComp.jsx"
import '../dist/inspiration.css'



const inspiration = [
    {
      id: 1,
      description: 'Saat mempunyai rumah baru pikirkanlah desainmu',
      image: 'https://i.pinimg.com/564x/d1/62/ae/d162ae7c8d492982429f7ec9cdb07b6c.jpg',
      date: '10 Mei 2024'
    },
    {
      id: 2,
      description: 'Rumah kayu yang mengesankan terasa sangat nyaman',
      image: 'https://i.pinimg.com/564x/89/4c/4e/894c4eebfdf2af53ab265660d7740bdb.jpg',
      date: '29 September 2023'
    },
    {
      id: 3,
      description: 'Apakah kalian pernah membayangkan rumah yang women friendly?',
      image: 'https://i.pinimg.com/564x/c2/72/83/c2728398c220d6a955c1650c93227c11.jpg',
      date: '20 Juni 2024'
    }
];

const InspirationPage = () => {
    const navigate = useNavigate();

    const handleReadMoreClick = (ins) => {
      navigate(`/Idetail/${ins.id}`);
    };
    
    return (
        <Container className='cont-insP'>
        <NavbarComp />
        <InspirationList inspiration={inspiration} onInspirationClick={handleReadMoreClick} />
        </Container>
    )
  }
  
  export default InspirationPage;  