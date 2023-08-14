import styled from 'styled-components';

export const ContainerHome = styled.div`
  
  .refeições,
  .sobremesas,
  .bebidas {
    display: flex;
    flex-wrap: wrap;
    gap: 27px;
    margin-left: 123px;
    margin-right: 123px;
    margin-bottom: 30px;
    font-family: "Poppins", sans-serif;
    
  }

  .refeições img,
  .sobremesas img,
  .bebidas img {
    width: 176px;
    height: 176px;
  }

  .info {
    display: flex;
    gap: 16px;
    align-items: center;
    
  }

  .card1,
  .card2,
  .card3,
  .card4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    gap: 15px;
    border-radius: 5px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    transition: all 0.6 ease;
    max-width: 260px;
    text-align: center;
    color: white;
    
  }

  .card1:hover {
    cursor: pointer;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    color: ${({ theme }) => theme.COLORS.BLUE};
  }
  `;