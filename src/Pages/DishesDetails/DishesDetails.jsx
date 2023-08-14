import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ContainerDetailDishe } from './style';
import { HeaderComponent } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';



export default function DishesDetails() {
  const navigate = useNavigate();
  const {id} = useParams()
  const [dataDishes, setDataDishes] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchApi = async () => {
    try {
      const { data } = await axios.get(`https://backend-9jof.onrender.com/dishes/${id}`);
      setDataDishes(data);
      setLoading(true);
    } catch (error) {
      console.error("Erro ao carregar os pratos: ", error);
    }
  };
  console.log(id)
  useEffect(() => {
    fetchApi();
  }, []);
  console.log(dataDishes)


  const exit = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div>
    <HeaderComponent/>
    <ContainerDetailDishe>
      
           
    <div className="bodyDish">
    <button className="botaodesair" onClick={exit} type="submit"> Voltar</button>
      
      
      {loading && (
        <div className="DetailDish">
          <div className="image">
            <img
                src={`https://backend-9jof.onrender.com/uploads/${dataDishes.image}`}
                alt="image-teste"
              />
          </div>  
              <div className="ingredientes">
                <h2>{dataDishes.name}</h2>
                <p>{dataDishes.ingredients}</p>
                <span>{`R$ ${Number(dataDishes.price)
                  .toFixed(2)
                  .replace('.', ',')}`}</span>
              </div>
              
        </div>
      )}

    </div>
                  
    </ContainerDetailDishe>
    <Footer/>              
    </div>
  )
};
