import React from 'react';
import '../dist/inspiration.css'
  
const InspirationList = ({inspiration, onInspirationClick}) => {
    return (
        <div className="inspiration-list">
        {inspiration.map((ins) => (
            <div className="cont-ins">
                <div key={ins.id} alt='inspiration'>
                <img src={ins.image} />
                <h2 className='text-ins'>{ins.description}</h2> 
                <h6>{ins.date}</h6>
                <button onClick={() => onInspirationClick(ins)}>read more</button>
            </div>
        </div> 
        ))}  
        </div>
    );
};

export default InspirationList;