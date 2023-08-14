import React, { useEffect, useState } from 'react';
import { ContainerHome } from './styles';
import { Link } from 'react-router-dom';

function CardsDishes({ dishes }) {
  

  return (
    <ContainerHome>

      {dishes && dishes.length > 0 && (
        <div className="refeições">
          {dishes.map((e, i) => (
            <Link to={`/dishes-details/${e.id}`}>
            <div key={i} className="card1" id={e.id}> 
              <img
                src={`https://backend-9jof.onrender.com/uploads/${e.image}`}
                alt="image-teste"
              />
              <h2>{e.name}</h2>
              <p>{e.ingredients}</p>
              <span>{`R$ ${Number(e.price)
                .toFixed(2)
                .replace('.', ',')}`}</span>
            </div>              
            </Link>
          ))}
        </div>
      )}
    </ContainerHome>
  );
}

export default CardsDishes;
