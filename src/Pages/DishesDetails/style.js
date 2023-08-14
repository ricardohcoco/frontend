import styled from 'styled-components'

export const ContainerDetailDishe = styled.div`

.botaodesair {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    border: none;
  }

  .bodyDish{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 82.5vh;
  }
  
  .image {
    width: 50%;
  }
  
  .ingredientes {
    font-family: 'Poppins',sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100% !important;
    width: 50%;
    gap: 2rem;
  }
  
  .DetailDish{
    display: flex;
    align-items: center;
    justify-content: center;   
    width: 1024px;
  }

  h2 {
    font-size: 48px; 
  }

  p {
    font-size: 20px;
  }

  span {
    color: ${({ theme }) => theme.COLORS.BLUE};
    font-size: 20px;
  }

  .DetailDish img {
    width: 400px;
  }

  
  
`;