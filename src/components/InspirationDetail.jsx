import React from 'react';
import '../dist/inspiration.css'
import { useParams, Link } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";

const inspiration = [
    {
      id: 1,
      title: 'Saat mempunyai rumah baru pikirkanlah desainmu',
      image1: 'https://lagomhomestore.com/cdn/shop/files/meja-kopi-ruang-tamu-dari-kayu-jati-bentuk-persegi-coffee-table-lagom-home-store-teak-furniture-boutique-jati-furnitur-jakarta-40572950872300.jpg?v=1714811877&width=4472',
      image2: 'https://www.mocka.com.au/cdn/shop/files/T03710_Square_01.jpg?v=1709658779',
      date: '10 Mei 2024',
      desc1: 'Meja yang bernilai modern, cocok untuk berada di ruang tamu. Entered at excited at forming between so produce. Chicken unknown besides attacks gay compact out you. Continuing no simplicity no favourable on reasonably melancholy estimating. Own hence views two ask right whole ten seems. What near kept met call old west dine. Our announcing sufficient why pianoforte.',
      desc2: 'Continual delighted as elsewhere am convinced unfeeling. Introduced stimulated attachment no by projection. To loud lady whom my mile sold four. Need miss all four case fine age tell. He families my pleasant speaking it bringing it thoughts. View busy dine oh in knew if even. Boy these along far own other equal old fanny charm. Difficulty invitation put introduced see middletons nor preference.'
    },
    {
      id: 2,
      title: 'Rumah kayu yang mengesankan terasa sangat nyaman',
      image1: 'https://i.pinimg.com/736x/fa/b1/20/fab120421bc64f23a64ecab060e1f00c.jpg',
      image2: 'https://i.pinimg.com/564x/f0/39/b1/f039b15a825304aa0883c4067f200d68.jpg',
      date: '29 September 2023',
      desc1: 'Meja yang bernilai modern, cocok untuk berada di ruang tamu. Entered at excited at forming between so produce. Chicken unknown besides attacks gay compact out you. Continuing no simplicity no favourable on reasonably melancholy estimating. Own hence views two ask right whole ten seems. What near kept met call old west dine. Our announcing sufficient why pianoforte.',
      desc2: 'Continual delighted as elsewhere am convinced unfeeling. Introduced stimulated attachment no by projection. To loud lady whom my mile sold four. Need miss all four case fine age tell. He families my pleasant speaking it bringing it thoughts. View busy dine oh in knew if even. Boy these along far own other equal old fanny charm. Difficulty invitation put introduced see middletons nor preference.'
    },
    {
      id: 3,
      title: 'Apakah kalian pernah membayangkan rumah yang women friendly?',
      image1: 'https://i.pinimg.com/564x/43/ba/d3/43bad366b570ff9e2b2e644ab4cbec06.jpg',
      image2: 'https://i.pinimg.com/564x/e7/51/43/e751437e18d5469c42eb23c68e8cc3de.jpg',
      date: '20 Juni 2024',
      desc1: 'Meja yang bernilai modern, cocok untuk berada di ruang tamu. Entered at excited at forming between so produce. Chicken unknown besides attacks gay compact out you. Continuing no simplicity no favourable on reasonably melancholy estimating. Own hence views two ask right whole ten seems. What near kept met call old west dine. Our announcing sufficient why pianoforte.',
      desc2: 'Continual delighted as elsewhere am convinced unfeeling. Introduced stimulated attachment no by projection. To loud lady whom my mile sold four. Need miss all four case fine age tell. He families my pleasant speaking it bringing it thoughts. View busy dine oh in knew if even. Boy these along far own other equal old fanny charm. Difficulty invitation put introduced see middletons nor preference.'
    }
];

const InspirationDetail = () => {
    const { id } = useParams();
    const ins = inspiration.find((ins) => ins.id === parseInt(id));
  
    if (!ins) {
      return <h2>Inspiration not found</h2>;
    }
  
    return (
      <Container>
      <div className="inspiration-detail w-100">
          <Link to="/inspiration" >
          <IoIosArrowBack size={40} className='backIcon'
          onMouseOver={({target})=>target.style.color="var(--third-color)"}
          onMouseOut={({target})=>target.style.color="var(--secondary-color)"}/>
          </Link>
        
            <h1><b>{ins.title}</b></h1>
            <h6>{ins.date}</h6>
            <img src={ins.image1} alt={ins.title} />
            <p>{ins.desc1}</p>
            <img src={ins.image2} alt={ins.title} />
            <p>{ins.desc2}</p>
      </div>
      </Container>
    );
  };
  
  export default InspirationDetail;