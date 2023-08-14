import React, { useEffect, useState } from 'react';
import HomeDishes from '../../components/HomeDishes/HomeDishes';
import axios from 'axios';
import CardsDishes from '../../components/CardsDishes/CardsDishes';
import { ContainerHeader } from '../../components/Header/styles';
import { Footer } from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { ContainerHomePage } from './styles';
import "./styles.css";

function Home({ admin }) {
  const [dataDishes, setDataDishes] = useState([]);
  const [valueSearch, setValueSearch] = useState('');
  const navigate = useNavigate();
  const [resultMeal, setResultMeal] = useState([]);
  const [resultBebidas, setResultBebidas] = useState([]);  
  const [resultDessert, setResultDessert] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataDishesFilter, setDataDishesFilter] = useState([]);

  const fetchApi = async () => {
    try {
      const { data } = await axios.get('https://backend-9jof.onrender.com/dishes/');
      setDataDishes(data);
      setLoading(true);
    } catch (error) {
      console.error("Erro ao carregar os pratos: ", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    setDataDishesFilter(dataDishes);
  }, [dataDishes]);

  useEffect(() => {
    searchDrink();
    searchDessert();
    searchMeal();
  }, [dataDishesFilter]);

  const onChangeTarget = ({ target }) => {
    setValueSearch(target.value);

    if (target.value === '') {
      setDataDishesFilter(dataDishes);
    } else {
      const result = dataDishes.filter(
        (e) =>
          e.name.toLowerCase().includes(target.value.toLowerCase()) ||
          e.ingredients.toLowerCase().includes(target.value.toLowerCase())
      );
      setDataDishesFilter(result);
    }
  };

  const searchDrink = () => {
    const resultbebidas = dataDishesFilter.filter(
      (e) => e.category.toLowerCase() === 'bebidas'
    );
    setResultBebidas(resultbebidas);
  };

  const searchDessert = () => {
    const resultdessert = dataDishesFilter.filter(
      (e) => e.category.toLowerCase() === 'sobremesas'
    );
    setResultDessert(resultdessert);
  };

  const searchMeal = () => {
    const resultcomidas = dataDishesFilter.filter(
      (e) => e.category.toLowerCase() === 'refeições'
    );
    setResultMeal(resultcomidas);
  };

  const newDishe = (e) => {
    e.preventDefault();
    navigate('/add-dishes-post');
  };

  const exit = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div>
      
      {loading && (
        <>
        <ContainerHeader>
        <header className="header-container">
          <div className="header-title">
            <img src="./src/assets/images/foodexplorer.svg" />
            <h3>food explorer</h3>
          </div>
          <input
            value={valueSearch}
            onChange={onChangeTarget}
            type="text"
            placeholder="Busque por pratos ou ingredientes"
          />
          {admin && (
            <button className="newdishe" onClick={newDishe} type="submit">
              Novo Prato
            </button>
          )}
          <button className="botaodesair" onClick={exit} type="submit">
            Sair
          </button>
        </header>
      </ContainerHeader>
      <ContainerHomePage>
        <div className="container-home">
          <div className="header">
            <div className="imghome">
              <img
                src="./src/assets/images/imagemhome.png"
                alt="Imagem de macarons"
              />
            </div>
            <div className="texthome">
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </div>
        </div>
        </ContainerHomePage>
        <div>
            <h1 className="title">Refeições</h1>
            <CardsDishes dishes={resultMeal} />
          </div>
        
  
      
          <div>
            <h1 className="title">Bebidas</h1>
            <CardsDishes dishes={resultBebidas} />
          </div>
        
  
        
          <div>
            <h1 className="title">Sobremesas</h1>
            <CardsDishes dishes={resultDessert} />
          </div>
        </>
          
      )
      }
      
      <Footer />
    </div>
  );
}

export default Home;
